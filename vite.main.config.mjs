import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    outDir: "out/main",
    target: "node18",
    rollupOptions: {
      external: ["electron"],
    },
  },
});
