import {defineConfig} from 'vite';
import createVuePlugin from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';
import tailwindcss from "@tailwindcss/vite";
import ViteRestart from 'vite-plugin-restart';
import {partytownVite} from '@builder.io/partytown/utils';
import viteCompression from 'vite-plugin-compression';
import {visualizer} from 'rollup-plugin-visualizer';
import critical from 'rollup-plugin-critical';
import {ViteFaviconsPlugin} from "vite-plugin-favicon2";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: 'manifest.json',
    outDir: '../cms/web/dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        app: 'src/js/app.ts',
        'lazysizes-wrapper': 'src/js/utils/lazysizes-wrapper.ts',
        episodes: 'src/js/modules/episodes.js',
        player: 'src/js/modules/player.js',
      },
    }
  },
  plugins: [
    critical({
      criticalUrl: 'https://devmode.fm/',
      criticalBase: '../cms/web/dist/criticalcss/',
      criticalPages: [
        {uri: '', template: 'index'},
        {uri: 'about', template: 'about/index'},
        {uri: 'calendar', template: 'calendar/index'},
        {uri: 'episodes', template: 'episodes/index'},
        {uri: 'episodes/webpack-inside-out-with-sean-larkin', template: 'episodes/_entry'},
        {uri: 'errors/offline', template: 'errors/offline'},
        {uri: 'errors/error', template: 'errors/error'},
        {uri: 'errors/503', template: 'errors/503'},
        {uri: 'errors/404', template: 'errors/404'},
      ],
      criticalConfig: {}
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    ViteFaviconsPlugin({
      logo: "./src/img/favicon-src.png",
      inject: false,
      outputPath: 'favicons',
    }),
    ViteRestart({
      reload: [
        './src/templates/**/*',
      ],
    }),
    createVuePlugin(),
    partytownVite({
      dest: path.resolve('../cms/web/dist/', '~partytown'),
    }),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i
    }),
    visualizer({
      filename: '../cms/web/dist/stats.html',
      template: 'treemap',
      sourcemap: true,
    }),
    tailwindcss(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,ts}"',
        useFlatConfig: true,
        dev: {
          overrideConfig: {
            cache: true,
          }
        }
      },
      stylelint: {
        lintCommand: 'stylelint ./src/**/*.{css} --allow-empty-input --fix',
        dev: {
          overrideConfig: {
            allowEmptyInput: true,
            cache: true,
            fix: false
          }
        }
      },
      typescript: true,
      vueTsc: true,
    }),
  ],
  optimizeDeps: {
    include: ['axios'],
  },
  publicDir: './src/public',
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, './src')},
      {find: 'vue', replacement: 'vue/dist/vue.esm.js'},
    ],
    preserveSymlinks: true,
  },
  server: {
    // Allow cross-origin requests -- https://github.com/vitejs/vite/security/advisories/GHSA-vg6x-rcgg-rjx6
    allowedHosts: true,
    cors: {
      origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(localhost|\.local|\.test|\.site)(?::\d+)?$/
    },
    fs: {
      strict: false
    },
    headers: {
      "Access-Control-Allow-Private-Network": "true",
    },
    host: '0.0.0.0',
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  }
}));
