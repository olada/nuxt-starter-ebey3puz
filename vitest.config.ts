import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    include: ['**/*.spec.ts'],
    globals: true,
    environment: 'jsdom'
  },
});
