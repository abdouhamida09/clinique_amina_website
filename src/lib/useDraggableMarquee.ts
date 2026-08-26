import { useRef, type MouseEvent, type RefObject } from 'react';
import {
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
  wrap,
  type MotionStyle,
  type PanInfo,
} from 'framer-motion';

/**
 * Un ruban qui défile tout seul et que le lecteur peut attraper.
 *
 * Le rail est fait de deux moitiés identiques, donc un déplacement de -50 %
 * ramène exactement sur une copie du début : la boucle n'a pas de couture. Ce
 * déplacement est compté en pourcentage du rail plutôt qu'en pixels, pour rester
 * juste quelle que soit la largeur des cartes ou de l'écran.
 *
 * La position vit dans une `MotionValue` et non dans des keyframes CSS : le
 * lecteur peut la reprendre à la main, donc il faut que JS en soit propriétaire.
 * Cela reste aussi économe — une seule écriture de `translateX` sur un seul
 * élément par image, sans layout ni repaint. C'est aussi pour cette raison que
 * les cartes du ruban sont des surfaces plates et non des `.glass` : une
 * douzaine de `backdrop-filter` sous une animation continue, c'est ce qui fait
 * hurler le ventilateur.
 *
 * Trois choses déplacent le ruban, par ordre de priorité : le glissement sous le
 * doigt, l'élan qui survit au relâchement, et sinon la dérive lente. La dérive
 * se met en pause au survol et au focus — c'est ce qui rend les cartes
 * cliquables : le lecteur tend la main vers l'une d'elles, le ruban s'arrête
 * sous le pointeur.
 */

/** Un élan s'éteint en environ ce temps. */
const FLICK_DECAY_SECONDS = 0.35;
/** Plafond de l'élan, pour qu'un geste violent ne fasse pas défiler tout le rail. */
const MAX_FLICK_PERCENT_PER_SECOND = 160;
/** En dessous, le glissé est fini et le ruban repasse la main à la dérive. */
const FLICK_REST_PERCENT_PER_SECOND = 0.05;

interface Options {
  /** Secondes que met le rail à parcourir une boucle complète, à vide. */
  loopSeconds: number;
}

interface DraggableMarquee<T extends HTMLElement> {
  /** À étaler sur le conteneur qui masque le débordement. */
  viewportProps: {
    onPointerEnter: () => void;
    onPointerLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
  };
  /** À étaler sur le rail lui-même (un `motion.ul`). */
  trackProps: {
    ref: RefObject<T | null>;
    style: MotionStyle | undefined;
    onPanStart: (() => void) | undefined;
    onPan: ((event: PointerEvent, info: PanInfo) => void) | undefined;
    onPanEnd: ((event: PointerEvent, info: PanInfo) => void) | undefined;
    onPointerDownCapture: () => void;
    onClickCapture: (event: MouseEvent) => void;
    onDragStart: (event: { preventDefault: () => void }) => void;
  };
}

export function useDraggableMarquee<T extends HTMLElement = HTMLUListElement>({
  loopSeconds,
}: Options): DraggableMarquee<T> {
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<T>(null);

  const offset = useMotionValue(0);
  const x = useTransform(offset, (value) => `${wrap(-50, 0, value)}%`);

  /** Pourcentage du rail parcouru chaque seconde par la dérive au repos. */
  const driftPerSecond = 50 / loopSeconds;

  /* Des refs, pas du state : rien à l'écran n'en dépend, et survoler un ruban de
     plusieurs dizaines de cartes ne doit pas coûter un rendu React. */
  const paused = useRef(false);
  const dragging = useRef(false);
  /** Vitesse restante après un lancer, en pourcentage par seconde. */
  const flick = useRef(0);
  /** Levé dès qu'un glissement commence, pour que le clic qui le termine n'ouvre rien. */
  const dragged = useRef(false);

  /** Pixels parcourus par le pointeur → pourcentage du rail. */
  const toPercent = (px: number) => {
    const width = trackRef.current?.offsetWidth ?? 0;
    return width === 0 ? 0 : (px / width) * 100;
  };

  useAnimationFrame((_, delta) => {
    const seconds = delta / 1000;

    // La main gagne : tant qu'un doigt ou un pointeur tient le ruban, rien
    // d'autre n'a le droit de le déplacer.
    if (dragging.current) return;

    if (Math.abs(flick.current) > FLICK_REST_PERCENT_PER_SECOND) {
      offset.set(offset.get() + flick.current * seconds);
      // Décroissance exponentielle plutôt qu'un pas fixe, pour que le glissé
      // ralentisse pareil quel que soit le taux de rafraîchissement.
      flick.current *= Math.exp(-seconds / FLICK_DECAY_SECONDS);
      return;
    }

    flick.current = 0;
    if (paused.current || prefersReducedMotion) return;
    offset.set(offset.get() - driftPerSecond * seconds);
  });

  const onPanStart = () => {
    dragging.current = true;
    dragged.current = true;
    flick.current = 0;
  };

  const onPan = (_: PointerEvent, info: PanInfo) => {
    offset.set(offset.get() + toPercent(info.delta.x));
  };

  const onPanEnd = (_: PointerEvent, info: PanInfo) => {
    dragging.current = false;
    flick.current = Math.max(
      -MAX_FLICK_PERCENT_PER_SECOND,
      Math.min(MAX_FLICK_PERCENT_PER_SECOND, toPercent(info.velocity.x)),
    );
  };

  return {
    viewportProps: {
      onPointerEnter: () => (paused.current = true),
      onPointerLeave: () => (paused.current = false),
      /* `onFocus`/`onBlur` remontent en React : ils tiennent lieu du
         `:focus-within` sur lequel s'appuyait la version CSS. */
      onFocus: () => (paused.current = true),
      onBlur: () => (paused.current = false),
    },
    trackProps: {
      ref: trackRef,
      /* Sous « animations réduites » le ruban ne porte ni transform ni pan : la
         CSS transforme la rangée en rail à défilement natif, que la molette, le
         pavé tactile, la barre de défilement et le clavier savent déjà piloter.
         Superposer notre transform à ce défilement laisserait le bout du rail
         vide. */
      style: prefersReducedMotion ? undefined : { x },
      onPanStart: prefersReducedMotion ? undefined : onPanStart,
      onPan: prefersReducedMotion ? undefined : onPan,
      onPanEnd: prefersReducedMotion ? undefined : onPanEnd,
      /* Remis à zéro au début de chaque interaction, et pas seulement quand un
         clic suit un glissement : un glissement relâché hors du ruban ne produit
         jamais ce clic, et le drapeau resterait levé à avaler le suivant. */
      onPointerDownCapture: () => (dragged.current = false),
      /* Un glissement se termine par un clic. L'avaler en phase de capture
         l'empêche d'atteindre le bouton sur lequel le pointeur a fini. */
      onClickCapture: (event: MouseEvent) => {
        if (!dragged.current) return;
        dragged.current = false;
        event.preventDefault();
        event.stopPropagation();
      },
      /* Sinon le navigateur lance son propre glisser d'image au milieu du nôtre. */
      onDragStart: (event: { preventDefault: () => void }) => event.preventDefault(),
    },
  };
}
