---
'typedoc-plugin-markdown': patch
---

- Apply `anchorPrefix` to links that point to another page, not only to links within the same page.
- Apply `anchorPrefix` once, not twice, with the `kind-dir` and `structure-dir` routers.
- Link constructors to their localised heading (e.g. `#konstruktor`) when `lang` is not English.
