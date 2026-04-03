import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // или другой плагин

export default defineConfig({
  base: './', // Добавь это обязательно!
  plugins: [react()],
})
