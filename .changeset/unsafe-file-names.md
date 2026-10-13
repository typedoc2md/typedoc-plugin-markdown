---
'typedoc-plugin-markdown': minor
---

- Remove `#`, `?` and `\` from generated file names, so links to pages such as a document titled `FAQ: What's new? #1` resolve, and keep names made only of underscores, so `export function _()` is written to `functions/_.md` instead of an empty file name.
