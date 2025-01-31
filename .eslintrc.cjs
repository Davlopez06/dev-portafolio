module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'next',
    'next/typescript',
  ],
  ignorePatterns: ['.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    'react/prop-types': 'off',
    'max-len': ['error', { code: 150 }],
    quotes: ['error', 'single'],
    'no-underscore-dangle': 'off',
    'template-curly-spacing': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
    'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
    'react/self-closing-comp': 'error',
    'import/extensions': ['error', 'never'],
    // Reglas para TypeScript
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};