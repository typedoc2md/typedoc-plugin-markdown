[typedoc-plugin-markdown v4.0.3](../../../README.md) / [app](../../README.md) / initialize

# Namespace: initialize

Initialization and bootstrapping of the plugin.

## Table of Contents

* [load()](#load)

## load()

```ts
function load(app): void
```

This method is exposed to the `"plugin"` configuration option and contains all initialization functionality.

### Parameters

| Parameter | Type                                                              | Description                                                                                    |
| --------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `app`     | [`Application`](https://typedoc.org/api/classes/Application.html) | When loaded TypeDoc provides an instance of the Application referred to as the `"pluginHost"`. |

### Returns

`void`

### Remarks

The following initialization steps are taken in this method:

**1. Declare options:**

* Iterate over declaration definitions and to the container.

**2. Replace default theme:**

* Replace the default HTML theme the with the [MarkdownTheme](../../../theme/classes/MarkdownTheme.md)

**3. Override TypeDoc methods:**

* Intercept and modify some TypeDoc core methods that are coupled to the HTML theme.
  **4. Configure localization:**

* Load the additional translations used by the theme for the selected language.

### See

[https://typedoc.org/guides/development/#plugins](https://typedoc.org/guides/development/#plugins).

### Defined in

[packages/typedoc-plugin-markdown/src/app/\_initialize.ts:49](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/_initialize.ts#L49)
