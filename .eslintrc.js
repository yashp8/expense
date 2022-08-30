module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'prettier/prettier': [
      'off',
      {
        singleQuote: true,
        parser: 'flow',
      },
      {
        usePrettierrc: false,
      },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'warn',
    'react/prop-types': 'off',
    'spaced-comment': 'off',
    'no-console': 'warn',
    'consistent-return': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'no-process-exit': 'off',
    'no-param-reassign': 'off',
    'no-return-await': 'off',
    'no-plusplus': 'off',
    'new-cap': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-unused-vars': ['warn', { argsIgnorePattern: 'req|res|next|val' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
