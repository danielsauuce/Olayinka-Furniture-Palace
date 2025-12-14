// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import ts from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      react,
      'react-native': reactNative,
      '@typescript-eslint': ts,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
