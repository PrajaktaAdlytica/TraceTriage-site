import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["gsap", "gsap/ScrollTrigger", "lenis"],
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  server: { port: 4173, strictPort: true },
  preview: { port: 4173, strictPort: true },
});
