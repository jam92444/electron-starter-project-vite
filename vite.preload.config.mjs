import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    outDir: "out/preload",
    target: "node18",
    rollupOptions: {
      external: ["electron"],
    },
  },
});
