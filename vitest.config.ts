'use strict';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['__tests__/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**'],
    },
  },
});
