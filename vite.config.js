import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative paths support GitHub Pages project sites under /REPOSITORY_NAME/
  base: './',
  plugins: [react()],
})
