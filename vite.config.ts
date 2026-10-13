/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'infrastructure/resources/build', // Вказуємо папку для білду, яка буде використовуватись CDK
    rollupOptions: {
      onwarn(warning, warn) {
        // MUI 9 files start with 'use client', which is meaningless outside React Server Components
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        warn(warning);
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    // MUI 9 ships ESM that imports CJS Emotion; let Vite transform it so default imports interop
    deps: { inline: [/@mui\//] },
  },
});
