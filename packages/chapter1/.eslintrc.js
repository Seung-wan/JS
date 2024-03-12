module.exports = {
  root: true,
  env: { browser: true, node: true, jest: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['dist', '.eslintrc.js'],
  rules: {
    'no-console': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
