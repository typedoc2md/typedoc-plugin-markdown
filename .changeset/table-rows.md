---
'typedoc-plugin-markdown': patch
---

- Escape `|` in table cells (including inside code spans, as GFM tables require) so it no longer splits a row into extra columns. The rendered text still shows a plain `|`.
- Mark members of an object parameter as optional only by their own flag, instead of every row after the first optional parameter.
- Render method members of an object parameter with their call signature and comment, in both table and list format.
- Render each overload of a method in type declaration tables with its own parameters and return type, and keep the path prefix of nested methods (`inner.fn()`).
- Show every modifier of a property (e.g. `protected static readonly`), not only the first one found.
