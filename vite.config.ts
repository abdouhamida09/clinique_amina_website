import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({

  // IMPORTANT :
  // Si le site revient à la racine du domaine,
  // supprimer ou commenter cette ligne.
  // Exemple :
  // base: '/website/',
  //tu peux rajouter website/fr/ ou website/ar/ ou website/en/ selon la langue de ton site.
  // Exemple :
  // base: '/website/fr/',
  //
  
  
  //base: '/website/',

  // `host: true` binds the dev and preview servers to every network interface
  // instead of localhost only, so anyone on the same Wi-Fi can open the page at
  // http://<this-machine-ip>:5173. Vite prints the address as "Network:" on start.
  server: {
    host: true,
  },
  preview: {
    host: true,
  },

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
