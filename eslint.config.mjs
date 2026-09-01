import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Root config files were outside `next lint`'s default scope
    // (app/, pages/, components/, lib/, src/); keep them out of `eslint .` too.
    'jest.config.js',
    'jest.setup.js',
    'jest.setup.d.ts',
    'postcss.config.mjs',
  ]),
]);

export default eslintConfig;
