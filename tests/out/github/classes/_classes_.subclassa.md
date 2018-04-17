[typedoc-plugin-markdown](../README.md) > ["classes"](../modules/_classes_.md) > [SubClassA](../classes/_classes_.subclassa.md)

# Class: SubClassA

This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited from BaseClass.

## Hierarchy

 [BaseClass](_classes_.baseclass.md)

**↳ SubClassA**

## Implements

* [INameInterface](../interfaces/_classes_.inameinterface.md)
* [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md)

## Index

### Constructors

* [constructor](_classes_.subclassa.md#constructor)

### Properties

* [kind](_classes_.subclassa.md#kind)
* [name](_classes_.subclassa.md#name)
* [instance](_classes_.subclassa.md#instance)
* [instances](_classes_.subclassa.md#instances)

### Accessors

* [nameProperty](_classes_.subclassa.md#nameproperty)
* [readOnlyNameProperty](_classes_.subclassa.md#readonlynameproperty)
* [writeOnlyNameProperty](_classes_.subclassa.md#writeonlynameproperty)

### Methods

* [abstractMethod](_classes_.subclassa.md#abstractmethod)
* [arrowFunction](_classes_.subclassa.md#arrowfunction)
* [getName](_classes_.subclassa.md#getname)
* [print](_classes_.subclassa.md#print)
* [printName](_classes_.subclassa.md#printname)
* [setName](_classes_.subclassa.md#setname)
* [caTest](_classes_.subclassa.md#catest)
* [getInstance](_classes_.subclassa.md#getinstance)
* [getName](_classes_.subclassa.md#getname-1)

---

## Constructors

<a id="constructor"></a>

### ⊕ **new SubClassA**(name: *`string`*): [SubClassA](_classes_.subclassa.md)

### ⊕ **new SubClassA**(source: *[BaseClass](_classes_.baseclass.md)*): [SubClassA](_classes_.subclassa.md)

*Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)*

*Defined in classes.ts:78*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |

**Returns:** [SubClassA](_classes_.subclassa.md)

*Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)*

*Defined in classes.ts:81*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | [BaseClass](_classes_.baseclass.md)   |  - |

**Returns:** [SubClassA](_classes_.subclassa.md)

---

## Properties

<a id="kind"></a>

### `<Protected>` kind

**●  kind**:  *`number`* 

*Inherited from [BaseClass](_classes_.baseclass.md).[kind](_classes_.baseclass.md#kind)*

*Defined in classes.ts:65*

This is a simple protected member.

___

<a id="name"></a>

###  name

**●  name**:  *`string`* 

*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[name](../interfaces/_classes_.iprintnameinterface.md#name)*

*Overrides [BaseClass](_classes_.baseclass.md).[name](_classes_.baseclass.md#name)*

*Defined in classes.ts:200*

___

<a id="instance"></a>

### `<Static>` instance

**●  instance**:  *[BaseClass](_classes_.baseclass.md)* 

*Inherited from [BaseClass](_classes_.baseclass.md).[instance](_classes_.baseclass.md#instance)*

*Defined in classes.ts:72*

This is a static member.

Static members should not be inherited.

___

<a id="instances"></a>

### `<Static>` instances

**●  instances**:  *[BaseClass](_classes_.baseclass.md)[]* 

*Inherited from [BaseClass](_classes_.baseclass.md).[instances](_classes_.baseclass.md#instances)*

*Defined in classes.ts:73*

___

## Accessors

<a id="nameproperty"></a>

###  nameProperty

getnameProperty(): `string`setnameProperty(value: *`string`*): `void`

*Defined in classes.ts:219*

Returns the name. See [BaseClass.name](_classes_.baseclass.md#name).

**Returns:** `string`
The return value.

*Defined in classes.ts:229*

Sets the name. See [BaseClass.name](_classes_.baseclass.md#name).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The new name. |

**Returns:** `void`
The return value.

___

<a id="readonlynameproperty"></a>

###  readOnlyNameProperty

getreadOnlyNameProperty(): `string`

*Defined in classes.ts:238*

Returns the name. See [BaseClass.name](_classes_.baseclass.md#name).

**Returns:** `string`
The return value.

___

<a id="writeonlynameproperty"></a>

###  writeOnlyNameProperty

setwriteOnlyNameProperty(value: *`string`*): `void`

*Defined in classes.ts:248*

Sets the name. See [BaseClass.name](_classes_.baseclass.md#name).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The new name. |

**Returns:** `void`
The return value.

___

## Methods

<a id="abstractmethod"></a>

###  abstractMethod

▸ **abstractMethod**(): `void`

*Overrides [BaseClass](_classes_.baseclass.md).[abstractMethod](_classes_.baseclass.md#abstractmethod)*

*Defined in classes.ts:252*

**Returns:** `void`

___

<a id="arrowfunction"></a>

###  arrowFunction

▸ **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`

*Inherited from [BaseClass](_classes_.baseclass.md).[arrowFunction](_classes_.baseclass.md#arrowfunction)*

*Defined in classes.ts:143*

This is a simple fat arrow function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| param2 | `string`   |  The second parameter needed by this function. |
| param1 | `number`   |  The first parameter needed by this function. |

**Returns:** `void`

___

<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[getName](../interfaces/_classes_.iprintnameinterface.md#getname)*

*Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname)*

*Defined in classes.ts:105*

This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.

**Returns:** `string`
Return the name.

___

<a id="print"></a>

###  print

▸ **print**(value: *`string`*): `void`

*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[print](../interfaces/_classes_.iprintnameinterface.md#print)*

*Defined in classes.ts:205*

This is a simple interface function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  - |

**Returns:** `void`

___

<a id="printname"></a>

###  printName

▸ **printName**(): `void`

*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[printName](../interfaces/_classes_.iprintnameinterface.md#printname)*

*Defined in classes.ts:210*

This is a interface function of IPrintNameInterface

**Returns:** `void`

___

<a id="setname"></a>

###  setName

▸ **setName**(name: *`string`*): `void`

*Inherited from [BaseClass](_classes_.baseclass.md).[setName](_classes_.baseclass.md#setname)*

*Defined in classes.ts:130*

This is a simple member function.

It should be inherited by all subclasses.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The new name. |

**Returns:** `void`

___

<a id="catest"></a>

### `<Static>` caTest

▸ **caTest**(originalValues: *[BaseClass](_classes_.baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`

*Inherited from [BaseClass](_classes_.baseclass.md).[caTest](_classes_.baseclass.md#catest)*

*Defined in classes.ts:170*

*__see__*: [https://github.com/sebastian-lenz/typedoc/issues/42](https://github.com/sebastian-lenz/typedoc/issues/42)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| originalValues | [BaseClass](_classes_.baseclass.md)   |  - |
| newRecord | `any`   |  - |
| fieldNames | `string`[]   |  - |
| mandatoryFields | `string`[]   |  - |

**Returns:** `string`

___

<a id="getinstance"></a>

### `<Static>` getInstance

▸ **getInstance**(): [BaseClass](_classes_.baseclass.md)

*Inherited from [BaseClass](_classes_.baseclass.md).[getInstance](_classes_.baseclass.md#getinstance)*

*Defined in classes.ts:162*

This is a static function.

Static functions should not be inherited.

**Returns:** [BaseClass](_classes_.baseclass.md)
An instance of BaseClass.

___

<a id="getname-1"></a>

### `<Static>` getName

▸ **getName**(): `string`

*Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname-1)*

*Defined in classes.ts:118*

This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.

**Returns:** `string`
Return the name.

___

