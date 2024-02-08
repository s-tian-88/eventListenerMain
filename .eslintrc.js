module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-multi-str': 'off',
    'no-plusplus': 'off',
    // 'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-alert': 'off',
  },
};
