module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: ['jest', 'react'],
  extends: [
    './server.js',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    'react/display-name': 'off',

    // We'll keeping using this, as we'll switch over to Preact and we don't
    // need to worry about deprecation.
    'react/no-find-dom-node': 'off',

    // TODO: Use default after fixing the errors.
    'react/prop-types': 'warn',

    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
