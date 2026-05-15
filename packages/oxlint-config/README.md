# 📦 [`@froko/oxlint-config`](https://www.npmjs.com/package/@froko/oxlint-config)

![](https://img.shields.io/npm/v/%40froko%2Foxlint-config/latest.svg)
[![](https://img.shields.io/npm/dw/@froko/oxlint-config)](https://npmjs.com/package/@froko/oxlint-config)

## 📥 Installation

```bash
npm install --save-dev @froko/oxlint-config oxlint
yarn add --dev @froko/oxlint-config oxlint
pnpm install --save-dev @froko/oxlint-config oxlint
```

## 🔩 Usage

### Basic configuration

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

### Configuration with additional rules

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

### JSON configuration

```json
// .oxlintrc.json
{
  "extends": ["./node_modules/@froko/oxlint-config/.oxlintrc.json"]
}
```

## 📝 Content

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
