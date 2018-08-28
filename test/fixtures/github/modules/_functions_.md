[typedoc-plugin-markdown](../README.md) > ["functions"](../modules/_functions_.md)

# External module: "functions"

## Index

### Modules

* [moduleFunction](_functions_.modulefunction.md)

### Functions

* [createSomething](_functions_.md#createsomething)
* [exportedFunction](_functions_.md#exportedfunction)
* [functionWithArguments](_functions_.md#functionwitharguments)
* [functionWithDefaults](_functions_.md#functionwithdefaults)
* [functionWithDocLink](_functions_.md#functionwithdoclink)
* [functionWithOptionalValue](_functions_.md#functionwithoptionalvalue)
* [functionWithRest](_functions_.md#functionwithrest)
* [genericFunction](_functions_.md#genericfunction)
* [internalFunction](_functions_.md#internalfunction)
* [multipleSignatures](_functions_.md#multiplesignatures)
* [variableFunction](_functions_.md#variablefunction)

---

## Functions

<a id="createsomething"></a>

###  createSomething

▸ **createSomething**(): `object`

*Defined in [functions.ts:183](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L183)*

A function that returns an object. Also no type information is given, the object should be correctly reflected.

**Returns:** `object`

___
<a id="exportedfunction"></a>

###  exportedFunction

▸ **exportedFunction**(): `void`

*Defined in [functions.ts:19](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L19)*

This is a simple exported function.

**Returns:** `void`

___
<a id="functionwitharguments"></a>

###  functionWithArguments

▸ **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](../interfaces/_classes_.inameinterface.md)*): `number`

*Defined in [functions.ts:59](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L59)*

This is a function with multiple arguments and a return value.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string` |  This is a string parameter. |
| paramG | `any` |  This is a parameter flagged with any.<br><br> This sentence is placed in the next line. |
| paramA | [INameInterface](../interfaces/_classes_.inameinterface.md) |  This is a **parameter** pointing to an interface.<br><br>``` var value:BaseClass = new BaseClass('test'); functionWithArguments('arg', 0, value); ```<br><br> |

**Returns:** `number`

___
<a id="functionwithdefaults"></a>

###  functionWithDefaults

▸ **functionWithDefaults**(valueA?: *`string`*, valueB?: *`number`*, valueC?: *`number`*, valueD?: *`boolean`*, valueE?: *`boolean`*): `string`

*Defined in [functions.ts:79](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L79)*

This is a function with a parameter that has a default value.

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` valueA | `string` | &quot;defaultValue&quot; |
| `Default value` valueB | `number` | 100 |
| `Default value` valueC | `number` |  Number.NaN |
| `Default value` valueD | `boolean` | true |
| `Default value` valueE | `boolean` | false |

**Returns:** `string`
The input value or the default value.

___
<a id="functionwithdoclink"></a>

###  functionWithDocLink

▸ **functionWithDocLink**(): `void`

*Defined in [functions.ts:199](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L199)*

See [`INameInterface`](../interfaces/_classes_.inameinterface.md) and [INameInterface's name property](../interfaces/_classes_.inameinterface.md#name). Also, check out [Google](http://www.google.com) and [GitHub](https://github.com).

Taken from [http://usejsdoc.org/tags-inline-link.html](http://usejsdoc.org/tags-inline-link.html).

**Returns:** `void`

___
<a id="functionwithoptionalvalue"></a>

###  functionWithOptionalValue

▸ **functionWithOptionalValue**(requiredParam: *`string`*, optionalParam?: *`string`*): `void`

*Defined in [functions.ts:70](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L70)*

This is a function with a parameter that is optional.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| requiredParam | `string` |  A normal parameter. |
| `Optional` optionalParam | `string` |  An optional parameter. |

**Returns:** `void`

___
<a id="functionwithrest"></a>

###  functionWithRest

▸ **functionWithRest**(...rest: *`string`[]*): `string`

*Defined in [functions.ts:96](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L96)*

This is a function with rest parameter.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` rest | `string`[] |  Multiple strings. |

**Returns:** `string`
The combined string.

___
<a id="genericfunction"></a>

###  genericFunction

▸ **genericFunction**<`T`>(value: *`T`*): `T`

*Defined in [functions.ts:140](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L140)*

This is a generic function.

**Type parameters:**

#### T 

The type parameter.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T` |  The typed value. |

**Returns:** `T`
Returns the typed value.

___
<a id="internalfunction"></a>

###  internalFunction

▸ **internalFunction**(): `void`

*Defined in [functions.ts:13](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L13)*

This is an internal function.

**Returns:** `void`

___
<a id="multiplesignatures"></a>

###  multipleSignatures

▸ **multipleSignatures**(value: *`string`*): `string`

▸ **multipleSignatures**(value: *`object`*): `string`

*Defined in [functions.ts:106](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L106)*

This is the first signature of a function with multiple signatures.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  The name value. |

**Returns:** `string`

*Defined in [functions.ts:114](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L114)*

This is the second signature of a function with multiple signatures.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `object` |  An object containing the name value. |

**Returns:** `string`

___
<a id="variablefunction"></a>

###  variableFunction

▸ **variableFunction**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](../interfaces/_classes_.inameinterface.md)*): `number`

*Defined in [functions.ts:38](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/functions.ts#L38)*

This is a function with multiple arguments and a return value.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string` |  This is a string parameter. |
| paramG | `any` |  This is a parameter flagged with any.<br><br>This sentence is placed in the next line. |
| paramA | [INameInterface](../interfaces/_classes_.inameinterface.md) |  This is a **parameter** pointing to an interface.<br><br>``` var value:BaseClass = new BaseClass('test'); functionWithArguments('arg', 0, value); ```<br><br> |

**Returns:** `number`

___

