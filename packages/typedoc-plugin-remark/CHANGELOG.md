# Changelog

## 1.2.3

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
