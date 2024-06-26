[Home](../../README.md) / [typedoc-plugin-markdown](../README.md) / index

# index

The plugin entrypoint and bootstrapping of the plugin.

## load()

> **load**(`app`): `void`

The function that is called by TypeDoc to bootstrap the plugin.

Here we expose additional TypeDoc options and make some adjustments.

This method is not intended to be consumed in any other context that via the `plugin` option.

### Parameters

| Parameter | Type                                                              |
| --------- | ----------------------------------------------------------------- |
| `app`     | [`Application`](https://typedoc.org/api/classes/Application.html) |

### Returns

`void`

### See

[https://typedoc.org/guides/development/#plugins](https://typedoc.org/guides/development/#plugins).

### Defined in

[packages/typedoc-plugin-markdown/src/index.ts:29](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/index.ts#L29)
