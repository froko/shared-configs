# Nx MonoRepo starter project

A solid starting point for your new Nx based MonoRepo.

## What's included?

- pnpm workspace
- Nx
- semantic-release
- GitHub Actions for linting PR title with Conventional Commit rules, CI & Release
- Arc42 documentation template with Astro Starlight
- Renovate for automated dependency updates

## Getting Started

1. Run the following command to create a new project-name

   `npx degit https://github.com/froko/nx-monorepo <project-name>`

2. Run `pnpm install`

3. Change into the project directory and create a first commit with

   ```bash
   git init
   git add .
   git commit -m "chore: initial commit"
   ```

4. Make it yours by changing some information in the following files

   - `README.json`
   - `package.json` (name, description, author, repository url)
   - `docs/astro.config.json` (title, social url)
   - `docs/src/content/docs/index.mdx` (title)

5. Commit your changes

   ```bash
   git add .
   git commit -m "chore: update project information"
   ```

6. Start adding projects and libraries

## Available commands on the root level

- `pnpm install` - Install all dependencies
- `pnpm format` - Format all projects
- `pnpm lint` - Lint all projects
- `pnpm build` - Build all projects
- `pnpm test` - Run all tests
- `pnpm affected` - Lint, Build & Test all affected projects
- `pnpm all` - Lint, Build & Test all projects

## Workspace structure

By default, the pnpm workspace comes with preconfigured directories for `apps`
and `libs`. You can add more directories or change the default ones by modifying
the `pnpm-workspace.yaml` file. Nx will automatically adhere to these changes.

## References

- [pnpm](https://pnpm.io/)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Nx](https://nx.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [semantic-release](https://semantic-release.gitbook.io/semantic-release)
- [Arc42](https://arc42.org/)
- [Astro](https://astro.build/)
- [Astro Starlight](https://starlight.astro.build/)
- [Renovate](https://docs.renovatebot.com/)
- [dotnet-monorepo](https://github.com/froko/dotnet-monorepo)
