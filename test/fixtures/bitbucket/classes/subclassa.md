[typedoc-plugin-markdown](../README.md) > [SubClassA](../classes/subclassa.md)

# Class: SubClassA

This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited from BaseClass.

## Hierarchy

 [BaseClass](baseclass.md)

**↳ SubClassA**

## Implements

* [INameInterface](../interfaces/inameinterface.md)
* [IPrintNameInterface](../interfaces/iprintnameinterface.md)

## Index

### Constructors

* [constructor](subclassa.md#markdown-header-constructor)

### Properties

* [kind](subclassa.md#markdown-header-Protected-kind)
* [name](subclassa.md#markdown-header-name)
* [instance](subclassa.md#markdown-header-Static-instance)
* [instances](subclassa.md#markdown-header-Static-instances)

### Accessors

* [nameProperty](subclassa.md#markdown-header-nameProperty)
* [readOnlyNameProperty](subclassa.md#markdown-header-readOnlyNameProperty)
* [writeOnlyNameProperty](subclassa.md#markdown-header-writeOnlyNameProperty)

### Methods

* [abstractMethod](subclassa.md#markdown-header-abstractMethod)
* [arrowFunction](subclassa.md#markdown-header-arrowFunction)
* [getName](subclassa.md#markdown-header-getName)
* [print](subclassa.md#markdown-header-print)
* [printName](subclassa.md#markdown-header-printName)
* [setName](subclassa.md#markdown-header-setName)
* [caTest](subclassa.md#markdown-header-Static-caTest)
* [getInstance](subclassa.md#markdown-header-Static-getInstance)
* [getName](subclassa.md#markdown-header-Static-getName)

---

## Constructors

###  constructor

⊕ **new SubClassA**(name: *`string`*): [SubClassA](subclassa.md)

⊕ **new SubClassA**(source: *[BaseClass](baseclass.md)*): [SubClassA](subclassa.md)

*Inherited from [BaseClass](baseclass.md).[constructor](baseclass.md#markdown-header-constructor)*

*Defined in [classes.ts:78](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [SubClassA](subclassa.md)

*Inherited from [BaseClass](baseclass.md).[constructor](baseclass.md#markdown-header-constructor)*

*Defined in [classes.ts:81](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-81)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [BaseClass](baseclass.md) |

**Returns:** [SubClassA](subclassa.md)

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

*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[name](../interfaces/iprintnameinterface.md#markdown-header-name)*

*Overrides [BaseClass](baseclass.md).[name](baseclass.md#markdown-header-name)*

*Defined in [classes.ts:200](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-200)*

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

## Accessors

###  nameProperty

**get nameProperty**(): `string`

**set nameProperty**(value: *`string`*): `void`

*Defined in [classes.ts:219](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-219)*

Returns the name. See [BaseClass.name](baseclass.md#markdown-header-name).

**Returns:** `string`
The return value.

*Defined in [classes.ts:229](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-229)*

Sets the name. See [BaseClass.name](baseclass.md#markdown-header-name).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  The new name. |

**Returns:** `void`
The return value.

___

###  readOnlyNameProperty

**get readOnlyNameProperty**(): `string`

*Defined in [classes.ts:238](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-238)*

Returns the name. See [BaseClass.name](baseclass.md#markdown-header-name).

**Returns:** `string`
The return value.

___

###  writeOnlyNameProperty

**set writeOnlyNameProperty**(value: *`string`*): `void`

*Defined in [classes.ts:248](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-248)*

Sets the name. See [BaseClass.name](baseclass.md#markdown-header-name).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  The new name. |

**Returns:** `void`
The return value.

___

## Methods

###  abstractMethod

▸ **abstractMethod**(): `void`

*Overrides [BaseClass](baseclass.md).[abstractMethod](baseclass.md#markdown-header-Abstract-abstractMethod)*

*Defined in [classes.ts:252](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-252)*

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

###  getName

▸ **getName**(): `string`

*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[getName](../interfaces/iprintnameinterface.md#markdown-header-getName)*

*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#markdown-header-getName)*

*Defined in [classes.ts:105](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-105)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.

**Returns:** `string`
Return the name.

___

###  print

▸ **print**(value: *`string`*): `void`

*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[print](../interfaces/iprintnameinterface.md#markdown-header-print)*

*Defined in [classes.ts:205](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-205)*

This is a simple interface function.

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `void`

___

###  printName

▸ **printName**(): `void`

*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[printName](../interfaces/iprintnameinterface.md#markdown-header-printName)*

*Defined in [classes.ts:210](https://bitbucket.org/owner/repository_name/src/master/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-210)*

This is a interface function of IPrintNameInterface

**Returns:** `void`

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

