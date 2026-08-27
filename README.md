# git-practice

A practice repository for Git branching, GitHub Pull Requests, and GitHub Actions CI/CD, built with **TypeScript + Vitest + pnpm**.

## Tech Stack

- **TypeScript** — typed source under `src/`
- **Vitest** — unit tests (`src/**/*.test.ts`)
- **Vite** — dev server and production bundler
- **pnpm** — package manager
- **GitHub Actions** — CI pipeline (typecheck / build / test) and GitHub Pages deployment

## Commands

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm install`      | Install dependencies                 |
| `pnpm dev`          | Start Vite dev server                |
| `pnpm typecheck`    | Type-check (tsc --noEmit)            |
| `pnpm test`         | Run Vitest unit tests                |
| `pnpm test:watch`   | Run tests in watch mode              |
| `pnpm build`        | Type-check and build to `dist/` via Vite |
| `pnpm preview`      | Preview the production build         |

## Branch / Commit Conventions

- **Branches**: `feature/<short-name>` (e.g. `feature/add-power`)
- **Commits**: `<type>(<scope>): <subject>` following [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat`: new feature
  - `fix`: bug fix
  - `docs`: documentation
  - `test`: tests
  - `ci`: CI configuration
  - `chore`: maintenance

## Practice Notes: Three PR Merge Strategies

### 1. Create a merge commit (普通合并)

- 保留分支上的**所有原始提交**，并额外产生一个 **merge commit**（通常为 `Merge pull request #N from <branch>`）。
- 当 PR 有多个提交时，main 上会出现：**N 个原始提交 + 1 个 merge commit**。
- 历史是**非线性**的，形成分支合并回主干的 "M" 形结构（merge commit 有两个父提交）。

### 2. Squash and merge (压缩合并)

- 把分支上的**所有提交压缩成一个提交**。
- 无论分支有多少个提交，main 上最终只有 **1 个新提交**（+ GitHub 的 PR 合并记录）。
- 历史**线性、干净**，适合功能分支希望"一个功能一个提交"的场景。
- 缺点：丢失分支上的中间提交细节，无法在历史中追踪分支原始提交。

### 3. Rebase and merge (变基合并)

- 将分支上的提交**逐个重放到最新 main 之上**。
- 保留分支上的**所有原始提交**，但**不产生 merge commit**。
- 历史**完全线性**，且每个提交都保留。

### 对比表（重点是"PR 有多个提交"时的区别）

| 合并方式 | main 上的提交 | 是否产生 merge commit | 历史形态 |
|---------|-------------|----------------------|---------|
| **Create a merge commit** | 保留全部原始提交 + 1 个 merge commit | 是（`Merge pull request #N`）| 非线性（有分叉、M 形）|
| **Squash and merge** | 全部压缩成 1 个提交 | 否（仅 PR 记录）| 线性、干净 |
| **Rebase and merge** | 保留全部原始提交 | 否 | 完全线性 |

> 注意：当 PR 只有 **1 个提交**时，`Create a merge commit` 的结果（1 原始提交 + 1 merge commit）
> 与 `Rebase and merge`（1 原始提交，无 merge commit）看起来比较接近；只有当 PR
> **有多个提交**时，两者的差异才非常明显（前者有 merge commit 且历史分叉，后者无 merge commit 且线性）。

### 选择建议

- 功能分支需要完整保留开发过程细节 → **Create a merge commit** 或 **Rebase and merge**
- 一个功能对应一个清晰提交、历史简洁 → **Squash and merge**
- 希望历史完全线性、无 merge commit → **Rebase and merge**

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
