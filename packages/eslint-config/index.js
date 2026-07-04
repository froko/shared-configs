import path from 'node:path'

import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import { includeIgnoreFile } from 'eslint/config'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const gitingore = path.resolve(process.cwd(), '.gitignore')

export const defaultConfig = [
  includeIgnoreFile(gitingore, { gitignoreResolution: true }),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
]

export const withPrettier = eslintConfigPrettier

export const defaultConfigWithPrettier = [...defaultConfig, withPrettier]
