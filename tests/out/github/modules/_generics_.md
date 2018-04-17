[typedoc-plugin-markdown](../README.md) > ["generics"](../modules/_generics_.md)

# External module: "generics"

Examples taken from the TypeDoc 'generics' examples directory ([https://github.com/TypeStrong/typedoc/blob/master/examples/basic/src/generics.ts](https://github.com/TypeStrong/typedoc/blob/master/examples/basic/src/generics.ts))

## Index

### Interfaces

* [A](../interfaces/_generics_.a.md)
* [AB](../interfaces/_generics_.ab.md)
* [ABNumber](../interfaces/_generics_.abnumber.md)
* [ABString](../interfaces/_generics_.abstring.md)
* [B](../interfaces/_generics_.b.md)

### Functions

* [getGenericArray](_generics_.md#getgenericarray)
* [testFunction](_generics_.md#testfunction)

---

## Functions

<a id="getgenericarray"></a>

###  getGenericArray

▸ **getGenericArray**(): `Array`.<`string`>

*Defined in generics.ts:83*

A function returning a generic array with type parameters.

**Returns:** `Array`.<`string`>
The return value with type arguments.

___

<a id="testfunction"></a>

###  testFunction

▸ **testFunction**T(value: *`T`*): `T`

*Defined in generics.ts:15*

A generic function

**Type parameters:**

#### T 

The generic type parameter.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T`   |  A generic parameter. |

**Returns:** `T`
A generic return value.

___

