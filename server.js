module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "plugins": [
    "json",
    "promise",
  ],
  "rules": {
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "warn",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",

    "array-callback-return": "warn",
    "arrow-parens": ["warn", "always"],
    "comma-spacing": ["error", {"after": true}],
    "curly": "error",
    "eol-last": "warn",
    "eqeqeq": ["error", "smart"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": ["warn", {"beforeLineComment": true}],
    "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 2}],
    "no-console": "off",
    "no-const-assign": "error",
    "no-duplicate-imports": "error",
    "no-eval": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": ["error", {"max": 1}],
    "no-nested-ternary": "warn",
    "no-path-concat": "error",
    "no-script-url": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "warn",
    "no-throw-literal": "error",
    "no-unneeded-ternary": "warn",
    "no-unsafe-negation": "warn",
    "no-unused-vars": ["error", {"argsIgnorePattern": "^_|next", "varsIgnorePattern": "^_"}],
    "no-var": "error",
    "object-curly-spacing": "warn",
    "prefer-template": "warn",
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],
    "space-unary-ops": ["error", {"words": true, "nonwords": false}],
    "spaced-comment": ["warn", "always", {"line": {"exceptions": ["-", "="]}}],
    "template-curly-spacing": "warn",
    "yoda": "warn"
  }
};
