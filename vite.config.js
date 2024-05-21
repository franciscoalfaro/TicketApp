import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/TicketApp/ingresar',
  server:{
  proxy:{
    '/socket.io':{
      target:'https://franalfaro.ddns.net/serverTicket',
      ws:true
    }
  }

}
})