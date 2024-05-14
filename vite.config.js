import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@qrCode': '/packages/qr-code-component/src',
      '@recipePage': '/packages/recipe-page/src',
    },
  }
})
