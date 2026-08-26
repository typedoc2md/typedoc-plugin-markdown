# AGENTS.md

Guidance for AI coding agents working on this repository. For human onboarding
(forking, PR etiquette), see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Repository layout

npm workspaces monorepo. Node >= 18, ESM (`"type": "module"`).

- `packages/typedoc-plugin-markdown` — the core plugin. Most work happens here.
- `packages/*` — utility plugins (`typedoc-plugin-frontmatter`, `typedoc-plugin-remark`)
  and framework themes (`typedoc-vitepress-theme`, `typedoc-docusaurus-theme`,
  `docusaurus-plugin-typedoc`, `typedoc-github-wiki-theme`, `typedoc-gitlab-wiki-theme`).
  All depend on the core plugin.
- `devtools/` — internal build tooling (`@devtools/*`, not published). In particular
  `devtools/packages/prebuild-options` generates code and docs from option declarations.
- `docs/` — the public docs site (https://typedoc-plugin-markdown.org), Nextra 4 / Next.js.
  It is **not** an npm workspace; it has its own `package.json` and lockfile.

In the core package, `@plugin/*` is a tsconfig path alias for
`packages/typedoc-plugin-markdown/src/*` (resolved at build time by `tsc-alias`).

## Generated files — do not edit directly

Editing any of these typechecks fine and then your change is silently erased.
There are two generators, with very different triggers.

**Overwritten by the `prebuild` step of every build:**

| Generated file (core package) | Source of truth |
| --- | --- |
| `src/types/options.ts` | `src/options/declarations.ts` (JSDoc + declaration shape) |
| `src/theme/context/resources.ts` | files in `src/theme/context/{templates,partials,helpers}/` |
| `docs/content/docs/options/*.mdx` (and per-package option docs) | each package's `src/options/declarations.ts` |

**Overwritten by `npm run docs` at the repo root:**

| Generated file | Source of truth |
| --- | --- |
| `README.md` (repo root) | the `Packages` table is built from each package's `description`; surrounding prose is inline in `devtools/scripts/generate-readmes.ts` |
| `packages/*/README.md` | `## Overview` and `## Features` of that package's `docs/content/**/index.mdx`, plus the install snippet in `PACKAGE_README_CONTENT` |
| the table of contents in `CONTRIBUTING.md` | its own headings, via `remark-toc` |

`npm run docs` is **not** wired into any build, test or CI job — nothing runs
it for you and nothing fails when its output is stale. Run it by hand after
changing a package `description` or the `## Overview` / `## Features` sections
of a docs index page, and commit the result alongside the change.

Note `packages/*/README.md` is the package's npm listing page. It is read by
users, but it still does not warrant a changeset — see the Changesets section
below.

**To add or change an option:** edit `src/options/declarations.ts` (the JSDoc
comment becomes the public documentation), then run `npm run build` in that
package — prebuild regenerates the types and docs. Same model applies in the
other packages that declare options.

**To add a theme partial/template/helper:** create the file in the appropriate
`src/theme/context/` subfolder; `resources.ts` is regenerated from the folder
contents on build.

## Build and test

Build order matters: the themes and utility plugins build/test against the core
plugin's `dist`, so build core first (workspace order already handles this):

```bash
npm run build-all        # build every workspace package
npm run test-all         # test every workspace package
```

Scoped to one package (preferred while iterating):

```bash
npm run build --workspace typedoc-plugin-markdown
npm run test --workspace typedoc-plugin-markdown
```

### How the core tests work (fixtures + snapshots)

The pipeline, in order:

1. `pretest` wipes `test/fixtures/out` and runs **TypeDoc itself** over ~29
   fixture configs (`test/fixtures/configs/*.cjs`), each rendering the sample
   projects in `test/fixtures/src` to markdown in `test/fixtures/out`. This is
   the slow step.
2. Mocha specs (`test/specs/*.spec.ts`, run via tsx) read those output files
   and compare them against `test/__snapshots__/*.snap`.

Two consequences that are easy to get wrong:

- **Fixtures run the plugin from `dist`, and `pretest` does not rebuild it.**
  After editing `src`, run `npm run build` before `npm run test`, or the
  fixtures — and therefore the tests — exercise your *pre-edit* code.
  (`npm run build-and-run` = build + fast dev fixture subset.)
- **A missing snapshot passes silently**: the harness writes the `.snap` on
  first sight and asserts against what it just wrote. New output files are
  therefore *not* covered until their snapshot is committed and reviewed, and
  deleting a `.snap` file "fixes" a failure without fixing anything. Treat new
  or deleted `.snap` files in a diff with the same suspicion as changed ones.

Fast iteration: after one `build` + `npm run fixtures`, run specs directly
with `npm run mocha` (add a spec path to run a single file) — no need to pay
for fixture regeneration when only spec/snapshot files changed. Rebuild
fixtures whenever `src` or `test/fixtures` changes.

### Snapshot failures

1. **Read the diff first.** A failing snapshot is usually the test doing its job.
2. Only if the new output is the *intended* result, run `npm run test:update`
   in that package to regenerate snapshots — note it deletes
   `test/__snapshots__` wholesale and rewrites everything (it does rebuild
   first), so review the resulting git diff carefully before committing.

Never run `test:update` just to make the suite green.

## CI

Each package has its own path-filtered workflow in `.github/workflows/`
(`ci.yml` covers the core plugin and runs `lint-all`/`build-all`/`test-all`).
Changes touching only a package's `README.md`, `CHANGELOG.md`, or
`package.json` do not trigger its CI.

CI runs on **Node 18 and 20** (engines: `>= 18`). Local dev is often on a newer
Node — do not use APIs newer than Node 18 in package source.

## Branch names

Branch off `main`, named after the issue being addressed:

- `fix/<issue>-<slug>` — bug fixes
- `feature/<issue>-<slug>` — enhancements, new options, new theme resources

`<issue>` is the GitHub issue number; `<slug>` is two to four kebab-case
words. Examples: `fix/881-prettier-editorconfig`,
`feature/873-expose-lib-functions`.

Use the issue number whenever one exists — including for preparatory or
follow-up commits that only lead up to the main change, so the whole thread
of work stays greppable against the issue.

For work with no issue behind it (repo tooling, docs prose, dependency bumps,
release chores) drop the number and use `chore/<slug>`.

## Linking issues

Reference issues without a closing keyword — `Refs #873`, or a bare `(#873)`
at the end of a commit subject:

```
fix(core): resolve anchors for inherited members (#900)
```

**Never write `Closes #873`, `Fixes #873` or `Resolves #873`** in a commit
message or a PR description. Issues here are closed when the fix is published
to npm, not when the PR merges, and GitHub has no repository setting to turn
that behaviour off — the keyword is the only trigger, so avoiding it is the
only control.

GitHub acts on `close`/`closes`/`closed`, `fix`/`fixes`/`fixed` and
`resolve`/`resolves`/`resolved` when immediately followed by an issue
reference, in a PR description or in any commit merged to `main`. The commit
convention above is safe because the keyword is never adjacent to the number —
`fix(core): … (#900)` does not trigger it, but `fix #900` would.

## Commit messages

Commitlint runs on a husky `commit-msg` hook and **rejects non-conforming
messages**. Conventional Commits with a mandatory scope:

- Types: `chore | docs | feat | fix | test | refactor`
- Scopes: `all | core | frontmatter | remark | docusaurus | vitepress |
  githubwiki | gitlabwiki | docs | refactor | quality | release`

Use `core` for `typedoc-plugin-markdown`. Example:
`fix(core): resolve anchors for inherited members (#900)`.
`feat: add option` fails (empty scope).

## Changesets

User-facing changes to a published package need a changeset in `.changeset/`
(`npx changeset`, or write the file by hand). Nothing in the build enforces
this — remember it. Format:

```md
---
'typedoc-plugin-markdown': patch
---

- Description of the change (#issue).
```

Note `.changeset/config.json` lists most non-core packages under `ignore` and
fixes `docusaurus-plugin-typedoc` + `typedoc-docusaurus-theme` together — check
it before adding a changeset for a non-core package.

**A changeset forces a version bump and a release, so add one only when the
published package actually changes for consumers.** That means runtime
behaviour, bug fixes, new or changed options, and public type signatures —
plus `peerDependencies`/`engines` ranges, which affect installs even though
nothing changes at runtime.

Do **not** add one for changes that leave the installed package equivalent:
README and docs edits, `package.json` metadata (keywords, description,
repository), internal refactors, tests, CI, and repo tooling. Manifest fields
are read from `package.json` at publish time, so they ship with the next
release regardless — a changeset for them only cuts a version whose changelog
entry tells users nothing they can act on.

## Docs site

- Prose lives in `docs/content` (MDX); edit freely.
- Option reference pages are generated from `declarations.ts` files (see above) —
  never edit those in place.
- The docs site installs separately: `cd docs && npm install`.

## Pre-PR checklist

- [ ] Built and tested the affected package(s); `npm run lint --workspaces --if-present` clean
- [ ] No edits to generated files (regenerate via `npm run build`, or `npm run docs` for READMEs)
- [ ] Ran `npm run docs` if a package `description` or a docs index `## Overview` / `## Features` changed
- [ ] Snapshot changes, if any, reviewed in the git diff and intentional
- [ ] Changeset added for user-facing changes
- [ ] Commit messages pass commitlint (type + scope from the enums above)
- [ ] Branch name follows `fix/<issue>-<slug>` / `feature/<issue>-<slug>`
- [ ] No closing keywords (`Closes`/`Fixes`/`Resolves`) in commits or the PR description
