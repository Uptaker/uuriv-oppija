import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import {BASE_URL} from './config'

export default defineConfig({
  plugins: [react()],
  base: BASE_URL === '/' ? '/' : (BASE_URL + '/'),
  build: {
    minify: 'esbuild',
    target: "esnext"
  },
  server: {
      proxy: (BASE_URL === '/') ? {} : {'/i18n': {
        target: BASE_URL + '/i18n',
        secure: false,
      }
    }
  }
})
