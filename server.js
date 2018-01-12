module.exports = {
  extends: ['prettier'],
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  plugins: ['prettier', 'react', 'promise'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5' }],
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'warn',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'no-undef': 'error',
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_|next', varsIgnorePattern: '^_' },
    ],
    'no-empty-pattern': 'error',
    'default-case': 'warn',
  },
};
