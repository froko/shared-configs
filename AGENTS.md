# AGENTS.md

## Repository

pnpm monorepo (pnpm 10, Node 24) managed by Nx. Five packages under `packages/`,
published to npm under the `@froko` scope (except where noted):

- **`prettier-config`** - shareable Prettier config (ESM, `index.js`)
- **`eslint-config`** - shareable ESLint flat-config (ESM, `index.js`)
- **`oxfmt-config`** - shareable oxfmt config (ESM, `index.js`)
- **`oxlint-config`** - shareable oxlint config (ESM, `index.js`)
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
(`.github/workflows/lint-pr.yaml`, `amannn/action-semantic-pull-request`). Scope
should match the package name (e.g. `eslint-config`, `oxlint-config`) when
changes are package-specific.

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
- `oxfmt-config` / `oxlint-config` are peer-dep only (`oxfmt` / `oxlint`); they
  bundle nothing. Each has dual exports: `.` → `index.js` (JS object) and
  `./json` → the raw `.oxfmtrc.json` / `.oxlintrc.json`. Keep both in sync when
  changing rules.
- `renovate-config` is `"private": true` - consumers reference it via
  `github>froko/shared-configs//packages/renovate-config/index.json`, not via
  npm.
- `.prettierignore` excludes `.nx/`, `CHANGELOG.md`, and `pnpm-lock.yaml`.
