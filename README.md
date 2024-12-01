# shared-configs

A MonoRepo with shared configurations for prettier, ESLint and renovate.

| **Package**                                                                     | **Version**                                                                                                                                   | **Downloads**                                                                                                 |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 📦 [`@froko/prettier-config`](https://npmjs.com/package/@froko/prettier-config) | ![](https://img.shields.io/npm/v/%40froko%2Fprettier-config/latest.svg)                                                                       | [![](https://img.shields.io/npm/dw/@froko/prettier-config)](https://npmjs.com/package/@froko/prettier-config) |
| 📦 [`@froko/eslint-config`](https://npmjs.com/package/@froko/eslint-config)     | ![](https://img.shields.io/npm/v/%40froko%2Feslint-config/latest.svg)                                                                         | [![](https://img.shields.io/npm/dw/@froko/eslint-config)](https://npmjs.com/package/@froko/eslint-config)     |
| 📝 [`@froko/renovate-config`](https://npmjs.com/package/@froko/prettier-config) | ![](https://img.shields.io/github/package-json/v/froko/shared-configs?filename=packages%2Frenovate-config%2Findex.json&label=github%40latest) | -                                                                                                             |

---

## 📦 [`@froko/prettier-config`](https://www.npmjs.com/package/@froko/prettier-config)

### 📥 Installation

```bash
npm install --save-dev @froko/prettier-config
yarn add --dev @froko/prettier-config
pnpm install --save-dev @froko/prettier-config
```

### 🔩 Usage

```js
// prettier.config.mjs
import prettierConfig from '@froko/prettier-config'

export default {
  ...prettierConfig,
}
```

```json
// package.json
{
  "prettier": "@froko/prettier-config"
}
```

### 📝 Content

```js
const config = {
  semi: false,
  singleQuote: true,
  bracketSameLine: true,
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
  ],
}

export default config
```

There are no settigs for indentation and line length. Prettier inherits those
settings from `.editorconfig`.
[Here](https://gist.github.com/froko/5a8fa7332908c459ff562127e2ea60d5) you can
find an example configuration.

---

## 📦 [`@froko/eslint-config`](https://www.npmjs.com/package/@froko/eslint-config)

### 📥 Installation

```bash
npm install --save-dev @froko/eslint-config
yarn add --dev @froko/eslint-config
pnpm install --save-dev @froko/eslint-config
```

### 🔩 Usage

#### Basic configuration

The default configuration includes recommended rules for JavaScript, strict and
stylistic rules for TypeScript and the SimpleImportSort plugin. Files and
directories defined in `.gitignore` are ignored automatically.

```js
// eslint.config.js
import { defaultConfigWithPrettier } from '@froko/eslint-config'

export default [...defaultConfigWithPrettier]
```

#### Configuration with additional plugins

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

---

## 📝 @froko/renovate-config

> [!WARNING]  
> This package is not published to npm - it's a configuration preset!

### 🔩 Usage

```json
// renovate.json
{
  "extends": [
    "github>froko/shared-configs//packages/renovate-config/index.json"
  ]
}
```

### 📝 Content

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended"],
  "lockFileMaintenance": {
    "enabled": true,
    "automerge": true,
    "schedule": ["before 7am on Monday"]
  },
  "packageRules": [
    {
      "description": "Automerge non-major updates",
      "groupName": "all non-major dependencies",
      "groupSlug": "all-minor-patch",
      "matchPackageNames": ["*"],
      "matchUpdateTypes": ["minor", "patch"],
      "automerge": true,
      "schedule": ["before 6am on Monday"]
    }
  ]
}
```
