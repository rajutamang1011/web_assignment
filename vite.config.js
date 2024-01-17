import react from '@vitejs/plugin-react'
import sass from 'sass'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/web_assignment',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
