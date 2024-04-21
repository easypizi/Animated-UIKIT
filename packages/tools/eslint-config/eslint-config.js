module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'no-shadow': 'off',
    'no-underscore-dangle': [
      2,
      {
        allowAfterThis: true,
      },
    ],
    '@typescript-eslint/no-shadow': 'error',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'prettier/prettier': ['error', { jsxBracketSameLine: false }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
