module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': ['error', 'after'],
    'no-return-await': 'off',
    'import/no-extraneous-dependencies': 'off',
    'default-param-last': 'off',
    'no-restricted-exports': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',

    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }], // airbnb is using .jsx

    'react/function-component-definition': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    indent: 'off',
  },
};
