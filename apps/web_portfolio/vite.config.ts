import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import esbuild from 'rollup-plugin-esbuild'
import path from 'path'

export default defineConfig({
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@logos': path.resolve(__dirname, 'src/assets/logos'),
      '@files': path.resolve(__dirname, 'src/assets/files'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@context': path.resolve(__dirname, 'src/context'),
    },
  },
  plugins: [
    react(),
    esbuild({
      loaders: {
        tsx: 'tsx',
      },
      target: 'esnext',
      minify: process.env.NODE_ENV === 'production',
    }),
  ],
})
