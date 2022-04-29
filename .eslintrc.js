module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  plugins: [
    'react',
    'html',
  ],
  rules: {
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-shadow': 'off',
    'no-restricted-globals': 'off',
  },
}
