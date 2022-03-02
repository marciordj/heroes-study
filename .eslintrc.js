// eslint-disable-next-line @typescript-eslint/no-require-imports
const generator = require('@eduzz/eslint-config-houston/configs/generator');

module.exports = {
  extends: ['@eduzz/eslint-config-houston/native'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-lines': ['error', 400],
    'react-hooks/exhaustive-deps': generator.exhaustiveDeps(
      'warn',
      ['useStyles', 'useCallbackGenerator', 'useMask', 'useTabIndex', 'useHeaderOptions'],
      true,
    ),
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['block-like', 'function'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['*'],
        next: ['block-like', 'function'],
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['export', 'import'],
        next: ['export', 'import'],
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['export'],
      },
    ],
  },
};
