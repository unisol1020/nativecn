import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  target: 'esnext',
  outDir: 'dist',
  format: ['esm'],
  esbuildOptions: (options) => {
    options.banner = {
      js: '#!/usr/bin/env node',
    };
  },
});
