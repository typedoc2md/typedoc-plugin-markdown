[Packages Index](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [app](../../README.md) / initialize

# initialize

Initialization and bootstrapping of the plugin.

## Contents

* [Functions](#functions)
  * [load()](#load)
    * [Remarks](#remarks)
    * [See](#see)

## Functions

### load()

> **load**(`app`): `void`

This method is exposed to the `"plugin"` configuration option and contains all initialization functionality.

#### Parameters

| Parameter | Type                                                              | Description                                                                                    |
| --------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `app`     | [`Application`](https://typedoc.org/api/classes/Application.html) | When loaded TypeDoc provides an instance of the Application referred to as the `"pluginHost"`. |

#### Returns

`void`

#### Remarks

The following initialization steps are taken in this method:

**1. Declare options:**

* Iterate over declaration definitions and to the container.

**2. Replace default theme:**

* Replace the default HTML theme the with the [MarkdownTheme](../../../theme/classes/MarkdownTheme.md)

**3. Override TypeDoc methods:**

* Intercept and modify some TypeDoc core methods that are coupled to the HTML theme.
  **4. Configure localization:**

* Load the additional translations used by the theme for the selected language.

#### See

[https://typedoc.org/guides/development/#plugins](https://typedoc.org/guides/development/#plugins).

#### Defined in

[packages/typedoc-plugin-markdown/src/app/\_initialize.ts:49](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/app/_initialize.ts#L49)
