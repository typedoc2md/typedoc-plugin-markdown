---
'typedoc-plugin-markdown': minor
---

- Render anchors for type parameters, including those of methods, so links to them resolve. They are slugged from the type parameter's name, prefixed with `type-parameter-` when `parametersFormat` is a table so they no longer shift member anchors, and omitted when `parametersFormat` is `none` (#909).
