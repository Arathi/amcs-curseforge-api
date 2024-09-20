import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "CurseForgeApi",
      fileName: "index",
    },
  },
});
