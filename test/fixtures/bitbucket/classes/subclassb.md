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

* [kind](subclassb.md#markdown-header-Protected-kind)
* [name](subclassb.md#markdown-header-name)
* [instance](subclassb.md#markdown-header-Static-instance)
* [instances](subclassb.md#markdown-header-Static-instances)

### Methods

* [abstractMethod](subclassb.md#markdown-header-abstractMethod)
* [arrowFunction](subclassb.md#markdown-header-arrowFunction)
* [doOtherThings](subclassb.md#markdown-header-doOtherThings)
* [doSomething](subclassb.md#markdown-header-doSomething)
* [getName](subclassb.md#markdown-header-getName)
* [setName](subclassb.md#markdown-header-setName)
* [caTest](subclassb.md#markdown-header-Static-caTest)
* [getInstance](subclassb.md#markdown-header-Static-getInstance)
* [getName](subclassb.md#markdown-header-Static-getName)

---

## Constructors

###  constructor

⊕ **new SubClassB**(name: *`string`*): [SubClassB](subclassb.md)

*Overrides [BaseClass](baseclass.md).[constructor](baseclass.md#markdown-header-constructor)*

*Defined in [classes.ts:263](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-263)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [SubClassB](subclassb.md)

___

## Properties

### `<Protected>` kind

**● kind**: *`number`*

*Inherited from [BaseClass](baseclass.md).[kind](baseclass.md#markdown-header-Protected-kind)*

*Defined in [classes.ts:65](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-65)*

This is a simple protected member.

___

###  name

**● name**: *`string`*

*Implementation of [INameInterface](../interfaces/inameinterface.md).[name](../interfaces/inameinterface.md#markdown-header-name)*

*Overrides [BaseClass](baseclass.md).[name](baseclass.md#markdown-header-name)*

*Defined in [classes.ts:263](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-263)*

___

### `<Static>` instance

**● instance**: *[BaseClass](baseclass.md)*

*Inherited from [BaseClass](baseclass.md).[instance](baseclass.md#markdown-header-Static-instance)*

*Defined in [classes.ts:72](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-72)*

This is a static member.

Static members should not be inherited.

___

### `<Static>` instances

**● instances**: *[BaseClass](baseclass.md)[]*

*Inherited from [BaseClass](baseclass.md).[instances](baseclass.md#markdown-header-Static-instances)*

*Defined in [classes.ts:73](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-73)*

___

## Methods

###  abstractMethod

▸ **abstractMethod**(): `void`

*Overrides [BaseClass](baseclass.md).[abstractMethod](baseclass.md#markdown-header-Abstract-abstractMethod)*

*Defined in [classes.ts:269](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-269)*

**Returns:** `void`

___

###  arrowFunction

▸ **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`

*Inherited from [BaseClass](baseclass.md).[arrowFunction](baseclass.md#markdown-header-arrowFunction)*

*Defined in [classes.ts:143](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-143)*

This is a simple fat arrow function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| param2 | `string` |  The second parameter needed by this function. |
| param1 | `number` |  The first parameter needed by this function. |

**Returns:** `void`

___

###  doOtherThings

▸ **doOtherThings**(value: *`string` \| `number` \| [SubClassA](subclassa.md)*, secondValue?: *[SubClassA](subclassa.md)*): `void`

*Defined in [classes.ts:282](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-282)*

Description for doOtherThings.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` \| `number` \| [SubClassA](subclassa.md) |  Description for value |
| `Optional` secondValue | [SubClassA](subclassa.md) |  Description for optional value |

**Returns:** `void`

___

###  doSomething

▸ **doSomething**(value: *[`string`, [SubClassA](subclassa.md), [SubClassB](subclassb.md)]*): `void`

*Defined in [classes.ts:273](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-273)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [`string`, [SubClassA](subclassa.md), [SubClassB](subclassb.md)] |

**Returns:** `void`

___

###  getName

▸ **getName**(): `string`

*Implementation of [INameInterface](../interfaces/inameinterface.md).[getName](../interfaces/inameinterface.md#markdown-header-getName)*

*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#markdown-header-getName)*

*Defined in [classes.ts:105](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-105)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.

**Returns:** `string`
Return the name.

___

###  setName

▸ **setName**(name: *`string`*): `void`

*Inherited from [BaseClass](baseclass.md).[setName](baseclass.md#markdown-header-setName)*

*Defined in [classes.ts:130](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-130)*

This is a simple member function.

It should be inherited by all subclasses.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The new name. |

**Returns:** `void`

___

### `<Static>` caTest

▸ **caTest**(originalValues: *[BaseClass](baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`

*Inherited from [BaseClass](baseclass.md).[caTest](baseclass.md#markdown-header-Static-caTest)*

*Defined in [classes.ts:170](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-170)*

*__see__*: [https://github.com/sebastian-lenz/typedoc/issues/42](https://github.com/sebastian-lenz/typedoc/issues/42)

**Parameters:**

| Name | Type |
| ------ | ------ |
| originalValues | [BaseClass](baseclass.md) |
| newRecord | `any` |
| fieldNames | `string`[] |
| mandatoryFields | `string`[] |

**Returns:** `string`

___

### `<Static>` getInstance

▸ **getInstance**(): [BaseClass](baseclass.md)

*Inherited from [BaseClass](baseclass.md).[getInstance](baseclass.md#markdown-header-Static-getInstance)*

*Defined in [classes.ts:162](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-162)*

This is a static function.

Static functions should not be inherited.

**Returns:** [BaseClass](baseclass.md)
An instance of BaseClass.

___

### `<Static>` getName

▸ **getName**(): `string`

*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#markdown-header-Static-getName)*

*Defined in [classes.ts:118](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-118)*

This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.

**Returns:** `string`
Return the name.

___

