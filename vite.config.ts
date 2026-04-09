import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // HBuilderX 兼容配置
  optimizeDeps: {
    include: ['pinia'],
  },
})
