# git-practice

A practice repository for Git branching, GitHub Pull Requests, and GitHub Actions CI/CD, built with **TypeScript + Vitest + pnpm**.

## Tech Stack

- **TypeScript** — typed source under `src/`
- **Vitest** — unit tests (`src/**/*.test.ts`)
- **pnpm** — package manager
- **GitHub Actions** — CI pipeline (lint / test / typecheck / build)
- **GitHub Pages** — deploy built static site in CI

## Commands

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm install`      | Install dependencies                 |
| `pnpm typecheck`    | Type-check (tsc --noEmit)            |
| `pnpm test`         | Run Vitest unit tests                |
| `pnpm test:watch`   | Run tests in watch mode              |
| `pnpm build`        | Compile TS and build static site to `dist/` |

## Branch / Commit Conventions

- **Branches**: `feature/<short-name>` (e.g. `feature/add-power`)
- **Commits**: `<type>(<scope>): <subject>` following [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat`: new feature
  - `fix`: bug fix
  - `docs`: documentation
  - `test`: tests
  - `ci`: CI configuration
  - `chore`: maintenance

## Practice Plan: Three PR Merge Strategies

This repo is used to practice the three GitHub PR merge strategies. Each strategy is
demonstrated on its own feature branch:

1. **Create a merge commit** — `feature/merge-commit`
   - Merges the branch history via a merge commit that has two parents.
   - Main history will contain a `Merge pull request #N` commit.

2. **Squash and merge** — `feature/squash-merge`
   - Collapses all commits on the branch into a single commit.
   - Main history has just one commit (plus the merge PR record) — clean, linear-looking.

3. **Rebase and merge** — `feature/rebase-merge`
   - Replays the branch commits on top of the latest main.
   - Main history keeps each original commit with no merge commit — fully linear.

### Suggested Workflow

```
git checkout main
git pull
git checkout -b feature/<strategy-name>
# ... make commits ...
git push -u origin feature/<strategy-name>
# open PR, choose the merge strategy, and merge
git checkout main && git pull
git branch -d feature/<strategy-name>
git push origin --delete feature/<strategy-name>
```
