---
'typedoc-plugin-markdown': minor
---

- The pure functions used to compose markdown are now exposed for custom themes, as `markdown` (functions that emit markdown syntax) and `utils` (text transformations such as `escapeChars`) exports from the package root, and as `this.markdown` and `this.utils` on `MarkdownThemeContext` (#873) - thanks @Jym77.
