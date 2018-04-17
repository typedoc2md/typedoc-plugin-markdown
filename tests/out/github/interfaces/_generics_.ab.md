[typedoc-plugin-markdown](../README.md) > ["generics"](../modules/_generics_.md) > [AB](../interfaces/_generics_.ab.md)

# Interface: AB

A generic interface extending two other generic interfaces and setting one of the type parameters.

## Type parameters
#### T 

The leftover generic type parameter.

## Hierarchy

 [A](_generics_.a.md)`T`

 [B](_generics_.b.md)`T`, `boolean`

**↳ AB**

↳  [ABString](_generics_.abstring.md)

↳  [ABNumber](_generics_.abnumber.md)

## Index

### Methods

* [getC](_generics_.ab.md#getc)
* [getT](_generics_.ab.md#gett)
* [setT](_generics_.ab.md#sett)

---

## Methods

<a id="getc"></a>

###  getC

▸ **getC**(): `boolean`

*Inherited from [B](_generics_.b.md).[getC](_generics_.b.md#getc)*

*Defined in generics.ts:53*

A generic member function.

**Returns:** `boolean`
A generic return value.

___

<a id="gett"></a>

###  getT

▸ **getT**(): `T`

*Inherited from [A](_generics_.a.md).[getT](_generics_.a.md#gett)*

*Defined in generics.ts:30*

A generic member function.

**Returns:** `T`
A generic return value.

___

<a id="sett"></a>

###  setT

▸ **setT**(value: *`T`*): `void`

*Inherited from [B](_generics_.b.md).[setT](_generics_.b.md#sett)*

*Defined in generics.ts:46*

A generic member function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T`   |  A generic parameter. |

**Returns:** `void`

___

