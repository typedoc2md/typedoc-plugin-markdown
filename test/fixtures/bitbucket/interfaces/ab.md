[typedoc-plugin-markdown](../README.md) > [AB](../interfaces/ab.md)

# Interface: AB

A generic interface extending two other generic interfaces and setting one of the type parameters.

## Type parameters
#### T 

The leftover generic type parameter.

## Hierarchy

 [A](a.md)<`T`>

 [B](b.md)<`T`, `boolean`>

**↳ AB**

↳  [ABString](abstring.md)

↳  [ABNumber](abnumber.md)

## Index

### Methods

* [getC](ab.md#markdown-header-getC)
* [getT](ab.md#markdown-header-getT)
* [setT](ab.md#markdown-header-setT)

---

## Methods

###  getC

▸ **getC**(): `boolean`

*Inherited from [B](b.md).[getC](b.md#markdown-header-getC)*

*Defined in [generics.ts:53](https://bitbucket.org/owner/repository_name/src/master/generics.ts?fileviewer&amp;#x3D;file-view-default#generics.ts-53)*

A generic member function.

**Returns:** `boolean`
A generic return value.

___

###  getT

▸ **getT**(): `T`

*Inherited from [A](a.md).[getT](a.md#markdown-header-getT)*

*Defined in [generics.ts:30](https://bitbucket.org/owner/repository_name/src/master/generics.ts?fileviewer&amp;#x3D;file-view-default#generics.ts-30)*

A generic member function.

**Returns:** `T`
A generic return value.

___

###  setT

▸ **setT**(value: *`T`*): `void`

*Inherited from [B](b.md).[setT](b.md#markdown-header-setT)*

*Defined in [generics.ts:46](https://bitbucket.org/owner/repository_name/src/master/generics.ts?fileviewer&amp;#x3D;file-view-default#generics.ts-46)*

A generic member function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `T` |  A generic parameter. |

**Returns:** `void`

___

