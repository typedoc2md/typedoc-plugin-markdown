# Changelog

## 1.4.0 (2025-04-28)

### Minor Changes

- Decoupled TypeDoc logic into a separate plugin, "typedoc-docusaurus-theme". "docusaurus-plugin-typedoc" and "typedoc-docusaurus-theme" will now be published and versioned together as linked packages.
- Unquoted object keys in generated sidebar.

### Patch Changes

- Updated dependencies
  - typedoc-docusaurus-theme@1.4.0

## 1.3.1 (2025-04-23)

### Patch Changes

- Fix sidebar base ids with custom docs path ([#802](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/802)).

## 1.3.0 (2025-03-25)

### Minor Changes

- Exposed "typescript" key to sidebar options to generate ts sidebar file ([#790](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/790)).

## 1.2.3 (2025-02-02)

### Patch Changes

- Bootstrap TypeDoc using API instead of child_process to avoid cross-platform issues ([#762](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/762)).

## 1.2.2 (2025-01-18)

### Patch Changes

- Correctly handle typedoc executable in Windows ([#762](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/762)).

## 1.2.1 (2025-01-11)

### Patch Changes

- Expose CSS class name to deprecated sidebar items ([#747](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/747)).

## 1.2.0 (2024-12-30)

### Minor Changes

- Strikeout deprecated items in sidebar ([#747](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/747)).

## 1.1.1 (2024-12-03)

### Patch Changes

- Allow additional plugins to be loaded via the "plugin" key.

## 1.1.0 (2024-11-27)

### Minor Changes

- typedoc@0.27 / typedoc-plugin-markdown@4.3 support

## 1.0.5 (2024-08-08)

### Patch Changes

- Fix missing sidebar children for categories

## 1.0.4 (2024-07-22)

### Patch Changes

- Fix base sidebar ids in windows ([#657](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/657))

## 1.0.3 (2024-07-10)

### Patch Changes

- Correctly handle sidebar ids with custom docs paths ([#648](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/648))

## 1.0.2 (2024-07-01)

### Patch Changes

- Create output directory if it doesn't exist ([#641](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/641))

## 1.0.1 (2024-05-07)

### Patch Changes

- Handle windows path separators when generating sidebar ids

## 1.0.0 (2024-05-03)

> v1 is a major release that includes a number of improvements.

### Architectural Changes

- typedoc-plugin-markdown must be updated to V4.
- `category.yml` files are no longer written.
- Frontmatter is no longer included by default.

### Breaking Changes

- A manual sidebar file should be referenced in `sidebars.js` rather than autogenerated configuration as previously recommended.
- `includeExtension` has been removed as this behaviour is now the default.
- `frontmatter` option has been removed. Please use `typedoc-plugin-frontmatter`.
- `sidebar` options `position` and `categoryLabel` are no longer relevant and have been removed.

### Bug Fixes

- Correctly handle sidebar ids in Windows ([#597](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/597)).
- Provide exit code on process error ([#583](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/583))
- Use correct path separator in sidebar urls ([#489](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/489))
- Fail docusaurus build when TypeDoc errors - can be overridden with `skipErrorChecking` ([#429](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/429)).

---

Earlier changelog entries can be found in `CHANGELOG_ARCHIVE.md`.
