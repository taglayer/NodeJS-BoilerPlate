module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:security/recommended',
    'plugin:json/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-cond-assign': 'error',
    'no-param-reassign': 'off',
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'off',
    'no-return-assign': 'off',
    'no-case-declarations': 'off',
    'max-len': ['error', { 'code': 150 }],
    'quote-props': ['error', 'consistent'],
    'security/detect-object-injection': 'off',
  },
};
