import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TicketApp/', // Define el subdirectorio base
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3000/',
        ws: true
      }
    }
  }
});
