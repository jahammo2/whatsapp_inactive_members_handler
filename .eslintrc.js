module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
    "cypress/globals": true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:jsx-control-statements/recommended',
  ],
  plugins: ['cypress', 'jest', 'jsx-control-statements', 'react'],
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'import/no-unresolved': 'off',

    'key-spacing': ['error', {
      afterColon  : true,
      align       : 'colon',
      beforeColon : true,
      mode        : 'minimum',
    }],

    'max-len': ['error', {
      code : 100,
      comments : 150,
      "ignorePattern": "^import\\s.+\\sfrom\\s.+;$|^\\s*\<path\\s.+|d\=\"",
    }],

    'no-multi-str': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': ['error', { 'consistent': true }],
    'operator-linebreak': ['error', 'after'],
    'react/jsx-curly-spacing' : ['error', { 'when': 'always', 'attributes': {'allowMultiline': false}, 'children': true }],
    'react/jsx-no-undef': ['error', { 'allowGlobals': true }],
    'react/sort-comp': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    },

    react: {
      version: 'detect',
    },
  }
};
