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


### Methods

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

*Defined in [classes.ts:238](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-238)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** [SubClassB](subclassb.md)

---


## Properties


### «Protected» kind

**●  kind**:  *`number`* 

*Inherited from [BaseClass](baseclass.md).[kind](baseclass.md#markdown-header-protected-kind)*

*Defined in [classes.ts:65](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-65)*



This is a simple protected member.




___



###  name

**●  name**:  *`string`* 

*Implementation of [INameInterface](../interfaces/inameinterface.md).[name](../interfaces/inameinterface.md#markdown-header-name)*

*Inherited from [BaseClass](baseclass.md).[name](baseclass.md#markdown-header-name)*

*Defined in [classes.ts:60](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-60)*



This is a simple public member.




___


## Methods


###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`




*Inherited from [BaseClass](baseclass.md).[arrowFunction](baseclass.md#markdown-header-arrowfunction)*

*Defined in [classes.ts:129](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-129)*



This is a simple fat arrow function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| param2 | `string`   |  The second parameter needed by this function. |
| param1 | `number`   |  The first parameter needed by this function. |





**Returns:** `void`





___



###  doSomething

► **doSomething**(value: *[`string`,[SubClassA](subclassa.md),[SubClassB](subclassb.md)]*): `void`




*Defined in [classes.ts:243](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-243)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [`string`,[SubClassA](subclassa.md),[SubClassB](subclassb.md)]   |  - |





**Returns:** `void`





___



###  getName

► **getName**(): `string`




*Implementation of [INameInterface](../interfaces/inameinterface.md).[getName](../interfaces/inameinterface.md#markdown-header-getname)*

*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#markdown-header-getname)*

*Defined in [classes.ts:94](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-94)*



This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___



###  setName

► **setName**(name: *`string`*): `void`




*Inherited from [BaseClass](baseclass.md).[setName](baseclass.md#markdown-header-setname)*

*Defined in [classes.ts:117](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-117)*



This is a simple member function.

It should be inherited by all subclasses.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The new name. |





**Returns:** `void`





___



### «Static» caTest

► **caTest**(originalValues: *[BaseClass](baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`




*Inherited from [BaseClass](baseclass.md).[caTest](baseclass.md#markdown-header-static-catest)*

*Defined in [classes.ts:153](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-153)*


**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| originalValues | [BaseClass](baseclass.md)   |  - |
| newRecord | `any`   |  - |
| fieldNames | `string`[]   |  - |
| mandatoryFields | `string`[]   |  - |





**Returns:** `string`





___



### «Static» getInstance

► **getInstance**(): [BaseClass](baseclass.md)




*Inherited from [BaseClass](baseclass.md).[getInstance](baseclass.md#markdown-header-static-getinstance)*

*Defined in [classes.ts:146](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-146)*



This is a static function.

Static functions should not be inherited.




**Returns:** [BaseClass](baseclass.md)
An instance of BaseClass.






___



### «Static» getName

► **getName**(): `string`




*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#markdown-header-static-getname)*

*Defined in [classes.ts:106](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-106)*



This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___


