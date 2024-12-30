[Developer Guide](../../README.md) / [typedoc-plugin-markdown](../README.md) / core

# core

The entry point for initializing and bootstrapping the plugin.

## Functions

### load()

> **load**(`app`): `void`

Defined in: [packages/typedoc-plugin-markdown/src/index.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/index.ts#L40)

The function that is called by TypeDoc to bootstrap the plugin.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `app` | [`Application`](https://typedoc.org/api/classes/Application.html) |

#### Returns

`void`

#### Remarks

The load function exposes additional TypeDoc options and make some adjustments.

This method is not intended to be consumed in any other context that via the `plugin` option.

The load functions:

1. Bootstrap the plugin options
2. Configures markdown outputs
3. Configures localization
4. Applies any other behaviour

The module also exports anything that is available publicly.
