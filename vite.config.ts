import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from "vite-plugin-eslint";
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import VitePluginHtmlEnv from 'vite-plugin-html-env'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8888,
    host: '0.0.0.0',
    https: true
  },
  plugins: [
    VitePluginHtmlEnv({
      compiler: true
    }),
    basicSsl(),
    react(),
    eslintPlugin({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      stream: 'rollup-plugin-node-polyfills/polyfills/stream',
      util: 'rollup-plugin-node-polyfills/polyfills/util',
      jQuery: 'jquery/dist/jquery.js',
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        rollupNodePolyFill() as any,
      ],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
})
