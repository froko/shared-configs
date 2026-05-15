# 📦 [`@froko/oxfmt-config`](https://www.npmjs.com/package/@froko/oxfmt-config)

![](https://img.shields.io/npm/v/%40froko%2Foxfmt-config/latest.svg)
[![](https://img.shields.io/npm/dw/@froko/oxfmt-config)](https://npmjs.com/package/@froko/oxfmt-config)

## 📥 Installation

```bash
npm install --save-dev @froko/oxfmt-config oxfmt
yarn add --dev @froko/oxfmt-config oxfmt
pnpm install --save-dev @froko/oxfmt-config oxfmt
```

## 🔩 Usage

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

## 📝 Content

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
