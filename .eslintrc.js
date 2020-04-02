module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/camelcase': ["error", { "properties": "never", "ignoreDestructuring": true }],
	  "@typescript-eslint/explicit-function-return-type": 'off',
    '@typescript-eslint/indent': [2, 2],
    'arrow-parens': ['error', 'as-needed'],
    'camelcase': 'off',
    'import/extensions': ['error', 'always', {
      'js': ['error', 'never'],
      'jsx': ['error', 'never'],
      'ts': ['error', 'never'],
      'tsx': ['error', 'never'],
    }],
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    /**
     * Deshabilitado hasta averiguar una forma de permitir LF-CRLF auto conversion en desarrollo
     * multi-SO. Al commitear se ha de mantener la conversión a LF.
     */
    'linebreak-style': 0,
    'max-len': ["error", { "code": 150 }],
    'no-underscore-dangle': ["error", { "allow": ["__"] }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
};
