import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      assets: '/src/assets',
      configs: '/src/configs',
      contexts: '/src/contexts',
      interfaces: '/src/interfaces',
      layouts: '/src/layouts',
      pages: '/src/pages',
      store: '/src/store',
      utils: '/src/utils',
    }
  }
})
