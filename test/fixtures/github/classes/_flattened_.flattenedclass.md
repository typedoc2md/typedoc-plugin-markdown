[typedoc-plugin-markdown](../README.md) > ["flattened"](../modules/_flattened_.md) > [flattenedClass](../classes/_flattened_.flattenedclass.md)

# Class: flattenedClass

A class that contains members with flattened properties.

## Hierarchy

**flattenedClass**

## Index

### Constructors

* [constructor](_flattened_.flattenedclass.md#constructor)

### Properties

* [callback](_flattened_.flattenedclass.md#callback)
* [indexed](_flattened_.flattenedclass.md#indexed)
* [multipleCallSignatures](_flattened_.flattenedclass.md#multiplecallsignatures)
* [options](_flattened_.flattenedclass.md#options)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new flattenedClass**(options: *`object`*): [flattenedClass](_flattened_.flattenedclass.md)

*Defined in [flattened.ts:64](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/flattened.ts#L64)*

A constructor that accepts an option object defined inline.

**Parameters:**

**options: `object`**

The inline typed options object.

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` anotherValue | `string` |  Another value on the options object parameter. |
| `Optional` moreOptions | `object` |  A typed child object of the options object. |
| `Optional` value | `string` |  A value on the options object parameter. |

**Returns:** [flattenedClass](_flattened_.flattenedclass.md)

___

## Properties

<a id="callback"></a>

###  callback

**● callback**: *`function`*

*Defined in [flattened.ts:35](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/flattened.ts#L35)*

A member that holds a callback that requires a typed function signature.

#### Type declaration
▸(param: *`number`*, optionalParam?: *`string`*): `string`

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| param | `number` |  A parameter of the typed function callback. |
| `Optional` optionalParam | `string` |  An optional parameter of the typed function callback. |

**Returns:** `string`

___
<a id="indexed"></a>

###  indexed

**● indexed**: *`object`*

*Defined in [flattened.ts:43](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/flattened.ts#L43)*

A member that holds an index signature.

#### Type declaration

[index: `number`]: `object`

 name: `string`

`Optional`  value: `number`

 test: `string`

A property of the index signature instance.

___
<a id="multiplecallsignatures"></a>

###  multipleCallSignatures

**● multipleCallSignatures**: *`function`*

*Defined in [flattened.ts:52](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/flattened.ts#L52)*

An object with multiple call signatures.

*__see__*: [https://github.com/sebastian-lenz/typedoc/issues/27](https://github.com/sebastian-lenz/typedoc/issues/27)

#### Type declaration
▸(): `number`▸(value: *`number`*): [flattenedClass](_flattened_.flattenedclass.md)

Simple call signature.

**Returns:** `number`
The current value.

Call signature with parameters.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `number` |  The desired value. |

**Returns:** [flattenedClass](_flattened_.flattenedclass.md)
The calling Foo.

___
<a id="options"></a>

###  options

**● options**: *`object`*

*Defined in [flattened.ts:21](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/flattened.ts#L21)*

A member that accepts an option object defined inline.

#### Type declaration

`Optional`  anotherValue: `string`

Another value on the options object parameter.

`Optional`  moreOptions: `object`

A typed child object of the options object.

 moreValues: `number`

A value of the typed child object.

`Optional`  value: `string`

A value on the options object parameter.

___

