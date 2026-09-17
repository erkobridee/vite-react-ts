import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://github.com/eslint/eslint/discussions/15305
import { readFileSync } from 'fs';
const packageJSON = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf-8' }),
);

const { name } = packageJSON;

const nodeEnv = `${process.env.NODE_ENV}`;

console.log(`package name: ${name}`);
console.log(`environment: ${nodeEnv}`);

const isProduction = `${nodeEnv}` === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  ...(isProduction ? { base: `/${name}/` } : { build: { sourcemap: true } }),

  resolve: {
    tsconfigPaths: true,
  },

  plugins: [tailwindcss(), react()],
});
