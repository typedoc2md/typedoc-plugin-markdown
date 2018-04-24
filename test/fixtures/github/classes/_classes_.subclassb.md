[typedoc-plugin-markdown](../README.md) > ["classes"](../modules/_classes_.md) > [SubClassB](../classes/_classes_.subclassb.md)

# Class: SubClassB

This is a class that extends another class.

The constructor of the original class should be overwritten.

## Hierarchy

 [BaseClass](_classes_.baseclass.md)

**↳ SubClassB**

## Implements

* [INameInterface](../interfaces/_classes_.inameinterface.md)

## Index

### Constructors

* [constructor](_classes_.subclassb.md#constructor)

### Properties

* [kind](_classes_.subclassb.md#kind)
* [name](_classes_.subclassb.md#name)
* [instance](_classes_.subclassb.md#instance)
* [instances](_classes_.subclassb.md#instances)

### Methods

* [abstractMethod](_classes_.subclassb.md#abstractmethod)
* [arrowFunction](_classes_.subclassb.md#arrowfunction)
* [doSomething](_classes_.subclassb.md#dosomething)
* [getName](_classes_.subclassb.md#getname)
* [setName](_classes_.subclassb.md#setname)
* [caTest](_classes_.subclassb.md#catest)
* [getInstance](_classes_.subclassb.md#getinstance)
* [getName](_classes_.subclassb.md#getname-1)

---

## Constructors

<a id="constructor"></a>

### ⊕ **new SubClassB**(name: *`string`*): [SubClassB](_classes_.subclassb.md)

*Overrides [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)*

*Defined in [classes.ts:263](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L263)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` | 

**Returns:** [SubClassB](_classes_.subclassb.md)

---

## Properties

<a id="kind"></a>

### `<Protected>` kind

**● kind**: *`number`*

*Inherited from [BaseClass](_classes_.baseclass.md).[kind](_classes_.baseclass.md#kind)*

*Defined in [classes.ts:65](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L65)*

This is a simple protected member.

___

<a id="name"></a>

###  name

**● name**: *`string`*

*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[name](../interfaces/_classes_.inameinterface.md#name)*

*Overrides [BaseClass](_classes_.baseclass.md).[name](_classes_.baseclass.md#name)*

*Defined in [classes.ts:263](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L263)*

___

<a id="instance"></a>

### `<Static>` instance

**● instance**: *[BaseClass](_classes_.baseclass.md)*

*Inherited from [BaseClass](_classes_.baseclass.md).[instance](_classes_.baseclass.md#instance)*

*Defined in [classes.ts:72](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L72)*

This is a static member.

Static members should not be inherited.

___

<a id="instances"></a>

### `<Static>` instances

**● instances**: *[BaseClass](_classes_.baseclass.md)[]*

*Inherited from [BaseClass](_classes_.baseclass.md).[instances](_classes_.baseclass.md#instances)*

*Defined in [classes.ts:73](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L73)*

___

## Methods

<a id="abstractmethod"></a>

###  abstractMethod

▸ **abstractMethod**(): `void`

*Overrides [BaseClass](_classes_.baseclass.md).[abstractMethod](_classes_.baseclass.md#abstractmethod)*

*Defined in [classes.ts:269](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L269)*

**Returns:** `void`

___

<a id="arrowfunction"></a>

###  arrowFunction

▸ **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`

*Inherited from [BaseClass](_classes_.baseclass.md).[arrowFunction](_classes_.baseclass.md#arrowfunction)*

*Defined in [classes.ts:143](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L143)*

This is a simple fat arrow function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| param2 | `string` |  The second parameter needed by this function. |
| param1 | `number` |  The first parameter needed by this function. |

**Returns:** `void`

___

<a id="dosomething"></a>

###  doSomething

▸ **doSomething**(value: *[`string`,[SubClassA](_classes_.subclassa.md),[SubClassB](_classes_.subclassb.md)]*): `void`

*Defined in [classes.ts:273](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L273)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [`string`,[SubClassA](_classes_.subclassa.md),[SubClassB](_classes_.subclassb.md)] | 

**Returns:** `void`

___

<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[getName](../interfaces/_classes_.inameinterface.md#getname)*

*Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname)*

*Defined in [classes.ts:105](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L105)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.

**Returns:** `string`
Return the name.

___

<a id="setname"></a>

###  setName

▸ **setName**(name: *`string`*): `void`

*Inherited from [BaseClass](_classes_.baseclass.md).[setName](_classes_.baseclass.md#setname)*

*Defined in [classes.ts:130](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L130)*

This is a simple member function.

It should be inherited by all subclasses.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The new name. |

**Returns:** `void`

___

<a id="catest"></a>

### `<Static>` caTest

▸ **caTest**(originalValues: *[BaseClass](_classes_.baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`

*Inherited from [BaseClass](_classes_.baseclass.md).[caTest](_classes_.baseclass.md#catest)*

*Defined in [classes.ts:170](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L170)*

*__see__*: [https://github.com/sebastian-lenz/typedoc/issues/42](https://github.com/sebastian-lenz/typedoc/issues/42)

**Parameters:**

| Param | Type |
| ------ | ------ |
| originalValues | [BaseClass](_classes_.baseclass.md) | 
| newRecord | `any` | 
| fieldNames | `string`[] | 
| mandatoryFields | `string`[] | 

**Returns:** `string`

___

<a id="getinstance"></a>

### `<Static>` getInstance

▸ **getInstance**(): [BaseClass](_classes_.baseclass.md)

*Inherited from [BaseClass](_classes_.baseclass.md).[getInstance](_classes_.baseclass.md#getinstance)*

*Defined in [classes.ts:162](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L162)*

This is a static function.

Static functions should not be inherited.

**Returns:** [BaseClass](_classes_.baseclass.md)
An instance of BaseClass.

___

<a id="getname-1"></a>

### `<Static>` getName

▸ **getName**(): `string`

*Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname-1)*

*Defined in [classes.ts:118](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/classes.ts#L118)*

This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.

**Returns:** `string`
Return the name.

___

