---
'typedoc-plugin-markdown': patch
---

- Render anchors for type parameters, including those of methods, so links to them resolve. Type parameter anchors are slugged from their name to match their heading, prefixed with `type-parameter-` when `parametersFormat` is a table so they no longer shift member anchors, and omitted when `parametersFormat` is `none` (#909).
