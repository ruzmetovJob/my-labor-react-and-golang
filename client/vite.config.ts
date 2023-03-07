import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
const pathSrc =  resolve(__dirname, './src/pages/');
console.log(pathSrc)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
      components: '/src/components',
      hooks: '/src/hooks',
      assetss: '/src/assetss',
      configs: '/src/configs',
      contexts: '/src/contexts',
      interfaces: '/src/interfaces',
      layouts: '/src/layouts',
      pages: resolve(__dirname, './src/pages/'),
      store: '/src/store',
      utils: '/src/utils',
    },
    extensions: ['.css','.scss', '.ts','.tsx', '.js', '.jsx', '.json']
  }
})