


#  typedoc-plugin-markdown

## Index

### Modules

* [Enums](#module-enums)
* [interfaces](#module-interfaces)
* [moduleFunction](#module-modulefunction)


### Classes

* [BaseClass](#class-baseclass)
* [Color](#class-color)
* [Employee](#class-employee)
* [GenericClass](#class-genericclass)
* [Greeter](#class-greeter)
* [InternalClass](#class-internalclass)
* [NonGenericClass](#class-nongenericclass)
* [Person](#class-person)
* [SubClassA](#class-subclassa)
* [SubClassB](#class-subclassb)
* [Vector](#class-vector)


### Variables

* [amount](#amount)
* [color](#color)
* [greeter](#greeter)
* [isDone](#isdone)
* [numbers](#numbers)
* [privateVar](#privatevar)
* [publicVar](#publicvar)


### Functions

* [createSomething](#createsomething)
* [exportedFunction](#exportedfunction)
* [functionWithArguments](#functionwitharguments)
* [functionWithDefaults](#functionwithdefaults)
* [functionWithDocLink](#functionwithdoclink)
* [functionWithOptionalValue](#functionwithoptionalvalue)
* [functionWithRest](#functionwithrest)
* [genericFunction](#genericfunction)
* [internalFunction](#internalfunction)
* [multipleSignatures](#multiplesignatures)
* [privateFunction](#privatefunction)
* [publicFunction](#publicfunction)
* [variableFunction](#variablefunction)


### Object literals

* [aMixedObject](#amixedobject)


### Interfaces

* [IApiElementType](#interface-iapielementtype)
* [IApiGameEvent](#interface-iapigameevent)
* [IApiGameFormations](#interface-iapigameformations)
* [IApiGameSettings](#interface-iapigamesettings)
* [IApiLeaguePositions](#interface-iapileaguepositions)
* [INameInterface](#interface-inameinterface)
* [IPrintInterface](#interface-iprintinterface)
* [IPrintNameInterface](#interface-iprintnameinterface)



---



# Module: Enums

## Index

### Enumerations

* [Direction](#enumeration-direction)
* [FileAccess](#enumeration-fileaccess)



---



# Enumeration: Direction

## Index

### Enumeration members

* [Down](#enums.direction.down)
* [Left](#enums.direction.left)
* [Right](#enums.direction.right)
* [Up](#enums.direction.up)



---
## Enumeration members
<a id="enums.direction.down"></a>

###  Down

** Down**:   






___

<a id="enums.direction.left"></a>

###  Left

** Left**:   






___

<a id="enums.direction.right"></a>

###  Right

** Right**:   






___

<a id="enums.direction.up"></a>

###  Up

** Up**:    = 1






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Enumeration: FileAccess

## Index

### Enumeration members

* [G](#enums.fileaccess.g)
* [None](#enums.fileaccess.none)
* [Read](#enums.fileaccess.read)
* [ReadWrite](#enums.fileaccess.readwrite)
* [Write](#enums.fileaccess.write)



---
## Enumeration members
<a id="enums.fileaccess.g"></a>

###  G

** G**:    =  '123'.length






___

<a id="enums.fileaccess.none"></a>

###  None

** None**:   






___

<a id="enums.fileaccess.read"></a>

###  Read

** Read**:    =  1 << 1






___

<a id="enums.fileaccess.readwrite"></a>

###  ReadWrite

** ReadWrite**:    =  Read | Write






___

<a id="enums.fileaccess.write"></a>

###  Write

** Write**:    =  1 << 2






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---







# Module: interfaces

## Index

### Interfaces

* [ClockConstructor](#interface-clockconstructor)
* [ClockInterface](#interface-clockinterface)
* [Shape](#interface-shape)
* [Square](#interface-square)
* [SquareConfig](#interface-squareconfig)
* [StringArray](#interface-stringarray)
* [Surface](#interface-surface)


### Type aliases

* [SearchFunc](#interfaces.searchfunc)


### Variables

* [mySearch](#interfaces.mysearch)
* [square](#interfaces.square-1)


### Functions

* [createClock](#interfaces.createclock)



---



# Interface: ClockConstructor


## Constructors
<a id="interfaces.clockconstructor.constructor"></a>


### ⊕ **new ClockConstructor**(hour: *`number`*, minute: *`number`*): [ClockInterface](#interface-clockinterface)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| hour | `number` | - |
| minute | `number` | - |





**Returns:** [ClockInterface](#interface-clockinterface)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Interface: ClockInterface


## Properties

| Name  | Type                
| ------ | ------------------- 
| currentTime | `Date`
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----




## Methods
<a id="interfaces.clockinterface.settime"></a>

###  setTime

► **setTime**(d: *`Date`*): `any`







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| d | `Date` | - |





**Returns:** `any`





___

<a id="interfaces.clockinterface.tick"></a>

###  tick

► **tick**(): `any`









**Returns:** `any`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Interface: Shape

## Hierarchy

**Shape**

↳  [Square](#interface-square)









## Properties

| Name  | Type                
| ------ | ------------------- 
| color | `string`
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----








# Interface: Square

## Hierarchy


 [Shape](#interface-shape)

**↳ Square**








## Properties

| Name  | Type                
| ------ | ------------------- 
| color | `string`
| sideLength | `number`
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----








# Interface: SquareConfig


## Properties

| Name  | Type                
| ------ | ------------------- 
| color | `string`
| width | `number`
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----








# Interface: StringArray

## Indexable

\[index: `number`\]:&nbsp;`string`





# Interface: Surface


## Properties

| Name  | Type                
| ------ | ------------------- 
| diffuse | function (pos: *[Vector](#class-vector)*): [Color](#class-color)
| reflect | function (pos: *[Vector](#class-vector)*): `number`
| roughness | `number`
| specular | function (pos: *[Vector](#class-vector)*): [Color](#class-color)
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----






## Type aliases
<a id="interfaces.searchfunc"></a>

###  SearchFunc

** SearchFunc**:  *function* 



#### Type declaration
(source: *`string`*, subString: *`string`*): `boolean`





**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source | `string` | - |
| subString | `string` | - |





**Returns:** `boolean`






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Variables
<a id="interfaces.mysearch"></a>

###  mySearch

**●  mySearch**:  *[SearchFunc](#interfaces.searchfunc)* 






___

<a id="interfaces.square-1"></a>

###  square

**●  square**:  *[Square](#interface-square)*  =  {} as Square






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Functions
<a id="interfaces.createclock"></a>

###  createClock

► **createClock**(ctor: *[ClockConstructor](#interface-clockconstructor)*, hour: *`number`*, minute: *`number`*): [ClockInterface](#interface-clockinterface)







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ctor | [ClockConstructor](#interface-clockconstructor) | - |
| hour | `number` | - |
| minute | `number` | - |





**Returns:** [ClockInterface](#interface-clockinterface)





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Module: moduleFunction


This is the module extending the function moduleFunction().

## Callable
► **moduleFunction**(arg: *`string`*): `string`







This is a function that is extended by a module.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| arg | `string` | An argument. |





**Returns:** `string`




## Index

### Variables

* [functionVariable](#modulefunction.functionvariable)


### Functions

* [append](#modulefunction.append)
* [prepend](#modulefunction.prepend)



---
## Variables
<a id="modulefunction.functionvariable"></a>

###  functionVariable

**●  functionVariable**:  *`string`* 




This variable is appended to a function.




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Functions
<a id="modulefunction.append"></a>

###  append

► **append**(): `void`







This function is appended to another function.




**Returns:** `void`





___

<a id="modulefunction.prepend"></a>

###  prepend

► **prepend**(): `void`







This function is appended to another function.




**Returns:** `void`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---






# Class: BaseClass


This is a simple base class.

This is a simple example on how to use BaseClass.

![My image alt text](media/logo-128.png)


## Hierarchy

**BaseClass**

↳  [SubClassA](#class-subclassa)




↳  [SubClassB](#class-subclassb)








## Implements

* [INameInterface](#interface-inameinterface)

## Index

### Constructors

* [constructor](#baseclass.constructor)


### Properties

* [internalClass](#baseclass.internalclass)
* [kind](#baseclass.kind)
* [name](#baseclass.name-1)
* [instance](#baseclass.instance)
* [instances](#baseclass.instances)


### Methods

* [arrowFunction](#baseclass.arrowfunction)
* [checkName](#baseclass.checkname)
* [getName](#baseclass.getname)
* [setName](#baseclass.setname)
* [caTest](#baseclass.catest)
* [getInstance](#baseclass.getinstance)
* [getName](#baseclass.getname-2)



---
## Constructors
<a id="baseclass.constructor"></a>


### ⊕ **new BaseClass**(name: *`string`*): [BaseClass](#class-baseclass)


### ⊕ **new BaseClass**(source: *[BaseClass](#class-baseclass)*): [BaseClass](#class-baseclass)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [BaseClass](#class-baseclass)





**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source | [BaseClass](#class-baseclass) | - |





**Returns:** [BaseClass](#class-baseclass)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="baseclass.internalclass"></a>

### «Private» internalClass

**●  internalClass**:  *[InternalClass](#class-internalclass)* 




This is an instance member of an internal class.




___

<a id="baseclass.kind"></a>

### «Protected» kind

**●  kind**:  *`number`* 




This is a simple protected member.




___

<a id="baseclass.name-1"></a>

###  name

**●  name**:  *`string`* 




This is a simple public member.




___

<a id="baseclass.instance"></a>

### «Static»«Private» instance

**●  instance**:  *[BaseClass](#class-baseclass)* 




This is a static member.

Static members should not be inherited.





___

<a id="baseclass.instances"></a>

### «Static»«Private» instances

**●  instances**:  *[BaseClass](#class-baseclass)[]* 






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="baseclass.arrowfunction"></a>

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

<a id="baseclass.checkname"></a>

### «Private» checkName

► **checkName**(): `boolean`







This is a private function.




**Returns:** `boolean`





___

<a id="baseclass.getname"></a>

###  getName

► **getName**(): `string`







This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___

<a id="baseclass.setname"></a>

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

<a id="baseclass.catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](#class-baseclass)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`






**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| originalValues | [BaseClass](#class-baseclass) | - |
| newRecord | `any` | - |
| fieldNames | `string`[] | - |
| mandatoryFields | `string`[] | - |





**Returns:** `string`





___

<a id="baseclass.getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](#class-baseclass)







This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](#class-baseclass)
An instance of BaseClass.






___

<a id="baseclass.getname-2"></a>

### «Static» getName

► **getName**(): `string`







This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: Color

## Index

### Constructors

* [constructor](#color.constructor)


### Properties

* [b](#color.b-1)
* [g](#color.g-1)
* [r](#color.r-1)
* [background](#color.background)
* [black](#color.black)
* [defaultColor](#color.defaultcolor)
* [grey](#color.grey)
* [white](#color.white)


### Methods

* [plus](#color.plus)
* [scale](#color.scale)
* [times](#color.times)
* [toDrawingColor](#color.todrawingcolor)



---
## Constructors
<a id="color.constructor"></a>


### ⊕ **new Color**(r: *`number`*, g: *`number`*, b: *`number`*): [Color](#class-color)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| r | `number` | - |
| g | `number` | - |
| b | `number` | - |





**Returns:** [Color](#class-color)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="color.b-1"></a>

###  b

**●  b**:  *`number`* 






___

<a id="color.g-1"></a>

###  g

**●  g**:  *`number`* 






___

<a id="color.r-1"></a>

###  r

**●  r**:  *`number`* 






___

<a id="color.background"></a>

### «Static» background

**●  background**:  *[Color](#class-color)*  =  Color.black






___

<a id="color.black"></a>

### «Static» black

**●  black**:  *[Color](#class-color)*  =  new Color(0.0, 0.0, 0.0)






___

<a id="color.defaultcolor"></a>

### «Static» defaultColor

**●  defaultColor**:  *[Color](#class-color)*  =  Color.black






___

<a id="color.grey"></a>

### «Static» grey

**●  grey**:  *[Color](#class-color)*  =  new Color(0.5, 0.5, 0.5)






___

<a id="color.white"></a>

### «Static» white

**●  white**:  *[Color](#class-color)*  =  new Color(1.0, 1.0, 1.0)






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="color.plus"></a>

### «Static» plus

► **plus**(v1: *[Color](#class-color)*, v2: *[Color](#class-color)*): [Color](#class-color)







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1 | [Color](#class-color) | - |
| v2 | [Color](#class-color) | - |





**Returns:** [Color](#class-color)





___

<a id="color.scale"></a>

### «Static» scale

► **scale**(k: *`number`*, v: *[Color](#class-color)*): [Color](#class-color)







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| k | `number` | - |
| v | [Color](#class-color) | - |





**Returns:** [Color](#class-color)





___

<a id="color.times"></a>

### «Static» times

► **times**(v1: *[Color](#class-color)*, v2: *[Color](#class-color)*): [Color](#class-color)







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1 | [Color](#class-color) | - |
| v2 | [Color](#class-color) | - |





**Returns:** [Color](#class-color)





___

<a id="color.todrawingcolor"></a>

### «Static» toDrawingColor

► **toDrawingColor**(c: *[Color](#class-color)*): object







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| c | [Color](#class-color) | - |





**Returns:** object





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: Employee

## Hierarchy


 [Person](#class-person)

**↳ Employee**







## Index

### Constructors

* [constructor](#employee.constructor)


### Properties

* [department](#employee.department-1)
* [name](#employee.name-1)


### Methods

* [getElevatorPitch](#employee.getelevatorpitch)
* [getPrivateDetails](#employee.getprivatedetails)



---
## Constructors
<a id="employee.constructor"></a>


### ⊕ **new Employee**(name: *`string`*, department: *`string`*): [Employee](#class-employee)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |
| department | `string` | - |





**Returns:** [Employee](#class-employee)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="employee.department-1"></a>

### «Private» department

**●  department**:  *`string`* 






___

<a id="employee.name-1"></a>

### «Protected» name

**●  name**:  *`string`* 






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="employee.getelevatorpitch"></a>

###  getElevatorPitch

► **getElevatorPitch**(): `string`









**Returns:** `string`





___

<a id="employee.getprivatedetails"></a>

### «Private» getPrivateDetails

► **getPrivateDetails**(): `string`









**Returns:** `string`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: GenericClass


This is a generic class.

## Type parameters
#### T :  [BaseClass](#class-baseclass)

This a type parameter.


## Hierarchy

**GenericClass**

↳  [NonGenericClass](#class-nongenericclass)








## Index

### Constructors

* [constructor](#genericclass.constructor)


### Properties

* [p2](#genericclass.p2-1)
* [p3](#genericclass.p3-1)
* [p4](#genericclass.p4-1)
* [value](#genericclass.value)


### Methods

* [getValue](#genericclass.getvalue)
* [setValue](#genericclass.setvalue)



---
## Constructors
<a id="genericclass.constructor"></a>


### ⊕ **new GenericClass**(p1: *`any`*, p2: *`T`*, p3: *`number`*, p4: *`number`*): [GenericClass](#class-genericclass)






Constructor short text.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| p1 | `any` | Constructor param |
| p2 | `T` | Private string property |
| p3 | `number` | Public number property |
| p4 | `number` | Public implicit any property |





**Returns:** [GenericClass](#class-genericclass)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="genericclass.p2-1"></a>

### «Protected» p2

**●  p2**:  *`T`* 




Private string property




___

<a id="genericclass.p3-1"></a>

###  p3

**●  p3**:  *`number`* 




Public number property




___

<a id="genericclass.p4-1"></a>

### «Private» p4

**●  p4**:  *`number`* 




Public implicit any property





___

<a id="genericclass.value"></a>

###  value

**●  value**:  *`T`* 






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="genericclass.getvalue"></a>

###  getValue

► **getValue**(): `T`









**Returns:** `T`





___

<a id="genericclass.setvalue"></a>

###  setValue

► **setValue**(value: *`T`*): `void`








**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `T` | [[getValue]] is the counterpart. |





**Returns:** `void`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: Greeter

## Index

### Constructors

* [constructor](#greeter.constructor)


### Properties

* [greeting](#greeter.greeting)


### Methods

* [greet](#greeter.greet)



---
## Constructors
<a id="greeter.constructor"></a>


### ⊕ **new Greeter**(message: *`string`*): [Greeter](#class-greeter)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| message | `string` | - |





**Returns:** [Greeter](#class-greeter)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="greeter.greeting"></a>

###  greeting

**●  greeting**:  *`string`* 






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="greeter.greet"></a>

###  greet

► **greet**(): `string`









**Returns:** `string`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: InternalClass


This is an internal class, it is not exported.

## Index

### Constructors

* [constructor](#internalclass.constructor)



---
## Constructors
<a id="internalclass.constructor"></a>


### ⊕ **new InternalClass**(options: *object*): [InternalClass](#class-internalclass)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| options | object | - |





**Returns:** [InternalClass](#class-internalclass)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: NonGenericClass


This a non generic class derived from a [[GenericClass|generic class]].

## Hierarchy


 [GenericClass](#class-genericclass)[SubClassB](#class-subclassb)

**↳ NonGenericClass**







## Index

### Constructors

* [constructor](#nongenericclass.constructor)


### Properties

* [p2](#nongenericclass.p2-1)
* [p3](#nongenericclass.p3-1)
* [value](#nongenericclass.value)


### Methods

* [getValue](#nongenericclass.getvalue)
* [setValue](#nongenericclass.setvalue)



---
## Constructors
<a id="nongenericclass.constructor"></a>


### ⊕ **new NonGenericClass**(p1: *`any`*, p2: *[SubClassB](#class-subclassb)*, p3: *`number`*, p4: *`number`*): [NonGenericClass](#class-nongenericclass)






Constructor short text.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| p1 | `any` | Constructor param |
| p2 | [SubClassB](#class-subclassb) | Private string property |
| p3 | `number` | Public number property |
| p4 | `number` | Public implicit any property |





**Returns:** [NonGenericClass](#class-nongenericclass)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="nongenericclass.p2-1"></a>

### «Protected» p2

**●  p2**:  *[SubClassB](#class-subclassb)* 




Private string property




___

<a id="nongenericclass.p3-1"></a>

###  p3

**●  p3**:  *`number`* 




Public number property




___

<a id="nongenericclass.value"></a>

###  value

**●  value**:  *[SubClassB](#class-subclassb)* 






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="nongenericclass.getvalue"></a>

###  getValue

► **getValue**(): [SubClassB](#class-subclassb)









**Returns:** [SubClassB](#class-subclassb)





___

<a id="nongenericclass.setvalue"></a>

###  setValue

► **setValue**(value: *[SubClassB](#class-subclassb)*): `void`








**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | [SubClassB](#class-subclassb) | [[getValue]] is the counterpart. |





**Returns:** `void`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: Person

## Hierarchy

**Person**

↳  [Employee](#class-employee)








## Index

### Constructors

* [constructor](#person.constructor)


### Properties

* [name](#person.name-1)



---
## Constructors
<a id="person.constructor"></a>


### ⊕ **new Person**(name: *`string`*): [Person](#class-person)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [Person](#class-person)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="person.name-1"></a>

### «Protected» name

**●  name**:  *`string`* 






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: SubClassA


This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited
from BaseClass.


## Hierarchy


 [BaseClass](#class-baseclass)

**↳ SubClassA**







## Implements

* [INameInterface](#interface-inameinterface)
* [IPrintNameInterface](#interface-iprintnameinterface)

## Index

### Constructors

* [constructor](#subclassa.constructor)


### Properties

* [kind](#subclassa.kind)
* [name](#subclassa.name-1)


### Accessors

* [nameProperty](#subclassa.nameproperty)
* [readOnlyNameProperty](#subclassa.readonlynameproperty)
* [writeOnlyNameProperty](#subclassa.writeonlynameproperty)


### Methods

* [arrowFunction](#subclassa.arrowfunction)
* [getName](#subclassa.getname)
* [print](#subclassa.print)
* [printName](#subclassa.printname)
* [setName](#subclassa.setname)
* [caTest](#subclassa.catest)
* [getInstance](#subclassa.getinstance)
* [getName](#subclassa.getname-2)



---
## Constructors
<a id="subclassa.constructor"></a>


### ⊕ **new SubClassA**(name: *`string`*): [SubClassA](#class-subclassa)


### ⊕ **new SubClassA**(source: *[BaseClass](#class-baseclass)*): [SubClassA](#class-subclassa)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [SubClassA](#class-subclassa)





**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source | [BaseClass](#class-baseclass) | - |





**Returns:** [SubClassA](#class-subclassa)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="subclassa.kind"></a>

### «Protected» kind

**●  kind**:  *`number`* 




This is a simple protected member.




___

<a id="subclassa.name-1"></a>

###  name

**●  name**:  *`string`* 




This is a simple public member.




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Accessors
<a id="subclassa.nameproperty"></a>

###  nameProperty


getnameProperty(): `string`setnameProperty(value: *`string`*): `void`





Returns the name. See [[BaseClass.name]].




**Returns:** `string`
The return value.






Sets the name. See [[BaseClass.name]].


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The new name. |





**Returns:** `void`
The return value.




___

<a id="subclassa.readonlynameproperty"></a>

###  readOnlyNameProperty


getreadOnlyNameProperty(): `string`





Returns the name. See [[BaseClass.name]].




**Returns:** `string`
The return value.




___

<a id="subclassa.writeonlynameproperty"></a>

###  writeOnlyNameProperty


setwriteOnlyNameProperty(value: *`string`*): `void`





Sets the name. See [[BaseClass.name]].


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The new name. |





**Returns:** `void`
The return value.




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="subclassa.arrowfunction"></a>

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

<a id="subclassa.getname"></a>

###  getName

► **getName**(): `string`







This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___

<a id="subclassa.print"></a>

###  print

► **print**(value: *`string`*): `void`







This is a simple interface function.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | - |





**Returns:** `void`





___

<a id="subclassa.printname"></a>

###  printName

► **printName**(): `void`







This is a interface function of IPrintNameInterface




**Returns:** `void`





___

<a id="subclassa.setname"></a>

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

<a id="subclassa.catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](#class-baseclass)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`






**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| originalValues | [BaseClass](#class-baseclass) | - |
| newRecord | `any` | - |
| fieldNames | `string`[] | - |
| mandatoryFields | `string`[] | - |





**Returns:** `string`





___

<a id="subclassa.getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](#class-baseclass)







This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](#class-baseclass)
An instance of BaseClass.






___

<a id="subclassa.getname-2"></a>

### «Static» getName

► **getName**(): `string`







This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: SubClassB


This is a class that extends another class.

The constructor of the original class should be overwritten.


## Hierarchy


 [BaseClass](#class-baseclass)

**↳ SubClassB**







## Implements

* [INameInterface](#interface-inameinterface)

## Index

### Constructors

* [constructor](#subclassb.constructor)


### Properties

* [kind](#subclassb.kind)
* [name](#subclassb.name-1)


### Methods

* [arrowFunction](#subclassb.arrowfunction)
* [doSomething](#subclassb.dosomething)
* [getName](#subclassb.getname)
* [setName](#subclassb.setname)
* [caTest](#subclassb.catest)
* [getInstance](#subclassb.getinstance)
* [getName](#subclassb.getname-2)



---
## Constructors
<a id="subclassb.constructor"></a>


### ⊕ **new SubClassB**(name: *`string`*): [SubClassB](#class-subclassb)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [SubClassB](#class-subclassb)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="subclassb.kind"></a>

### «Protected» kind

**●  kind**:  *`number`* 




This is a simple protected member.




___

<a id="subclassb.name-1"></a>

###  name

**●  name**:  *`string`* 




This is a simple public member.




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="subclassb.arrowfunction"></a>

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

<a id="subclassb.dosomething"></a>

###  doSomething

► **doSomething**(value: *[`string`,[SubClassA](#class-subclassa),[SubClassB](#class-subclassb)]*): `void`







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | [`string`,[SubClassA](#class-subclassa),[SubClassB](#class-subclassb)] | - |





**Returns:** `void`





___

<a id="subclassb.getname"></a>

###  getName

► **getName**(): `string`







This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___

<a id="subclassb.setname"></a>

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

<a id="subclassb.catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](#class-baseclass)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`






**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| originalValues | [BaseClass](#class-baseclass) | - |
| newRecord | `any` | - |
| fieldNames | `string`[] | - |
| mandatoryFields | `string`[] | - |





**Returns:** `string`





___

<a id="subclassb.getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](#class-baseclass)







This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](#class-baseclass)
An instance of BaseClass.






___

<a id="subclassb.getname-2"></a>

### «Static» getName

► **getName**(): `string`







This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: Vector

## Index

### Constructors

* [constructor](#vector.constructor)


### Properties

* [x](#vector.x-1)
* [y](#vector.y-1)
* [z](#vector.z-1)


### Methods

* [cross](#vector.cross)
* [dot](#vector.dot)
* [mag](#vector.mag)
* [minus](#vector.minus)
* [norm](#vector.norm)
* [plus](#vector.plus)
* [times](#vector.times)



---
## Constructors
<a id="vector.constructor"></a>


### ⊕ **new Vector**(x: *`number`*, y: *`number`*, z: *`number`*): [Vector](#class-vector)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| x | `number` | - |
| y | `number` | - |
| z | `number` | - |





**Returns:** [Vector](#class-vector)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="vector.x-1"></a>

###  x

**●  x**:  *`number`* 






___

<a id="vector.y-1"></a>

###  y

**●  y**:  *`number`* 






___

<a id="vector.z-1"></a>

###  z

**●  z**:  *`number`* 






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="vector.cross"></a>

### «Static» cross

► **cross**(v1: *[Vector](#class-vector)*, v2: *[Vector](#class-vector)*): [Vector](#class-vector)







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1 | [Vector](#class-vector) | - |
| v2 | [Vector](#class-vector) | - |





**Returns:** [Vector](#class-vector)





___

<a id="vector.dot"></a>

### «Static» dot

► **dot**(v1: *[Vector](#class-vector)*, v2: *[Vector](#class-vector)*): `number`







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1 | [Vector](#class-vector) | - |
| v2 | [Vector](#class-vector) | - |





**Returns:** `number`





___

<a id="vector.mag"></a>

### «Static» mag

► **mag**(v: *[Vector](#class-vector)*): `number`







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v | [Vector](#class-vector) | - |





**Returns:** `number`





___

<a id="vector.minus"></a>

### «Static» minus

► **minus**(v1: *[Vector](#class-vector)*, v2: *[Vector](#class-vector)*): [Vector](#class-vector)







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1 | [Vector](#class-vector) | - |
| v2 | [Vector](#class-vector) | - |





**Returns:** [Vector](#class-vector)





___

<a id="vector.norm"></a>

### «Static» norm

► **norm**(v: *[Vector](#class-vector)*): [Vector](#class-vector)







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v | [Vector](#class-vector) | - |





**Returns:** [Vector](#class-vector)





___

<a id="vector.plus"></a>

### «Static» plus

► **plus**(v1: *[Vector](#class-vector)*, v2: *[Vector](#class-vector)*): [Vector](#class-vector)







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1 | [Vector](#class-vector) | - |
| v2 | [Vector](#class-vector) | - |





**Returns:** [Vector](#class-vector)





___

<a id="vector.times"></a>

### «Static» times

► **times**(k: *`number`*, v: *[Vector](#class-vector)*): [Vector](#class-vector)







**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| k | `number` | - |
| v | [Vector](#class-vector) | - |





**Returns:** [Vector](#class-vector)





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---



# Variables
<a id="amount"></a>

###  amount

**●  amount**:  *`number`*  = 6




This is a number type
```
const decimal: number = 6;
```




___

<a id="color"></a>

###  color

**●  color**:  *`string`*  = "blue"




This is a string type
```
const color: string = "blue";
```




___

<a id="greeter"></a>

###  greeter

**●  greeter**:  *[Greeter](#class-greeter)*  =  new Greeter('world')






___

<a id="isdone"></a>

###  isDone

**●  isDone**:  *`boolean`*  = false




This is a boolean type
```
const isDone: boolean = false;
```




___

<a id="numbers"></a>

###  numbers

**●  numbers**:  *`number`[]*  =  [1, 2, 3]




This is an array type
```
const numbers: number[] = [1, 2, 3];
```




___

<a id="privatevar"></a>

### «Private» privateVar

**●  privateVar**:  *"marked private variable"*  = "marked private variable"




Marked as private




___

<a id="publicvar"></a>

###  publicVar

**●  publicVar**:  *"public variable"*  = "public variable"






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

# Functions
<a id="createsomething"></a>

###  createSomething

► **createSomething**(): object







A function that returns an object.
Also no type information is given, the object should be correctly reflected.




**Returns:** object





___

<a id="exportedfunction"></a>

###  exportedFunction

► **exportedFunction**(): `void`







This is a simple exported function.




**Returns:** `void`





___

<a id="functionwitharguments"></a>

###  functionWithArguments

► **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](#interface-inameinterface)*): `number`







This is a function with multiple arguments and a return value.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| paramZ | `string` | This is a string parameter. |
| paramG | `any` | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA | [INameInterface](#interface-inameinterface) | This is a **parameter** pointing to an interface. |





**Returns:** `number`





___

<a id="functionwithdefaults"></a>

###  functionWithDefaults

► **functionWithDefaults**(valueA?: *`string`*, valueB?: *`number`*, valueC?: *`number`*, valueD?: *`boolean`*, valueE?: *`boolean`*): `string`







This is a function with a parameter that has a default value.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| valueA | `string` | Default value = &quot;defaultValue&quot;.- |
| valueB | `number` | Default value = 100.- |
| valueC | `number` | Default value =  Number.NaN.- |
| valueD | `boolean` | Default value = true.- |
| valueE | `boolean` | Default value = false.- |





**Returns:** `string`
The input value or the default value.






___

<a id="functionwithdoclink"></a>

###  functionWithDocLink

► **functionWithDocLink**(): `void`







See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.
Also, check out {@link http://www.google.com|Google} and
{@link https://github.com GitHub}.

Taken from http://usejsdoc.org/tags-inline-link.html.





**Returns:** `void`





___

<a id="functionwithoptionalvalue"></a>

###  functionWithOptionalValue

► **functionWithOptionalValue**(requiredParam: *`string`*, optionalParam?: *`string`*): `void`







This is a function with a parameter that is optional.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| requiredParam | `string` | A normal parameter. |
| optionalParam | `string` | An optional parameter. |





**Returns:** `void`





___

<a id="functionwithrest"></a>

###  functionWithRest

► **functionWithRest**(...rest: *`string`[]*): `string`







This is a function with rest parameter.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| rest | `string`[] | Multiple strings. |





**Returns:** `string`
The combined string.






___

<a id="genericfunction"></a>

###  genericFunction

► **genericFunction**T(value: *`T`*): `T`







This is a generic function.


**Type parameters:**

#### T 

The type parameter.

**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `T` | The typed value. |





**Returns:** `T`
Returns the typed value.






___

<a id="internalfunction"></a>

###  internalFunction

► **internalFunction**(): `void`







This is an internal function.




**Returns:** `void`





___

<a id="multiplesignatures"></a>

###  multipleSignatures

► **multipleSignatures**(value: *`string`*): `string`

► **multipleSignatures**(value: *object*): `string`







This is the first signature of a function with multiple signatures.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The name value. |





**Returns:** `string`







This is the second signature of a function with multiple signatures.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | object | An object containing the name value. |





**Returns:** `string`





___

<a id="privatefunction"></a>

### «Private» privateFunction

► **privateFunction**(): `string`







Marked as private




**Returns:** `string`





___

<a id="publicfunction"></a>

###  publicFunction

► **publicFunction**(): `string`









**Returns:** `string`





___

<a id="variablefunction"></a>

###  variableFunction

► **variableFunction**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](#interface-inameinterface)*): `number`







This is a function with multiple arguments and a return value.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| paramZ | `string` | This is a string parameter. |
| paramG | `any` | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA | [INameInterface](#interface-inameinterface) | This is a **parameter** pointing to an interface. |





**Returns:** `number`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

<a id="amixedobject"></a>

## Object literal: aMixedObject

<a id="amixedobject.somenumber"></a>

###  someNumber

**●  someNumber**:  *`number`*  = 10






___
<a id="amixedobject.somestring"></a>

###  someString

**●  someString**:  *`string`*  = "hello"






___
<a id="amixedobject.somefunction"></a>

###  someFunction

► **someFunction**(): `string`









**Returns:** `string`





___





# Interface: IApiElementType


## Properties

| Name  | Type                
| ------ | ------------------- 
| id | `number`
| plural_name | `string`
| plural_name_short | `string`
| singular_name | `string`
| singular_name_short | `string`
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----








# Interface: IApiGameEvent


## Properties

| Name  | Type                
| ------ | ------------------- 
| average_entry_score | `number`
| data_checked | `boolean`
| deadline_time | `Date`
| deadline_time_epoch | `number`
| deadline_time_formatted | `string`
| deadline_time_game_offset | `number`
| finished | `boolean`
| highest_score | `number`
| highest_scoring_entry | `number`
| id | `number`
| is_current | `boolean`
| is_next | `boolean`
| is_previous | `boolean`
| name | `string`
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----








# Interface: IApiGameFormations


## Properties

| Name  | Type                
| ------ | ------------------- 
| 1-2-5-3 | `number`[][]
| 1-3-4-3 | `number`[][]
| 1-3-5-2 | `number`[][]
| 1-4-3-3 | `number`[][]
| 1-4-4-2 | `number`[][]
| 1-4-5-1 | `number`[][]
| 1-5-2-3 | `number`[][]
| 1-5-3-2 | `number`[][]
| 1-5-4-1 | `number`[][]
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----








# Interface: IApiGameSettings


## Properties

| Name  | Type                
| ------ | ------------------- 
| element_formations | [IApiGameFormations](#interface-iapigameformations)
| game_event | [IApiGameEvent](#interface-iapigameevent)
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----








# Interface: IApiLeaguePositions


## Properties

| Name  | Type                
| ------ | ------------------- 
| entry | `number`
| entry_name | `string`
| event_total | `number`
| id | `number`
| last_rank | `number`
| league | `number`
| movement | `string`
| own_entry | `boolean`
| player_name | `string`
| rank | `number`
| rank_sort | `number`
| start_event | `number`
| stop_event | `number`
| total | `number`
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----








# Interface: INameInterface


This is a simple interface.

## Hierarchy

**INameInterface**

↳  [IPrintNameInterface](#interface-iprintnameinterface)








## Implemented by

* [BaseClass](#class-baseclass)
* [SubClassA](#class-subclassa)
* [SubClassB](#class-subclassb)


## Properties

| Name  | Type                
| ------ | ------------------- 
| name | `string`
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----




## Methods
<a id="inameinterface.getname"></a>

###  getName

► **getName**(): `string`







This is a interface function of INameInterface.

It should be inherited by all subinterfaces.





**Returns:** `string`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Interface: IPrintInterface


This is a simple interface.

## Hierarchy

**IPrintInterface**

↳  [IPrintNameInterface](#interface-iprintnameinterface)









## Methods
<a id="iprintinterface.print"></a>

###  print

► **print**(value: *`string`*): `void`







This is a interface function of IPrintInterface

It should be inherited by all subinterfaces.



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | - |





**Returns:** `void`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Interface: IPrintNameInterface


This is a interface inheriting from two other interfaces.

## Hierarchy


 [INameInterface](#interface-inameinterface)




 [IPrintInterface](#interface-iprintinterface)

**↳ IPrintNameInterface**







## Implemented by

* [SubClassA](#class-subclassa)


## Properties

| Name  | Type                
| ------ | ------------------- 
| name | `string`
----


↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

----




## Methods
<a id="iprintnameinterface.getname"></a>

###  getName

► **getName**(): `string`







This is a interface function of INameInterface.

It should be inherited by all subinterfaces.





**Returns:** `string`





___

<a id="iprintnameinterface.print"></a>

###  print

► **print**(value: *`string`*): `void`







This is a interface function of IPrintInterface

It should be inherited by all subinterfaces.



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | - |





**Returns:** `void`





___

<a id="iprintnameinterface.printname"></a>

###  printName

► **printName**(): `void`







This is a interface function of IPrintNameInterface




**Returns:** `void`





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---



