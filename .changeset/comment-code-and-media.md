---
'typedoc-plugin-markdown': patch
---

- Leave `~~~` fenced code blocks unescaped with `sanitizeComments`, as backtick fences already were.
- Encode relative media links, so a linked file with spaces in its name still resolves.
- Keep modifier tags such as `@beta` on an index signature outside the blockquote of the signature.
