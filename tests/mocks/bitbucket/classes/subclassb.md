[typedoc-plugin-markdown](../index.md) > [SubClassB](../classes/subclassb.md)



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






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [SubClassB](subclassb.md)

---


## Properties


### «Protected» kind

** ●  kind**:  *`number`* 




This is a simple protected member.




___



###  name

** ●  name**:  *`string`* 




This is a simple public member.




___


## Methods


###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`







This is a simple fat arrow function.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param2 | `string` | The second parameter needed by this function. |
| param1 | `number` | The first parameter needed by this function. |





**Returns:** `void`





___



###  doSomething

► **doSomething**(value: *[`string`,[SubClassA](subclassa.md),[SubClassB](subclassb.md)]*): `void`







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | [`string`,[SubClassA](subclassa.md),[SubClassB](subclassb.md)] | - |





**Returns:** `void`





___



###  getName

► **getName**(): `string`







This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___



###  setName

► **setName**(name: *`string`*): `void`







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







This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](baseclass.md)
An instance of BaseClass.






___



### «Static» getName

► **getName**(): `string`







This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___


