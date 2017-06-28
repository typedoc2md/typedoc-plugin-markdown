[typedoc-plugin-markdown](../README.md) > ["classes"](../modules/_classes_.md) > [GenericClass](../classes/_classes_.genericclass.md)



# Class: GenericClass


This is a generic class.

## Type parameters
#### T :  [BaseClass](_classes_.baseclass.md)

This a type parameter.


## Hierarchy

**GenericClass**

↳  [NonGenericClass](_classes_.nongenericclass.md)








## Index

### Constructors

* [constructor](_classes_.genericclass.md#constructor)


### Properties

* [p2](_classes_.genericclass.md#p2)
* [p3](_classes_.genericclass.md#p3)
* [value](_classes_.genericclass.md#value)


### Methods

* [getValue](_classes_.genericclass.md#getvalue)
* [setValue](_classes_.genericclass.md#setvalue)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new GenericClass**(p1: *`any`*, p2: *`T`*, p3: *`number`*, p4: *`number`*): [GenericClass](_classes_.genericclass.md)



*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*



Constructor short text.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| p1 | `any` | Constructor param |
| p2 | `T` | Private string property |
| p3 | `number` | Public number property |
| p4 | `number` | Public implicit any property |





**Returns:** [GenericClass](_classes_.genericclass.md)

---


## Properties
<a id="p2"></a>

### «Protected» p2

**●  p2**:  *`T`* 

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*



Private string property




___

<a id="p3"></a>

###  p3

**●  p3**:  *`number`* 

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*



Public number property




___

<a id="value"></a>

###  value

**●  value**:  *`T`* 

*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*





___


## Methods
<a id="getvalue"></a>

###  getValue

► **getValue**(): `T`




*Defined in [classes.ts:274](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L274)*





**Returns:** `T`





___

<a id="setvalue"></a>

###  setValue

► **setValue**(value: *`T`*): `void`




*Defined in [classes.ts:270](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L270)*




**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `T` | [[getValue]] is the counterpart. |





**Returns:** `void`





___


