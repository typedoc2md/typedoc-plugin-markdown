[Packages Index](../../README.md) / [typedoc-plugin-markdown](../README.md) / index

# index

The plugin entrypoint and bootstrapping of the plugin.

## load()

> **load**(`app`): `void`

The function that is called by TypeDoc to bootstrap the plugin. [https://typedoc.org/guides/development/#plugins](https://typedoc.org/guides/development/#plugins).

Here we expose additional TypeDoc options and make some adjustments.

This method is not intended to be consumed in any other context that via the `plugin` option.

### Parameters

| Parameter | Type                                                              |
| --------- | ----------------------------------------------------------------- |
| `app`     | [`Application`](https://typedoc.org/api/classes/Application.html) |

### Returns

`void`

### Defined in

[index.ts:30](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/index.ts#L30)
