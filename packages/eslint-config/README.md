# 📦 [`@froko/eslint-config`](https://www.npmjs.com/package/@froko/eslint-config)

## 📥 Installation

```bash
npm install --save-dev @froko/eslint-config
yarn add --dev @froko/eslint-config
pnpm install --save-dev @froko/eslint-config
```

## 🔩 Usage

### Basic configuration

The default configuration includes recommended rules for JavaScript, strict and
stylistic rules for TypeScript and the SimpleImportSort plugin. Files and
directories defined in `.gitignore` are ignored automatically.

```js
// eslint.config.js
import { defaultConfigWithPrettier } from '@froko/eslint-config'

export default [...defaultConfigWithPrettier]
```

### Configuration with additional plugins

As right now, the shared eslint config does not provide any other plugins. But
you can add the required plugins after the default configuration. Be aware that
the prettier plugin has to be included as last element.

```js
// eslint.config.js
import { defaultConfig, withPrettier } from '@froko/eslint-config'

export default [
  ...defaultConfig,
  // your plugins,
  withPrettier,
]
```

### 📝 Content

```js
import path from 'node:path'

import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const gitingore = path.resolve(process.cwd(), '.gitignore')

export const defaultConfig = tseslint.config(
  includeIgnoreFile(gitingore),
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
)

export const withPrettier = eslintConfigPrettier

export const defaultConfigWithPrettier = [...defaultConfig, withPrettier]
```
