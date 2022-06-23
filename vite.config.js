import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  plugins: [vue()],
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5000
  }
})