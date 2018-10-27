[typedoc-plugin-markdown](../README.md) > [flattenedClass](../classes/flattenedclass.md)

# Class: flattenedClass

A class that contains members with flattened properties.

## Hierarchy

**flattenedClass**

## Index

### Constructors

* [constructor](flattenedclass.md#markdown-header-constructor)

### Properties

* [callback](flattenedclass.md#markdown-header-callback)
* [indexed](flattenedclass.md#markdown-header-indexed)
* [multipleCallSignatures](flattenedclass.md#markdown-header-multiplecallsignatures)
* [options](flattenedclass.md#markdown-header-options)

---

## Constructors

###  constructor

⊕ **new flattenedClass**(options: *`object`*): [flattenedClass](flattenedclass.md)

*Defined in [flattened.ts:64](https://bitbucket.org/owner/repository_name/src/master/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-64)*

A constructor that accepts an option object defined inline.

**Parameters:**

**options: `object`**

The inline typed options object.

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` anotherValue | `string` |  Another value on the options object parameter. |
| `Optional` moreOptions | `object` |  A typed child object of the options object. |
| `Optional` value | `string` |  A value on the options object parameter. |

**Returns:** [flattenedClass](flattenedclass.md)

___

## Properties

###  callback

**● callback**: *`function`*

*Defined in [flattened.ts:35](https://bitbucket.org/owner/repository_name/src/master/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-35)*

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

###  indexed

**● indexed**: *`object`*

*Defined in [flattened.ts:43](https://bitbucket.org/owner/repository_name/src/master/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-43)*

A member that holds an index signature.

#### Type declaration

[index: `number`]: `object`

 name: `string`

`Optional`  value: `number`

 test: `string`

A property of the index signature instance.

___

###  multipleCallSignatures

**● multipleCallSignatures**: *`function`*

*Defined in [flattened.ts:52](https://bitbucket.org/owner/repository_name/src/master/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-52)*

An object with multiple call signatures.
*__see__*: [https://github.com/sebastian-lenz/typedoc/issues/27](https://github.com/sebastian-lenz/typedoc/issues/27)

#### Type declaration
▸(): `number`▸(value: *`number`*): [flattenedClass](flattenedclass.md)

Simple call signature.

**Returns:** `number`
The current value.

Call signature with parameters.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `number` |  The desired value. |

**Returns:** [flattenedClass](flattenedclass.md)
The calling Foo.

___

###  options

**● options**: *`object`*

*Defined in [flattened.ts:21](https://bitbucket.org/owner/repository_name/src/master/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-21)*

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

