/// <reference types="vitest" />

import { defineConfig } from "vite"

import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [react(), tailwindcss()],
  envDir: "./envs",
  envPrefix: "PUBLIC_",
  test: {
    globals: true,
    css: true,
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,
    include: ["./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "./src/testing/**",
      "./src/config/**",
      "**/*.config.*",
      "**/*.d.*",
    ],
    coverage: {
      exclude: [
        "./src/testing/**",
        "./src/config/**",
        "**/*.config.*",
        "**/*.d.*",
      ],
    },
  },
})
