# AGENTS.md

## Repository

pnpm monorepo (pnpm 10, Node 24) managed by Nx. Three packages under
`packages/`, all published to npm under the `@froko` scope:

- **`prettier-config`** - shareable Prettier config (ESM, `index.js`)
- **`eslint-config`** - shareable ESLint flat-config (ESM, `index.js`)
- **`renovate-config`** - shareable Renovate preset (`index.json`, **private** -
  not published to npm, consumed via GitHub reference)

There are no build steps, no tests, no TypeScript compilation. Each package
ships its source `index.js`/`index.json` directly.

## Commands

```bash
pnpm install          # install dependencies
pnpm format           # prettier --write on the whole repo (root script)
```

Formatting is the only workspace-level task. There is no lint, test, or build
target.

### Releasing

Nx Release with conventional commits (`nx.json` →
`release.version.conventionalCommits: true`). Changelog and GitHub releases are
generated automatically.

## PR conventions

PR titles must follow **Conventional Commits** - enforced by CI
(`amannn/action-semantic-pull-request`). Scope should match the package name
(`eslint-config`, `prettier-config`, `renovate-config`) when changes are
package-specific.

## Style

- Prettier config is the repo's own `packages/prettier-config/index.js` (set in
  root `package.json` via `"prettier": "./packages/prettier-config/index.js"`).
- Key rules: **no semicolons**, **single quotes**, `bracketSameLine: true`.
- Indentation (2 spaces) and line length (80) come from `.editorconfig`, not
  Prettier.
- Markdown files use `proseWrap: 'always'`.

## Gotchas

- `eslint-config` bundles plugins and presets it imports (`@eslint/js`,
  `typescript-eslint`, `eslint-config-prettier`, etc.) as `dependencies` so
  consumers don't install them manually. `eslint` itself is a `peerDependency`
  only - never add it to `dependencies` (causes duplicate instances).
- `renovate-config` is `"private": true` - consumers reference it via
  `github>froko/shared-configs//packages/renovate-config/index.json`, not via
  npm.
- `.prettierignore` excludes `.nx/`, `CHANGELOG.md`, and `pnpm-lock.yaml`.
