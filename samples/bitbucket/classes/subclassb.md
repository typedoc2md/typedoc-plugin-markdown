[typedoc-plugin-markdown](../README.md) > [SubClassB](../classes/subclassb.md)

# Class: SubClassB

This is a class that extends another class.

The constructor of the original class should be overwritten.

## Hierarchy

 [BaseClass](baseclass.md)

**↳ SubClassB**

## Implements

* [INameInterface](../interfaces/inameinterface.md)

## Index

### Constructors

* [constructor](subclassb.md#markdown-header-constructor)

### Properties

* [kind](subclassb.md#markdown-header-protected-kind)
* [name](subclassb.md#markdown-header-name)
* [instance](subclassb.md#markdown-header-static-instance)
* [instances](subclassb.md#markdown-header-static-instances)

### Methods

* [abstractMethod](subclassb.md#markdown-header-abstractmethod)
* [arrowFunction](subclassb.md#markdown-header-arrowfunction)
* [doSomething](subclassb.md#markdown-header-dosomething)
* [getName](subclassb.md#markdown-header-getname)
* [setName](subclassb.md#markdown-header-setname)
* [caTest](subclassb.md#markdown-header-static-catest)
* [getInstance](subclassb.md#markdown-header-static-getinstance)
* [getName](subclassb.md#markdown-header-static-getname)

---

## Constructors

### ⊕ **new SubClassB**(name: *`string`*): [SubClassB](subclassb.md)

*Overrides [BaseClass](baseclass.md).[constructor](baseclass.md#markdown-header-constructor)*

*Defined in [classes.ts:263](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-263)*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |

**Returns:** [SubClassB](subclassb.md)

---

## Properties

### `<Protected>` kind

**●  kind**:  *`number`* 

*Inherited from [BaseClass](baseclass.md).[kind](baseclass.md#markdown-header-protected-kind)*

*Defined in [classes.ts:65](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-65)*

This is a simple protected member.

___

###  name

**●  name**:  *`string`* 

*Implementation of [INameInterface](../interfaces/inameinterface.md).[name](../interfaces/inameinterface.md#markdown-header-name)*

*Overrides [BaseClass](baseclass.md).[name](baseclass.md#markdown-header-name)*

*Defined in [classes.ts:263](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-263)*

___

### `<Static>` instance

**●  instance**:  *[BaseClass](baseclass.md)* 

*Inherited from [BaseClass](baseclass.md).[instance](baseclass.md#markdown-header-static-instance)*

*Defined in [classes.ts:72](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-72)*

This is a static member.

Static members should not be inherited.

___

### `<Static>` instances

**●  instances**:  *[BaseClass](baseclass.md)[]* 

*Inherited from [BaseClass](baseclass.md).[instances](baseclass.md#markdown-header-static-instances)*

*Defined in [classes.ts:73](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-73)*

___

## Methods

###  abstractMethod

▸ **abstractMethod**(): `void`

*Overrides [BaseClass](baseclass.md).[abstractMethod](baseclass.md#markdown-header-abstract-abstractmethod)*

*Defined in [classes.ts:269](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-269)*

**Returns:** `void`

___

###  arrowFunction

▸ **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`

*Inherited from [BaseClass](baseclass.md).[arrowFunction](baseclass.md#markdown-header-arrowfunction)*

*Defined in [classes.ts:143](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-143)*

This is a simple fat arrow function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| param2 | `string`   |  The second parameter needed by this function. |
| param1 | `number`   |  The first parameter needed by this function. |

**Returns:** `void`

___

###  doSomething

▸ **doSomething**(value: *[`string`,[SubClassA](subclassa.md),[SubClassB](subclassb.md)]*): `void`

*Defined in [classes.ts:273](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-273)*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [`string`,[SubClassA](subclassa.md),[SubClassB](subclassb.md)]   |  - |

**Returns:** `void`

___

###  getName

▸ **getName**(): `string`

*Implementation of [INameInterface](../interfaces/inameinterface.md).[getName](../interfaces/inameinterface.md#markdown-header-getname)*

*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#markdown-header-getname)*

*Defined in [classes.ts:105](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-105)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.

**Returns:** `string`
Return the name.

___

###  setName

▸ **setName**(name: *`string`*): `void`

*Inherited from [BaseClass](baseclass.md).[setName](baseclass.md#markdown-header-setname)*

*Defined in [classes.ts:130](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-130)*

This is a simple member function.

It should be inherited by all subclasses.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The new name. |

**Returns:** `void`

___

### `<Static>` caTest

▸ **caTest**(originalValues: *[BaseClass](baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`

*Inherited from [BaseClass](baseclass.md).[caTest](baseclass.md#markdown-header-static-catest)*

*Defined in [classes.ts:170](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-170)*

*__see__*: [https://github.com/sebastian-lenz/typedoc/issues/42](https://github.com/sebastian-lenz/typedoc/issues/42)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| originalValues | [BaseClass](baseclass.md)   |  - |
| newRecord | `any`   |  - |
| fieldNames | `string`[]   |  - |
| mandatoryFields | `string`[]   |  - |

**Returns:** `string`

___

### `<Static>` getInstance

▸ **getInstance**(): [BaseClass](baseclass.md)

*Inherited from [BaseClass](baseclass.md).[getInstance](baseclass.md#markdown-header-static-getinstance)*

*Defined in [classes.ts:162](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-162)*

This is a static function.

Static functions should not be inherited.

**Returns:** [BaseClass](baseclass.md)
An instance of BaseClass.

___

### `<Static>` getName

▸ **getName**(): `string`

*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#markdown-header-static-getname)*

*Defined in [classes.ts:118](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-118)*

This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.

**Returns:** `string`
Return the name.

___

