module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'standard',
    'standard-jsx',
    ...['./rules/base', './rules/prettier'].map(require.resolve),
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        ...['./rules/typescript', './rules/prettier'].map(require.resolve),
      ],
      settings: {
        /**
         * import plugin with Typescript configuration
         * https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
         */
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
    },
  ],
}
