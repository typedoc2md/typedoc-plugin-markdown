# Changelog

## 2.0.1 (2025-06-01)

### Patch Changes

- Fix incorrect options interface - thanks @r4ai.

## 2.0.0 (2025-04-22)

This release includes fundamental architectural improvements and support for loading plugins conditionally based on page kind.

### Architectural Changes

- The plugin now constructs virtual files directly from TypeDoc's output before writing to disk rather than re-reading the corresponding file from the filesystem. This change improves performance and reliability by eliminating unnecessary disk I/O.
- `remark-gfm`, `remark-frontmatter` and `remark-mdx` are no longer loaded by default.
  - `remark-frontmatter` is only loaded if a frontmatter YAML block is observed in the input document.
  - `remark-mdx` will need to be manually added if targetting MDX.
  - `remark-gfm` will need to be manually added if other plugins require it.
- The plugin no longer adds a placeholder heading when `remark-toc` is added. Instead this logic has been decoupled in favour of the external plugin `remark-insert-headings`.

### Major Changes

- Removed "defaultRemarkPlugins" option - remark plugins are no longer added by default.

### Minor Changes

- Added support for conditional "remarkPlugins" configuration.

## 1.3.0 (2025-03-16)

### Minor Changes

- Exposed toc heading to Type Alias members.
- typedoc-plugin-markdown 4.5 compatibility fixes.

## 1.2.4 (2025-01-02)

### Patch Changes

- Fix typedoc-plugin-markdown 4.0.0 compatibility.

## 1.2.3 (2025-01-01)

### Patch Changes

- Fix windows ERR_UNSUPPORTED_ESM_URL_SCHEME error ([#752](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/752)).

## 1.2.2 (2024-12-23)

### Patch Changes

- Remove heading count restriction when adding toc placeholder heading (for usage with remark-toc).

## 1.2.1 (2024-12-11)

### Patch Changes

- Export PluginOptions for external use ([#737](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/737))

## 1.2.0 (2024-12-09)

### Minor Changes

- Exposed "defaultRemarkPlugins" option to configure which remark plugins are loaded by default ([#735](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/735)).

## 1.1.1 (2024-12-03)

### Patch Changes

- Resolve local plugins from `process.cwd()`.

## 1.1.0 (2024-11-27)

### Minor Changes

- typedoc@0.27 / typedoc-plugin-markdown@4.3 support

## 1.0.3 (2024-08-15)

### Patch Changes

- Updated table formatting with typedoc-plugin-markdown "htmlTable" key.

## 1.0.2 (2024-06-22)

### Patch Changes

- Add toc from remark-tocs to document reflections
- Normalize tables output

## 1.0.1 (2024-05-27)

### Patch Changes

- Additionally parse with "remark-mdx" to retain escaped angle brackets ([#622](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/622))

## 1.0.0 (2024-05-03)

- First major release.
