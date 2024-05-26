import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://franalfaro.ddns.net/TicketApp/',
  server: {
    proxy: {
      '/socket.io': {
        target: 'https://franalfaro.ddns.net/serverTicket/',
        changeOrigin: true,
        secure: false, // Esto ignora los errores de certificado SSL autofirmado.
        ws: true,
        pathRewrite: {
          '^/socket.io': '/serverTicket/socket.io'
        }
      }
    }
  }
});
