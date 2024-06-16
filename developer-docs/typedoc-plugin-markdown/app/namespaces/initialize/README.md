[Packages Index](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [app](../../README.md) / initialize

# initialize

Initialization and bootstrapping of the plugin.

## load()

> **load**(`app`): `void`

This method is exposed to the `"plugin"` configuration option and contains all initialization functionality.

### Parameters

| Parameter | Type                                                              | Description                                                                                    |
| --------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `app`     | [`Application`](https://typedoc.org/api/classes/Application.html) | When loaded TypeDoc provides an instance of the Application referred to as the `"pluginHost"`. |

### Returns

`void`

### Remarks

In summary this method:

1. Adds options declarations
2. Replaces the default theme with the Markdown theme
3. Intercepts and modifies some TypeDoc core methods
4. Configures localization

### See

[https://typedoc.org/guides/development/#plugins](https://typedoc.org/guides/development/#plugins).

### Defined in

[packages/typedoc-plugin-markdown/src/app/\_initialize.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/app/_initialize.ts#L38)
