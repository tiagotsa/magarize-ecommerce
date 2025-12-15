import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        checkout: path.resolve(__dirname, 'checkout.html'),
        pedidos: path.resolve(__dirname, 'pedidos.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
