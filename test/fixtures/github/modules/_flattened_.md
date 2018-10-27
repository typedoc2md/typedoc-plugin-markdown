[typedoc-plugin-markdown](../README.md) > ["flattened"](../modules/_flattened_.md)

# External module: "flattened"

Examples taken from the TypeDoc 'flattened' examples directory ([https://github.com/TypeStrong/typedoc/blob/master/examples/basic/src/flattened.ts](https://github.com/TypeStrong/typedoc/blob/master/examples/basic/src/flattened.ts))

## Index

### Classes

* [flattenedClass](../classes/_flattened_.flattenedclass.md)

### Functions

* [flattenedCallback](_flattened_.md#flattenedcallback)
* [flattenedIndexSignature](_flattened_.md#flattenedindexsignature)
* [flattenedParameter](_flattened_.md#flattenedparameter)

---

## Functions

<a id="flattenedcallback"></a>

###  flattenedCallback

▸ **flattenedCallback**(callback: *`function`*): `void`

*Defined in [flattened.ts:93](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/flattened.ts#L93)*

A function that has a parameter that requires a typed function callback.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |  The typed function callback. |

**Returns:** `void`

___
<a id="flattenedindexsignature"></a>

###  flattenedIndexSignature

▸ **flattenedIndexSignature**(indexed: *`object`*): `void`

*Defined in [flattened.ts:122](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/flattened.ts#L122)*

A function that accepts an index signature parameter.

**Parameters:**

**indexed: `object`**

The index signature parameter.

| Name | Type | Description |
| ------ | ------ | ------ |
| test | `string` |  A property of the index signature instance. |

**Returns:** `void`

___
<a id="flattenedparameter"></a>

###  flattenedParameter

▸ **flattenedParameter**(options: *`object`*): `void`

*Defined in [flattened.ts:105](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/flattened.ts#L105)*

A function that accepts an option object defined inline.

**Parameters:**

**options: `object`**

The inline typed options object.

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` anotherValue | `string` |  Another value on the options object parameter. |
| `Optional` moreOptions | `object` |  A typed child object of the options object. |
| `Optional` value | `string` |  A value on the options object parameter. |

**Returns:** `void`

___

