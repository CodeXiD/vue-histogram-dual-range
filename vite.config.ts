import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import sourcemaps from 'rollup-plugin-sourcemaps';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueHistogramDualRangeLibrary",
      fileName: "vue-histogram-dual-range-lib",
    },
    rollupOptions: {
      plugins: [sourcemaps()],
      external: ["vue"],
      output: {
        sourcemap: true,
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
