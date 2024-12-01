# 📦 [`@froko/prettier-config`](https://www.npmjs.com/package/@froko/prettier-config)

![](https://img.shields.io/npm/v/%40froko%2Fprettier-config/latest.svg)
[![](https://img.shields.io/npm/dw/@froko/prettier-config)](https://npmjs.com/package/@froko/prettier-config)

## 📥 Installation

```bash
npm install --save-dev @froko/prettier-config
yarn add --dev @froko/prettier-config
pnpm install --save-dev @froko/prettier-config
```

## 🔩 Usage

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

## 📝 Content

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
