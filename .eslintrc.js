module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['graphql', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/camelcase': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        mjs: 'never',
        gql: 'never',
        graphql: 'never',
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
  },
  settings: {
    'import/core-modules': ['aws-sdk', 'path', 'aws-lambda'],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.ts', '.gql', 'mjs', '.graphql'],
            alias: {
              '@': __dirname + '/src',
            },
          },
        },
      },
    },
  },
};
