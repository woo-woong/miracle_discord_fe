import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import airbnb from 'eslint-config-airbnb';
import airbnbTypeScript from 'eslint-config-airbnb-typescript';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactRecommended,
  airbnb,
  airbnbTypeScript,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'max-len': ['warn', { code: 100 }],
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
    },
  },
  eslintConfigPrettier,
  {
    ignores: ['dist/*'],
  },
);
