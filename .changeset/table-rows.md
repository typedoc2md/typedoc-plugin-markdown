---
'typedoc-plugin-markdown': patch
---

- Escape `|` in table cells (including inside code spans, as GFM tables require) so it no longer splits a row into extra columns. The rendered text still shows a plain `|`.
- Show every modifier of a property (e.g. `protected static readonly`), not only the first one found.
