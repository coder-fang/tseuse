import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@tsuse/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@tsuse/core': resolve(__dirname, 'packages/core/index.ts'),
    },
  },
});
