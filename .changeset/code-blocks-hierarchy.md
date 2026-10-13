---
'typedoc-plugin-markdown': patch
---

- Keep literal values verbatim in code blocks (`useCodeBlocks`) and escape backslashes in text outside code, so `'[a](b)'`, `'&lt;b&gt;'` and `'C:\\temp'` display as written instead of as `"a"`, `"<b>"` and `C:\temp`.
- List a class under every hierarchy root it extends or implements on the hierarchy summary page, instead of only the first.
