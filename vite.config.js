import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    polyfillDynamicImport: true,
  },
});
