---
title: Internationalization Guidance
description: How to edit or add a new locale to custom plugin translatable strings.
---

# Adding new options

Options exposed to TypeDoc are added as a named export to the declarations `declarations.ts` options config file.

```ts
/**
 * Some more detailed comments about the option.
 *
 * @category UI
 */
export const myNewOption: Partial<DeclarationOption> = {
  help: 'A short description of the option.',
  type: ParameterType.Boolean,
  defaultValue: false,
};
```

This will be exposed to TypeDoc as a new option when bootstrapping the plugin, with the name of the option the name of the exported variable.

In addition, when the `prebuild` task is run:

- The option type will be added to `TypeDocOptionsMap`.
- The documentation will be updated using the JSDoc comments.
