/**
 * Slow-drifting colour fields behind the whole page.
 *
 * Pure CSS (see `.aurora` in index.css) so it costs nothing on the main thread and
 * keeps animating without React re-rendering. Sits at z-index -1: above the body
 * background, behind every section — which is what gives the glass panels
 * something to blur.
 */
const AmbientBackground = () => (
  <div className="aurora" aria-hidden="true">
    <span className="aurora-a" />
    <span className="aurora-b" />
    <span className="aurora-c" />
  </div>
);

export default AmbientBackground;
