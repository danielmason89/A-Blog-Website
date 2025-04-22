import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
     outDir: 'build'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    }
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
  }
});