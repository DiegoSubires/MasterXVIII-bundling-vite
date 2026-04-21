import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    checker({ typescript: true }),
    viteCompression({ algorithm: "gzip", ext: ".gz" }),
    viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
    visualizer({
      open: true,
      filename: "bundle-report.html",
      gzipSize: true,
      brotliSize: true,
    }),
    ViteImageOptimizer({
      webp: { quality: 75 },
      png: { quality: 75 },
    }),
  ],
});
