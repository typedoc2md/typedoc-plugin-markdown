---
'typedoc-plugin-markdown': patch
---

- With `useCodeBlocks`, mark optional members with `?` instead of an `optional` keyword, which is not valid TypeScript.
- With `useCodeBlocks`, quote property and method names that are not identifiers, so `"prop.with.dot": string` is no longer rendered as `prop.with.dot: string`.
