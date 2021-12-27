import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteImages from "vite-plugin-vue-images";
import path from "path";

export default defineConfig({
  plugins: [vue(), ViteImages()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
