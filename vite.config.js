import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Ujay/',   // ← your repo name here
  plugins: [react()],
})
