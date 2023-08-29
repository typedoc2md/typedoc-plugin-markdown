[**typedoc-plugin-markdown**](README.md)

***

[API](API.md) > interfaces

# Module: interfaces

Interfaces

## Index

### Interfaces

- [Base](interfaces.md#base)
- [FunctionInterface](interfaces.md#functioninterface)
- [IndexableInterface](interfaces.md#indexableinterface)

## Interfaces

<a id="base" name="base"></a>

### Base

Comments for Class Base

#### Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <a id="functionprop" name="functionprop"></a> `functionProp` | (`s`) => `boolean` | Comments for functionProper | [interfaces.ts:35](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L35) |
| <a id="optionalprop" name="optionalprop"></a>  `optionalProp?` | `string` | Comments for optional prop | [interfaces.ts:19](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L19) |
| <a id="prop" name="prop"></a> `prop` | `string` | Comments for prop | [interfaces.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L14) |
| <a id="propwithprops" name="propwithprops"></a> `propWithProps` | `object` | Comments for propWithProps | [interfaces.ts:40](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L40) |
| <a id="nestedpropa" name="nestedpropa"></a> `propWithProps.nestedPropA` | `string` | Comments for nestedPropA | [interfaces.ts:44](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L44) |
| <a id="nestedpropb" name="nestedpropb"></a> `propWithProps.nestedPropB` | `boolean` | Comments for nestedPropB | [interfaces.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L48) |
| <a id="nestedpropc" name="nestedpropc"></a> `propWithProps.nestedPropC` | `object` | Comments for nestedPropC | [interfaces.ts:52](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L52) |
| <a id="nestedpropca" name="nestedpropca"></a> `propWithProps.nestedPropC.nestedPropCA` | `string` | Comments for nestedPropCA | [interfaces.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L56) |
| <a id="nestedpropcb" name="nestedpropcb"></a> `propWithProps.nestedPropC.nestedPropCB` | `boolean` | Comments for nestedPropCB | [interfaces.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L60) |
| <a id="nestedpropd" name="nestedpropd"></a> `propWithProps.nestedPropD` | () => `boolean` | Comments for nestedPropD | [interfaces.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L65) |
| <a id="readonlyprop" name="readonlyprop"></a> **`readonly`** `readonlyProp` | `string` | Comments for readonlyProp | [interfaces.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L24) |
| <a id="readonlypropandoptional" name="readonlypropandoptional"></a> **`readonly`** `readonlyPropAndOptional?` | `string` | Comments for readonlyPropAndOptional | [interfaces.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L29) |

***

<a id="functioninterface" name="functioninterface"></a>

### FunctionInterface

> **FunctionInterface**(`source`, `subString`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `source` | `string` |
| `subString` | `string` |

#### Returns

`boolean`

#### Source

[interfaces.ts:74](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L74)

***

<a id="indexableinterface" name="indexableinterface"></a>

### IndexableInterface

#### Indexable

 \[`s`: `string`\]: `string`
