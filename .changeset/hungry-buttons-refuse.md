---
'typedoc-plugin-markdown': patch
---

- `formatWithPrettier` now resolves Prettier config against the file being written and reads `.editorconfig`, so path-specific settings are honoured (#881).
