module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true
    "jest": true
  },
  "extends": [
    "./server.js",
    "plugin:react/recommended",
    "plugin:jest/recommended"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    "react/display-name": "off",

    // We'll keeping using this, as we'll switch over to Preact and we don't
    // need to worry about deprecation.
    "react/no-find-dom-node": "off",

    // TODO: Use default after fixing the errors.
    "react/prop-types": "warn",

    "no-console": ["warn", { "allow": ["warn", "error"] }]
  }
};
