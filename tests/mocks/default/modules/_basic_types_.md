[typedoc-plugin-markdown](../README.md) > ["basic-types"](../modules/_basic_types_.md)



# External module: "basic-types"


For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like.

## Index

### Type aliases

* [SomeOptions](_basic_types_.md#someoptions)


### Variables

* [amount](_basic_types_.md#amount)
* [color](_basic_types_.md#color)
* [isDone](_basic_types_.md#isdone)
* [numbers](_basic_types_.md#numbers)


### Object literals

* [aMixedObject](_basic_types_.md#amixedobject)



---
## Type aliases
<a id="someoptions"></a>

###  SomeOptions

**Τ SomeOptions**:  *`object`* 

*Defined in [basic-types.ts:49](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L49)*


#### Type declaration




«Optional»  aFunction?: `function`




►(): `void`





**Returns:** `void`







___


## Variables
<a id="amount"></a>

###  amount

**●  amount**:  *`number`*  = 6

*Defined in [basic-types.ts:20](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L20)*



This is a number type

    const decimal: number = 6;




___

<a id="color"></a>

###  color

**●  color**:  *`string`*  = "blue"

*Defined in [basic-types.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L28)*



This is a string type

    const color: string = "blue";




___

<a id="isdone"></a>

###  isDone

**●  isDone**:  *`boolean`*  = false

*Defined in [basic-types.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L12)*



This is a boolean type

    const isDone: boolean = false;




___

<a id="numbers"></a>

###  numbers

**●  numbers**:  *`number`[]*  =  [1, 2, 3]

*Defined in [basic-types.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L36)*



This is an array type

    const numbers: number[] = [1, 2, 3];




___


<a id="amixedobject"></a>

## Object literal: aMixedObject


This is an object with various types


<a id="amixedobject.somenumber"></a>

###  someNumber

**●  someNumber**:  *`number`*  = 10

*Defined in [basic-types.ts:45](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L45)*





___
<a id="amixedobject.somestring"></a>

###  someString

**●  someString**:  *`string`*  = "hello"

*Defined in [basic-types.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L46)*





___
<a id="amixedobject.somefunction"></a>

###  someFunction

► **someFunction**(): `string`



*Defined in [basic-types.ts:42](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L42)*





**Returns:** `string`





___


