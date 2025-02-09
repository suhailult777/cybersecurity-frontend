import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '086d-49-204-17-10.ngrok-free.app', // Your ngrok URL
      'localhost', // Allow localhost (default)
    ],
  }
});