[typedoc-plugin-markdown](../README.md) > ["destructuring"](../modules/_destructuring_.md)

# External module: "destructuring"

## Index

### Variables

* [destructArrayA](_destructuring_.md#destructarraya)
* [destructArrayB](_destructuring_.md#destructarrayb)
* [destructArrayC](_destructuring_.md#destructarrayc)
* [destructArrayWithIgnoresA](_destructuring_.md#destructarraywithignoresa)
* [destructArrayWithIgnoresRest](_destructuring_.md#destructarraywithignoresrest)
* [destructArrayWithRest](_destructuring_.md#destructarraywithrest)
* [destructArrayWithRestA](_destructuring_.md#destructarraywithresta)
* [destructArrayWithRestB](_destructuring_.md#destructarraywithrestb)
* [destructObjectA](_destructuring_.md#destructobjecta)
* [destructObjectB](_destructuring_.md#destructobjectb)
* [destructObjectC](_destructuring_.md#destructobjectc)

### Functions

* [dest](_destructuring_.md#dest)
* [drawText](_destructuring_.md#drawtext)

---

## Variables

<a id="destructarraya"></a>

###  destructArrayA

**● destructArrayA**: *`number`*

*Defined in [destructuring.ts:10](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L10)*

___
<a id="destructarrayb"></a>

###  destructArrayB

**● destructArrayB**: *`string`*

*Defined in [destructuring.ts:10](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L10)*

___
<a id="destructarrayc"></a>

###  destructArrayC

**● destructArrayC**: *`number`* = 10

*Defined in [destructuring.ts:10](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L10)*

___
<a id="destructarraywithignoresa"></a>

###  destructArrayWithIgnoresA

**● destructArrayWithIgnoresA**: *`number`*

*Defined in [destructuring.ts:20](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L20)*

___
<a id="destructarraywithignoresrest"></a>

###  destructArrayWithIgnoresRest

**● destructArrayWithIgnoresRest**: *`number`[]*

*Defined in [destructuring.ts:20](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L20)*

___
<a id="destructarraywithrest"></a>

###  destructArrayWithRest

**● destructArrayWithRest**: *`number`[]*

*Defined in [destructuring.ts:15](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L15)*

___
<a id="destructarraywithresta"></a>

###  destructArrayWithRestA

**● destructArrayWithRestA**: *`number`*

*Defined in [destructuring.ts:15](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L15)*

___
<a id="destructarraywithrestb"></a>

###  destructArrayWithRestB

**● destructArrayWithRestB**: *`number`*

*Defined in [destructuring.ts:15](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L15)*

___
<a id="destructobjecta"></a>

###  destructObjectA

**● destructObjectA**: *`number`*

*Defined in [destructuring.ts:5](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L5)*

___
<a id="destructobjectb"></a>

###  destructObjectB

**● destructObjectB**: *`string`*

*Defined in [destructuring.ts:5](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L5)*

___
<a id="destructobjectc"></a>

###  destructObjectC

**● destructObjectC**: *`number`*

*Defined in [destructuring.ts:5](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L5)*

___

## Functions

<a id="dest"></a>

###  dest

▸ **dest**(__namedParameters: *`object`*): `string`

*Defined in [destructuring.ts:34](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L34)*

**Parameters:**

**__namedParameters: `object`**

| Param | Type |
| ------ | ------ |
| b | `string` |
| c | `number` |

**Returns:** `string`

___
<a id="drawtext"></a>

###  drawText

▸ **drawText**(a: *`any`*, __namedParameters: *`object`*, __namedParameters: *`object`*, b: *`any`*): `number`

*Defined in [destructuring.ts:30](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/destructuring.ts#L30)*

Destructuring function parameters.

**Parameters:**

**a: `any`**

This is a normal param

**__namedParameters: `object`**

| Param | Type | Default value |
| ------ | ------ | ------ |
| n | `boolean` | true |

**__namedParameters: `object`**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| bold | `boolean` | false |  Should it be bold? |
| location | [`number`, `number`] |  [0, 0] |  This is the location |
| text | `string` | &quot;&quot; |  This is the text |

**b: `any`**

**Returns:** `number`

___

