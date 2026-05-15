# shared-configs

A MonoRepo with shared configurations for prettier, ESLint, oxfmt, oxlint and
renovate.

| **Package**                                                                                                      | **Version**                                                             | **Downloads**                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 📦 [`@froko/prettier-config`](https://npmjs.com/package/@froko/prettier-config)                                  | ![](https://img.shields.io/npm/v/%40froko%2Fprettier-config/latest.svg) | [![](https://img.shields.io/npm/dw/@froko/prettier-config)](https://npmjs.com/package/@froko/prettier-config) |
| 📦 [`@froko/eslint-config`](https://npmjs.com/package/@froko/eslint-config)                                      | ![](https://img.shields.io/npm/v/%40froko%2Feslint-config/latest.svg)   | [![](https://img.shields.io/npm/dw/@froko/eslint-config)](https://npmjs.com/package/@froko/eslint-config)     |
| 📦 [`@froko/oxfmt-config`](https://npmjs.com/package/@froko/oxfmt-config)                                        | ![](https://img.shields.io/npm/v/%40froko%2Foxfmt-config/latest.svg)    | [![](https://img.shields.io/npm/dw/@froko/oxfmt-config)](https://npmjs.com/package/@froko/oxfmt-config)       |
| 📦 [`@froko/oxlint-config`](https://npmjs.com/package/@froko/oxlint-config)                                      | ![](https://img.shields.io/npm/v/%40froko%2Foxlint-config/latest.svg)   | [![](https://img.shields.io/npm/dw/@froko/oxlint-config)](https://npmjs.com/package/@froko/oxlint-config)     |
| 📝 [`@froko/renovate-config`](https://github.com/froko/shared-configs/blob/main/README.md#-frokorenovate-config) | -                                                                       | -                                                                                                             |

---

## 📦 [`@froko/prettier-config`](https://www.npmjs.com/package/@froko/prettier-config)

### 📥 Installation

```bash
npm install --save-dev @froko/prettier-config prettier
yarn add --dev @froko/prettier-config prettier
pnpm install --save-dev @froko/prettier-config prettier
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
npm install --save-dev @froko/eslint-config eslint
yarn add --dev @froko/eslint-config eslint
pnpm install --save-dev @froko/eslint-config eslint
```

### 🔩 Usage

#### Basic configuration

The default configuration includes recommended rules for JavaScript, strict and
stylistic rules for TypeScript and the SimpleImportSort plugin. Files and
directories defined in `.gitignore` are ignored automatically.

```js
// eslint.config.js
import { defaultConfigWithPrettier } from '@froko/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig(defaultConfigWithPrettier)
```

#### Configuration with additional plugins

As right now, the shared eslint config does not provide any other plugins. But
you can add the required plugins after the default configuration. Be aware that
the prettier plugin has to be included as last element.

```js
// eslint.config.js
import { defaultConfig, withPrettier } from '@froko/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  defaultConfig,
  // your plugins,
  withPrettier,
)
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

export const defaultConfig = [
  includeIgnoreFile(gitingore),
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
  },
  tseslint.configs.strict,
  tseslint.configs.stylistic,
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
```

---

## 📦 [`@froko/oxfmt-config`](https://www.npmjs.com/package/@froko/oxfmt-config)

### 📥 Installation

```bash
npm install --save-dev @froko/oxfmt-config oxfmt
yarn add --dev @froko/oxfmt-config oxfmt
pnpm install --save-dev @froko/oxfmt-config oxfmt
```

### 🔩 Usage

```ts
// oxfmt.config.ts
import config from '@froko/oxfmt-config'

export default config
```

Or with custom overrides:

```ts
// oxfmt.config.ts
import config from '@froko/oxfmt-config'
import { defineConfig } from 'oxfmt'

export default defineConfig({
  ...config,
  // your overrides
})
```

### 📝 Content

```json
{
  "semi": false,
  "singleQuote": true,
  "bracketSameLine": true,
  "printWidth": 80,
  "sortImports": {},
  "overrides": [
    {
      "files": ["*.md"],
      "options": {
        "proseWrap": "always"
      }
    }
  ]
}
```

There are no settings for indentation and line length. Oxfmt inherits those
settings from `.editorconfig`.
[Here](https://gist.github.com/froko/5a8fa7332908c459ff562127e2ea60d5) you can
find an example configuration.

---

## 📦 [`@froko/oxlint-config`](https://www.npmjs.com/package/@froko/oxlint-config)

### 📥 Installation

```bash
npm install --save-dev @froko/oxlint-config oxlint
yarn add --dev @froko/oxlint-config oxlint
pnpm install --save-dev @froko/oxlint-config oxlint
```

### 🔩 Usage

#### Basic configuration

The default configuration includes the `typescript` and `import` plugins,
enables `correctness` and `suspicious` rule categories, and provides sensible
TypeScript and import rules. Browser and Node.js globals are enabled.

```ts
// oxlint.config.ts
import config from '@froko/oxlint-config'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [config],
})
```

#### Configuration with additional rules

You can extend the shared config with project-specific rules:

```ts
// oxlint.config.ts
import config from '@froko/oxlint-config'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [config],
  rules: {
    'no-console': 'warn',
  },
})
```

#### JSON configuration

```json
// .oxlintrc.json
{
  "extends": ["./node_modules/@froko/oxlint-config/.oxlintrc.json"]
}
```

### 📝 Content

```json
{
  "plugins": ["typescript", "import"],
  "env": {
    "browser": true,
    "node": true
  },
  "categories": {
    "correctness": "error",
    "suspicious": "warn"
  },
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-non-null-assertion": "warn",
    "import/no-cycle": "error",
    "import/no-self-import": "error",
    "import/no-duplicates": "warn"
  },
  "ignorePatterns": ["node_modules", "dist", "build", "coverage"]
}
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
  "packageRules": [
    {
      "description": "Automerge non-major updates",
      "groupName": "all non-major dependencies",
      "groupSlug": "all-minor-patch",
      "matchPackageNames": ["*"],
      "matchUpdateTypes": ["minor", "patch"],
      "automerge": true,
      "schedule": ["* * 1 */3 *"]
    }
  ]
}
```
