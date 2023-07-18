import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: [
    //   { find: '@', replacement: resolve(__dirname, 'src') },
    // ],
    alias: {
      "@": resolve(__dirname, "src"),
      "@/components": resolve(__dirname, "src/components"),
    },
  },
  css: {
    devSourcemap: true,
  },
});
