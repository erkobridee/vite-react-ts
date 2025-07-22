import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

import { name } from './package.json';

const nodeEnv = `${process.env.NODE_ENV}`;

console.log(`package name: ${name}`);
console.log(`environment: ${nodeEnv}`);

const isProduction = `${nodeEnv}` === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  ...(isProduction ? { base: `/${name}/` } : { build: { sourcemap: true } }),

  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths()
  ]
});
