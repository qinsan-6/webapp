import { defineConfig } from 'vite'
import {resolve} from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':resolve(__dirname, 'src')
    }
  },
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }
  }
})
