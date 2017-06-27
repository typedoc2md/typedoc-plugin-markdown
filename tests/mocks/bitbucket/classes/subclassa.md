[typedoc-plugin-markdown](../README.md) > [SubClassA](../classes/subclassa.md)



# Class: SubClassA


This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited
from BaseClass.


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

* [kind](subclassa.md#markdown-header-protected-kind)
* [name](subclassa.md#markdown-header-name)


### Accessors

* [nameProperty](subclassa.md#markdown-header-nameproperty)
* [readOnlyNameProperty](subclassa.md#markdown-header-readonlynameproperty)
* [writeOnlyNameProperty](subclassa.md#markdown-header-writeonlynameproperty)


### Methods

* [arrowFunction](subclassa.md#markdown-header-arrowfunction)
* [getName](subclassa.md#markdown-header-getname)
* [print](subclassa.md#markdown-header-print)
* [printName](subclassa.md#markdown-header-printname)
* [setName](subclassa.md#markdown-header-setname)
* [caTest](subclassa.md#markdown-header-static-catest)
* [getInstance](subclassa.md#markdown-header-static-getinstance)
* [getName](subclassa.md#markdown-header-static-getname)



---
## Constructors



### ⊕ **new SubClassA**(name: *`string`*): [SubClassA](subclassa.md)


### ⊕ **new SubClassA**(source: *[BaseClass](baseclass.md)*): [SubClassA](subclassa.md)



*Inherited from [BaseClass](baseclass.md).[constructor](baseclass.md#markdown-header-constructor)*

*Defined in [classes.ts:70](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-70)*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [SubClassA](subclassa.md)


*Inherited from [BaseClass](baseclass.md).[constructor](baseclass.md#markdown-header-constructor)*

*Defined in [classes.ts:72](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-72)*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source | [BaseClass](baseclass.md) | - |





**Returns:** [SubClassA](subclassa.md)

---


## Properties


### «Protected» kind

** ●  kind**:  *`number`* 

*Inherited from [BaseClass](baseclass.md).[kind](baseclass.md#markdown-header-protected-kind)*

*Defined in [classes.ts:65](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-65)*



This is a simple protected member.




___



###  name

** ●  name**:  *`string`* 

*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[name](../interfaces/iprintnameinterface.md#markdown-header-name)*

*Inherited from [BaseClass](baseclass.md).[name](baseclass.md#markdown-header-name)*

*Defined in [classes.ts:60](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-60)*



This is a simple public member.




___


## Accessors


###  nameProperty


getnameProperty(): `string`setnameProperty(value: *`string`*): `void`


*Defined in [classes.ts:199](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-199)*



Returns the name. See [[BaseClass.name]].




**Returns:** `string`
The return value.



*Defined in [classes.ts:209](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-209)*



Sets the name. See [[BaseClass.name]].


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The new name. |





**Returns:** `void`
The return value.




___



###  readOnlyNameProperty


getreadOnlyNameProperty(): `string`


*Defined in [classes.ts:218](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-218)*



Returns the name. See [[BaseClass.name]].




**Returns:** `string`
The return value.




___



###  writeOnlyNameProperty


setwriteOnlyNameProperty(value: *`string`*): `void`


*Defined in [classes.ts:228](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-228)*



Sets the name. See [[BaseClass.name]].


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The new name. |





**Returns:** `void`
The return value.




___


## Methods


###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`




*Inherited from [BaseClass](baseclass.md).[arrowFunction](baseclass.md#markdown-header-arrowfunction)*

*Defined in [classes.ts:129](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-129)*



This is a simple fat arrow function.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param2 | `string` | The second parameter needed by this function. |
| param1 | `number` | The first parameter needed by this function. |





**Returns:** `void`





___



###  getName

► **getName**(): `string`




*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[getName](../interfaces/iprintnameinterface.md#markdown-header-getname)*

*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#markdown-header-getname)*

*Defined in [classes.ts:94](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-94)*



This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___



###  print

► **print**(value: *`string`*): `void`




*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[print](../interfaces/iprintnameinterface.md#markdown-header-print)*

*Defined in [classes.ts:185](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-185)*



This is a simple interface function.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | - |





**Returns:** `void`





___



###  printName

► **printName**(): `void`




*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[printName](../interfaces/iprintnameinterface.md#markdown-header-printname)*

*Defined in [classes.ts:190](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-190)*



This is a interface function of IPrintNameInterface




**Returns:** `void`





___



###  setName

► **setName**(name: *`string`*): `void`




*Inherited from [BaseClass](baseclass.md).[setName](baseclass.md#markdown-header-setname)*

*Defined in [classes.ts:117](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-117)*



This is a simple member function.

It should be inherited by all subclasses.



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | The new name. |





**Returns:** `void`





___



### «Static» caTest

► **caTest**(originalValues: *[BaseClass](baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`




*Inherited from [BaseClass](baseclass.md).[caTest](baseclass.md#markdown-header-static-catest)*

*Defined in [classes.ts:153](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-153)*


**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| originalValues | [BaseClass](baseclass.md) | - |
| newRecord | `any` | - |
| fieldNames | `string`[] | - |
| mandatoryFields | `string`[] | - |





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

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___


