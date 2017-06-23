


<span id="typedoc-plugin-markdown"></span>

#  Typedoc Plugin Markdown API

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

* [INameInterface](#interface-inameinterface)
* [IPrintInterface](#interface-iprintinterface)
* [IPrintNameInterface](#interface-iprintnameinterface)






# Module: Enums

## Index

### Enumerations

* [Direction](#enumeration-direction)
* [FileAccess](#enumeration-fileaccess)






# Enumeration: Direction

## Index

### Enumeration members

* [Down](#enums.direction.down)
* [Left](#enums.direction.left)
* [Right](#enums.direction.right)
* [Up](#enums.direction.up)



## Enumeration members
<a id="enums.direction.down"></a>

###  Down

**Down**:   

*Defined in [enums.ts:5](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L5)*




___

<a id="enums.direction.left"></a>

###  Left

**Left**:   

*Defined in [enums.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L6)*




___

<a id="enums.direction.right"></a>

###  Right

**Right**:   

*Defined in [enums.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L7)*




___

<a id="enums.direction.up"></a>

###  Up

**Up**:    = 1

*Defined in [enums.ts:4](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L4)*




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



## Enumeration members
<a id="enums.fileaccess.g"></a>

###  G

**G**:    =  '123'.length

*Defined in [enums.ts:17](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L17)*




___

<a id="enums.fileaccess.none"></a>

###  None

**None**:   

*Defined in [enums.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L12)*




___

<a id="enums.fileaccess.read"></a>

###  Read

**Read**:    =  1 << 1

*Defined in [enums.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L13)*




___

<a id="enums.fileaccess.readwrite"></a>

###  ReadWrite

**ReadWrite**:    =  Read | Write

*Defined in [enums.ts:15](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L15)*




___

<a id="enums.fileaccess.write"></a>

###  Write

**Write**:    =  1 << 2

*Defined in [enums.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L14)*




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






# Interface: ClockConstructor


## Constructors
<a id="interfaces.clockconstructor.constructor"></a>


### ⊕ **new ClockConstructor**(hour: *number*, minute: *number*): [ClockInterface](#interface-clockinterface)


*Defined in [interfaces.ts:78](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L78)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| hour  | number | - | - |
| minute  | number | - | - |





**Returns:** [ClockInterface](#interface-clockinterface)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: ClockInterface


## Properties

| Name  | Type                
| ------ | ------------------- 
| currentTime | Date
## Methods
<a id="interfaces.clockinterface.settime"></a>

###  setTime

► **setTime**(d: *Date*): any



*Defined in [interfaces.ts:75](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L75)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| d  | Date | - | - |





**Returns:** any





___

<a id="interfaces.clockinterface.tick"></a>

###  tick

► **tick**(): any



*Defined in [interfaces.ts:82](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L82)*



**Returns:** any





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Shape

## Hierarchy

**Shape**

↳  [Square](#interface-square)









## Properties

| Name  | Type                
| ------ | ------------------- 
| color | string
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Square

## Hierarchy


 [Shape](#interface-shape)

**↳ Square**








## Properties

| Name  | Type                
| ------ | ------------------- 
| color | string
| sideLength | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: SquareConfig


## Properties

| Name  | Type                
| ------ | ------------------- 
| color | string
| width | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: StringArray

## Indexable

\[index: number\]:&nbsp;string
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Surface


## Properties

| Name  | Type                
| ------ | ------------------- 
| diffuse | function (pos: *[Vector](#class-vector)*): [Color](#class-color)
| reflect | function (pos: *[Vector](#class-vector)*): number
| roughness | number
| specular | function (pos: *[Vector](#class-vector)*): [Color](#class-color)
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)



## Type aliases
<a id="interfaces.searchfunc"></a>

###  SearchFunc

**SearchFunc**:  *function* 

*Defined in [interfaces.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L61)*

#### Type declaration
(source: *string*, subString: *string*): boolean


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | string | - | - |
| subString  | string | - | - |





**Returns:** boolean






___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Variables
<a id="interfaces.mysearch"></a>

###  mySearch

**mySearch**:  *[SearchFunc](#interfaces.searchfunc)* 

*Defined in [interfaces.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L63)*




___

<a id="interfaces.square-1"></a>

###  square

**square**:  *[Square](#interface-square)*  =  {} as Square

*Defined in [interfaces.ts:97](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L97)*




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Functions
<a id="interfaces.createclock"></a>

###  createClock

► **createClock**(ctor: *[ClockConstructor](#interface-clockconstructor)*, hour: *number*, minute: *number*): [ClockInterface](#interface-clockinterface)



*Defined in [interfaces.ts:85](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L85)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| ctor  | [ClockConstructor](#interface-clockconstructor) | - | - |
| hour  | number | - | - |
| minute  | number | - | - |





**Returns:** [ClockInterface](#interface-clockinterface)





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Module: moduleFunction


This is the module extending the function moduleFunction().

## Callable
► **moduleFunction**(arg: *string*): string



*Defined in [functions.ts:130](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L130)*

This is a function that is extended by a module.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| arg  | string | - | An argument. |





**Returns:** string




## Index

### Variables

* [functionVariable](#modulefunction.functionvariable)


### Functions

* [append](#modulefunction.append)
* [prepend](#modulefunction.prepend)



## Variables
<a id="modulefunction.functionvariable"></a>

###  functionVariable

**functionVariable**:  *string* 

*Defined in [functions.ts:140](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L140)*


This variable is appended to a function.




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Functions
<a id="modulefunction.append"></a>

###  append

► **append**(): void



*Defined in [functions.ts:145](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L145)*

This function is appended to another function.




**Returns:** void





___

<a id="modulefunction.prepend"></a>

###  prepend

► **prepend**(): void



*Defined in [functions.ts:152](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L152)*

This function is appended to another function.




**Returns:** void





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---






# Class: BaseClass


This is a simple base class.

[[include:class-example.md]]


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



## Constructors
<a id="baseclass.constructor"></a>


### ⊕ **new BaseClass**(name: *string*): [BaseClass](#class-baseclass)


### ⊕ **new BaseClass**(source: *[BaseClass](#class-baseclass)*): [BaseClass](#class-baseclass)


*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [BaseClass](#class-baseclass)

*Defined in [classes.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L72)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | [BaseClass](#class-baseclass) | - | - |





**Returns:** [BaseClass](#class-baseclass)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="baseclass.internalclass"></a>

### «Private» internalClass

**internalClass**:  *[InternalClass](#class-internalclass)* 

*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*


This is an instance member of an internal class.




___

<a id="baseclass.kind"></a>

### «Protected» kind

**kind**:  *number* 

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*


This is a simple protected member.




___

<a id="baseclass.name-1"></a>

###  name

**name**:  *string* 

*Implementation of [INameInterface](#interface-inameinterface).[name](#inameinterface.name)*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*


This is a simple public member.




___

<a id="baseclass.instance"></a>

### «Static»«Private» instance

**instance**:  *[BaseClass](#class-baseclass)* 

*Defined in [classes.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L55)*


This is a static member.

Static members should not be inherited.





___

<a id="baseclass.instances"></a>

### «Static»«Private» instances

**instances**:  *[BaseClass](#class-baseclass)[]* 

*Defined in [classes.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L56)*




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="baseclass.arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *string*, param1: *number*): void



*Defined in [classes.ts:129](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L129)*

This is a simple fat arrow function.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| param2  | string | - | The second parameter needed by this function. |
| param1  | number | - | The first parameter needed by this function. |





**Returns:** void





___

<a id="baseclass.checkname"></a>

### «Private» checkName

► **checkName**(): boolean



*Defined in [classes.ts:135](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L135)*

This is a private function.




**Returns:** boolean





___

<a id="baseclass.getname"></a>

###  getName

► **getName**(): string



*Implementation of [INameInterface](#interface-inameinterface).[getName](#inameinterface.getname)*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** string
Return the name.






___

<a id="baseclass.setname"></a>

###  setName

► **setName**(name: *string*): void



*Defined in [classes.ts:117](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L117)*

This is a simple member function.

It should be inherited by all subclasses.



**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | The new name. |





**Returns:** void





___

<a id="baseclass.catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](#class-baseclass)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string



*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*
**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| originalValues  | [BaseClass](#class-baseclass) | - | - |
| newRecord  | any | - | - |
| fieldNames  | string[] | - | - |
| mandatoryFields  | string[] | - | - |





**Returns:** string





___

<a id="baseclass.getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](#class-baseclass)



*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*

This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](#class-baseclass)
An instance of BaseClass.






___

<a id="baseclass.getname-2"></a>

### «Static» getName

► **getName**(): string



*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*

This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** string
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



## Constructors
<a id="color.constructor"></a>


### ⊕ **new Color**(r: *number*, g: *number*, b: *number*): [Color](#class-color)


*Defined in [interfaces.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L23)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| r  | number | - | - |
| g  | number | - | - |
| b  | number | - | - |





**Returns:** [Color](#class-color)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="color.b-1"></a>

###  b

**b**:  *number* 

*Defined in [interfaces.ts:26](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L26)*




___

<a id="color.g-1"></a>

###  g

**g**:  *number* 

*Defined in [interfaces.ts:25](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L25)*




___

<a id="color.r-1"></a>

###  r

**r**:  *number* 

*Defined in [interfaces.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L24)*




___

<a id="color.background"></a>

### «Static» background

**background**:  *[Color](#class-color)*  =  Color.black

*Defined in [interfaces.ts:34](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L34)*




___

<a id="color.black"></a>

### «Static» black

**black**:  *[Color](#class-color)*  =  new Color(0.0, 0.0, 0.0)

*Defined in [interfaces.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L33)*




___

<a id="color.defaultcolor"></a>

### «Static» defaultColor

**defaultColor**:  *[Color](#class-color)*  =  Color.black

*Defined in [interfaces.ts:35](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L35)*




___

<a id="color.grey"></a>

### «Static» grey

**grey**:  *[Color](#class-color)*  =  new Color(0.5, 0.5, 0.5)

*Defined in [interfaces.ts:32](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L32)*




___

<a id="color.white"></a>

### «Static» white

**white**:  *[Color](#class-color)*  =  new Color(1.0, 1.0, 1.0)

*Defined in [interfaces.ts:31](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L31)*




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="color.plus"></a>

### «Static» plus

► **plus**(v1: *[Color](#class-color)*, v2: *[Color](#class-color)*): [Color](#class-color)



*Defined in [interfaces.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L29)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v1  | [Color](#class-color) | - | - |
| v2  | [Color](#class-color) | - | - |





**Returns:** [Color](#class-color)





___

<a id="color.scale"></a>

### «Static» scale

► **scale**(k: *number*, v: *[Color](#class-color)*): [Color](#class-color)



*Defined in [interfaces.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L28)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| k  | number | - | - |
| v  | [Color](#class-color) | - | - |





**Returns:** [Color](#class-color)





___

<a id="color.times"></a>

### «Static» times

► **times**(v1: *[Color](#class-color)*, v2: *[Color](#class-color)*): [Color](#class-color)



*Defined in [interfaces.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L30)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v1  | [Color](#class-color) | - | - |
| v2  | [Color](#class-color) | - | - |





**Returns:** [Color](#class-color)





___

<a id="color.todrawingcolor"></a>

### «Static» toDrawingColor

► **toDrawingColor**(c: *[Color](#class-color)*): object



*Defined in [interfaces.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L36)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| c  | [Color](#class-color) | - | - |





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



## Constructors
<a id="employee.constructor"></a>


### ⊕ **new Employee**(name: *string*, department: *string*): [Employee](#class-employee)


*Overrides [Person](#class-person).[constructor](#person.constructor)*

*Defined in [private-members.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L29)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |
| department  | string | - | - |





**Returns:** [Employee](#class-employee)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="employee.department-1"></a>

### «Private» department

**department**:  *string* 

*Defined in [private-members.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L29)*




___

<a id="employee.name-1"></a>

### «Protected» name

**name**:  *string* 

*Inherited from [Person](#class-person).[name](#person.name-1)*

*Defined in [private-members.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L23)*




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="employee.getelevatorpitch"></a>

###  getElevatorPitch

► **getElevatorPitch**(): string



*Defined in [private-members.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L36)*



**Returns:** string





___

<a id="employee.getprivatedetails"></a>

### «Private» getPrivateDetails

► **getPrivateDetails**(): string



*Defined in [private-members.ts:40](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L40)*



**Returns:** string





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



## Constructors
<a id="genericclass.constructor"></a>


### ⊕ **new GenericClass**(p1: *any*, p2: *T*, p3: *number*, p4: *number*): [GenericClass](#class-genericclass)


*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*

Constructor short text.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| p1  | any | - | Constructor param |
| p2  | T | - | Private string property |
| p3  | number | - | Public number property |
| p4  | number | - | Public implicit any property |





**Returns:** [GenericClass](#class-genericclass)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="genericclass.p2-1"></a>

### «Protected» p2

**p2**:  *T* 

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*


Private string property




___

<a id="genericclass.p3-1"></a>

###  p3

**p3**:  *number* 

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*


Public number property




___

<a id="genericclass.p4-1"></a>

### «Private» p4

**p4**:  *number* 

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*


Public implicit any property





___

<a id="genericclass.value"></a>

###  value

**value**:  *T* 

*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="genericclass.getvalue"></a>

###  getValue

► **getValue**(): T



*Defined in [classes.ts:274](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L274)*



**Returns:** T





___

<a id="genericclass.setvalue"></a>

###  setValue

► **setValue**(value: *T*): void



*Defined in [classes.ts:270](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L270)*


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | T | - | [[getValue]] is the counterpart. |





**Returns:** void





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



## Constructors
<a id="greeter.constructor"></a>


### ⊕ **new Greeter**(message: *string*): [Greeter](#class-greeter)


*Defined in [internal.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/internal.ts#L9)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| message  | string | - | - |





**Returns:** [Greeter](#class-greeter)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="greeter.greeting"></a>

###  greeting

**greeting**:  *string* 

*Defined in [internal.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/internal.ts#L9)*




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="greeter.greet"></a>

###  greet

► **greet**(): string



*Defined in [internal.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/internal.ts#L13)*



**Returns:** string





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---





# Class: InternalClass


This is an internal class, it is not exported.

## Index

### Constructors

* [constructor](#internalclass.constructor)



## Constructors
<a id="internalclass.constructor"></a>


### ⊕ **new InternalClass**(options: *object*): [InternalClass](#class-internalclass)


*Defined in [classes.ts:169](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L169)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| options  | object | - | - |





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



## Constructors
<a id="nongenericclass.constructor"></a>


### ⊕ **new NonGenericClass**(p1: *any*, p2: *[SubClassB](#class-subclassb)*, p3: *number*, p4: *number*): [NonGenericClass](#class-nongenericclass)


*Inherited from [GenericClass](#class-genericclass).[constructor](#genericclass.constructor)*

*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*

Constructor short text.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| p1  | any | - | Constructor param |
| p2  | [SubClassB](#class-subclassb) | - | Private string property |
| p3  | number | - | Public number property |
| p4  | number | - | Public implicit any property |





**Returns:** [NonGenericClass](#class-nongenericclass)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="nongenericclass.p2-1"></a>

### «Protected» p2

**p2**:  *[SubClassB](#class-subclassb)* 

*Inherited from [GenericClass](#class-genericclass).[p2](#genericclass.p2-1)*

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*


Private string property




___

<a id="nongenericclass.p3-1"></a>

###  p3

**p3**:  *number* 

*Inherited from [GenericClass](#class-genericclass).[p3](#genericclass.p3-1)*

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*


Public number property




___

<a id="nongenericclass.value"></a>

###  value

**value**:  *[SubClassB](#class-subclassb)* 

*Inherited from [GenericClass](#class-genericclass).[value](#genericclass.value)*

*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="nongenericclass.getvalue"></a>

###  getValue

► **getValue**(): [SubClassB](#class-subclassb)



*Inherited from [GenericClass](#class-genericclass).[getValue](#genericclass.getvalue)*

*Defined in [classes.ts:274](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L274)*



**Returns:** [SubClassB](#class-subclassb)





___

<a id="nongenericclass.setvalue"></a>

###  setValue

► **setValue**(value: *[SubClassB](#class-subclassb)*): void



*Inherited from [GenericClass](#class-genericclass).[setValue](#genericclass.setvalue)*

*Defined in [classes.ts:270](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L270)*


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | [SubClassB](#class-subclassb) | - | [[getValue]] is the counterpart. |





**Returns:** void





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



## Constructors
<a id="person.constructor"></a>


### ⊕ **new Person**(name: *string*): [Person](#class-person)


*Defined in [private-members.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L23)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [Person](#class-person)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="person.name-1"></a>

### «Protected» name

**name**:  *string* 

*Defined in [private-members.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L23)*




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



## Constructors
<a id="subclassa.constructor"></a>


### ⊕ **new SubClassA**(name: *string*): [SubClassA](#class-subclassa)


### ⊕ **new SubClassA**(source: *[BaseClass](#class-baseclass)*): [SubClassA](#class-subclassa)


*Inherited from [BaseClass](#class-baseclass).[constructor](#baseclass.constructor)*

*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [SubClassA](#class-subclassa)

*Inherited from [BaseClass](#class-baseclass).[constructor](#baseclass.constructor)*

*Defined in [classes.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L72)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | [BaseClass](#class-baseclass) | - | - |





**Returns:** [SubClassA](#class-subclassa)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="subclassa.kind"></a>

### «Protected» kind

**kind**:  *number* 

*Inherited from [BaseClass](#class-baseclass).[kind](#baseclass.kind)*

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*


This is a simple protected member.




___

<a id="subclassa.name-1"></a>

###  name

**name**:  *string* 

*Implementation of [IPrintNameInterface](#interface-iprintnameinterface).[name](#iprintnameinterface.name)*

*Inherited from [BaseClass](#class-baseclass).[name](#baseclass.name-1)*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*


This is a simple public member.




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Accessors
<a id="subclassa.nameproperty"></a>

###  nameProperty


getnameProperty(): stringsetnameProperty(value: *string*): void

*Defined in [classes.ts:199](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L199)*

Returns the name. See [[BaseClass.name]].




**Returns:** string
The return value.


*Defined in [classes.ts:209](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L209)*

Sets the name. See [[BaseClass.name]].


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | The new name. |





**Returns:** void
The return value.




___

<a id="subclassa.readonlynameproperty"></a>

###  readOnlyNameProperty


getreadOnlyNameProperty(): string

*Defined in [classes.ts:218](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L218)*

Returns the name. See [[BaseClass.name]].




**Returns:** string
The return value.




___

<a id="subclassa.writeonlynameproperty"></a>

###  writeOnlyNameProperty


setwriteOnlyNameProperty(value: *string*): void

*Defined in [classes.ts:228](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L228)*

Sets the name. See [[BaseClass.name]].


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | The new name. |





**Returns:** void
The return value.




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="subclassa.arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *string*, param1: *number*): void



*Inherited from [BaseClass](#class-baseclass).[arrowFunction](#baseclass.arrowfunction)*

*Defined in [classes.ts:129](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L129)*

This is a simple fat arrow function.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| param2  | string | - | The second parameter needed by this function. |
| param1  | number | - | The first parameter needed by this function. |





**Returns:** void





___

<a id="subclassa.getname"></a>

###  getName

► **getName**(): string



*Implementation of [IPrintNameInterface](#interface-iprintnameinterface).[getName](#iprintnameinterface.getname)*

*Inherited from [BaseClass](#class-baseclass).[getName](#baseclass.getname)*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** string
Return the name.






___

<a id="subclassa.print"></a>

###  print

► **print**(value: *string*): void



*Implementation of [IPrintNameInterface](#interface-iprintnameinterface).[print](#iprintnameinterface.print)*

*Defined in [classes.ts:185](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L185)*

This is a simple interface function.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | - |





**Returns:** void





___

<a id="subclassa.printname"></a>

###  printName

► **printName**(): void



*Implementation of [IPrintNameInterface](#interface-iprintnameinterface).[printName](#iprintnameinterface.printname)*

*Defined in [classes.ts:190](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L190)*

This is a interface function of IPrintNameInterface




**Returns:** void





___

<a id="subclassa.setname"></a>

###  setName

► **setName**(name: *string*): void



*Inherited from [BaseClass](#class-baseclass).[setName](#baseclass.setname)*

*Defined in [classes.ts:117](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L117)*

This is a simple member function.

It should be inherited by all subclasses.



**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | The new name. |





**Returns:** void





___

<a id="subclassa.catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](#class-baseclass)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string



*Inherited from [BaseClass](#class-baseclass).[caTest](#baseclass.catest)*

*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*
**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| originalValues  | [BaseClass](#class-baseclass) | - | - |
| newRecord  | any | - | - |
| fieldNames  | string[] | - | - |
| mandatoryFields  | string[] | - | - |





**Returns:** string





___

<a id="subclassa.getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](#class-baseclass)



*Inherited from [BaseClass](#class-baseclass).[getInstance](#baseclass.getinstance)*

*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*

This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](#class-baseclass)
An instance of BaseClass.






___

<a id="subclassa.getname-2"></a>

### «Static» getName

► **getName**(): string



*Inherited from [BaseClass](#class-baseclass).[getName](#baseclass.getname-2)*

*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*

This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** string
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



## Constructors
<a id="subclassb.constructor"></a>


### ⊕ **new SubClassB**(name: *string*): [SubClassB](#class-subclassb)


*Overrides [BaseClass](#class-baseclass).[constructor](#baseclass.constructor)*

*Defined in [classes.ts:238](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L238)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [SubClassB](#class-subclassb)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="subclassb.kind"></a>

### «Protected» kind

**kind**:  *number* 

*Inherited from [BaseClass](#class-baseclass).[kind](#baseclass.kind)*

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*


This is a simple protected member.




___

<a id="subclassb.name-1"></a>

###  name

**name**:  *string* 

*Implementation of [INameInterface](#interface-inameinterface).[name](#inameinterface.name)*

*Inherited from [BaseClass](#class-baseclass).[name](#baseclass.name-1)*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*


This is a simple public member.




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="subclassb.arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *string*, param1: *number*): void



*Inherited from [BaseClass](#class-baseclass).[arrowFunction](#baseclass.arrowfunction)*

*Defined in [classes.ts:129](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L129)*

This is a simple fat arrow function.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| param2  | string | - | The second parameter needed by this function. |
| param1  | number | - | The first parameter needed by this function. |





**Returns:** void





___

<a id="subclassb.dosomething"></a>

###  doSomething

► **doSomething**(value: *[string,[SubClassA](#class-subclassa),[SubClassB](#class-subclassb)]*): void



*Defined in [classes.ts:243](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L243)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | [string,[SubClassA](#class-subclassa),[SubClassB](#class-subclassb)] | - | - |





**Returns:** void





___

<a id="subclassb.getname"></a>

###  getName

► **getName**(): string



*Implementation of [INameInterface](#interface-inameinterface).[getName](#inameinterface.getname)*

*Inherited from [BaseClass](#class-baseclass).[getName](#baseclass.getname)*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** string
Return the name.






___

<a id="subclassb.setname"></a>

###  setName

► **setName**(name: *string*): void



*Inherited from [BaseClass](#class-baseclass).[setName](#baseclass.setname)*

*Defined in [classes.ts:117](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L117)*

This is a simple member function.

It should be inherited by all subclasses.



**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | The new name. |





**Returns:** void





___

<a id="subclassb.catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](#class-baseclass)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string



*Inherited from [BaseClass](#class-baseclass).[caTest](#baseclass.catest)*

*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*
**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| originalValues  | [BaseClass](#class-baseclass) | - | - |
| newRecord  | any | - | - |
| fieldNames  | string[] | - | - |
| mandatoryFields  | string[] | - | - |





**Returns:** string





___

<a id="subclassb.getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](#class-baseclass)



*Inherited from [BaseClass](#class-baseclass).[getInstance](#baseclass.getinstance)*

*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*

This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](#class-baseclass)
An instance of BaseClass.






___

<a id="subclassb.getname-2"></a>

### «Static» getName

► **getName**(): string



*Inherited from [BaseClass](#class-baseclass).[getName](#baseclass.getname-2)*

*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*

This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** string
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



## Constructors
<a id="vector.constructor"></a>


### ⊕ **new Vector**(x: *number*, y: *number*, z: *number*): [Vector](#class-vector)


*Defined in [interfaces.ts:1](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L1)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| x  | number | - | - |
| y  | number | - | - |
| z  | number | - | - |





**Returns:** [Vector](#class-vector)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Properties
<a id="vector.x-1"></a>

###  x

**x**:  *number* 

*Defined in [interfaces.ts:2](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L2)*




___

<a id="vector.y-1"></a>

###  y

**y**:  *number* 

*Defined in [interfaces.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L3)*




___

<a id="vector.z-1"></a>

###  z

**z**:  *number* 

*Defined in [interfaces.ts:4](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L4)*




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

## Methods
<a id="vector.cross"></a>

### «Static» cross

► **cross**(v1: *[Vector](#class-vector)*, v2: *[Vector](#class-vector)*): [Vector](#class-vector)



*Defined in [interfaces.ts:16](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L16)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v1  | [Vector](#class-vector) | - | - |
| v2  | [Vector](#class-vector) | - | - |





**Returns:** [Vector](#class-vector)





___

<a id="vector.dot"></a>

### «Static» dot

► **dot**(v1: *[Vector](#class-vector)*, v2: *[Vector](#class-vector)*): number



*Defined in [interfaces.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L9)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v1  | [Vector](#class-vector) | - | - |
| v2  | [Vector](#class-vector) | - | - |





**Returns:** number





___

<a id="vector.mag"></a>

### «Static» mag

► **mag**(v: *[Vector](#class-vector)*): number



*Defined in [interfaces.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L10)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v  | [Vector](#class-vector) | - | - |





**Returns:** number





___

<a id="vector.minus"></a>

### «Static» minus

► **minus**(v1: *[Vector](#class-vector)*, v2: *[Vector](#class-vector)*): [Vector](#class-vector)



*Defined in [interfaces.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L7)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v1  | [Vector](#class-vector) | - | - |
| v2  | [Vector](#class-vector) | - | - |





**Returns:** [Vector](#class-vector)





___

<a id="vector.norm"></a>

### «Static» norm

► **norm**(v: *[Vector](#class-vector)*): [Vector](#class-vector)



*Defined in [interfaces.ts:11](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L11)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v  | [Vector](#class-vector) | - | - |





**Returns:** [Vector](#class-vector)





___

<a id="vector.plus"></a>

### «Static» plus

► **plus**(v1: *[Vector](#class-vector)*, v2: *[Vector](#class-vector)*): [Vector](#class-vector)



*Defined in [interfaces.ts:8](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L8)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v1  | [Vector](#class-vector) | - | - |
| v2  | [Vector](#class-vector) | - | - |





**Returns:** [Vector](#class-vector)





___

<a id="vector.times"></a>

### «Static» times

► **times**(k: *number*, v: *[Vector](#class-vector)*): [Vector](#class-vector)



*Defined in [interfaces.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L6)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| k  | number | - | - |
| v  | [Vector](#class-vector) | - | - |





**Returns:** [Vector](#class-vector)





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---



# Variables
<a id="amount"></a>

###  amount

**amount**:  *number*  = 6

*Defined in [basic-types.ts:20](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L20)*


This is a number type
```
const decimal: number = 6;
```




___

<a id="color"></a>

###  color

**color**:  *string*  = "blue"

*Defined in [basic-types.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L28)*


This is a string type
```
const color: string = "blue";
```




___

<a id="greeter"></a>

###  greeter

**greeter**:  *[Greeter](#class-greeter)*  =  new Greeter('world')

*Defined in [internal.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/internal.ts#L18)*




___

<a id="isdone"></a>

###  isDone

**isDone**:  *boolean*  = false

*Defined in [basic-types.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L12)*


This is a boolean type
```
const isDone: boolean = false;
```




___

<a id="numbers"></a>

###  numbers

**numbers**:  *number[]*  =  [1, 2, 3]

*Defined in [basic-types.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L36)*


This is an array type
```
const numbers: number[] = [1, 2, 3];
```




___

<a id="privatevar"></a>

### «Private» privateVar

**privateVar**:  *"marked private variable"*  = "marked private variable"

*Defined in [private-members.ts:8](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L8)*


Marked as private




___

<a id="publicvar"></a>

###  publicVar

**publicVar**:  *"public variable"*  = "public variable"

*Defined in [private-members.ts:2](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L2)*




___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

# Functions
<a id="createsomething"></a>

###  createSomething

► **createSomething**(): object



*Defined in [functions.ts:161](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L161)*

A function that returns an object.
Also no type information is given, the object should be correctly reflected.




**Returns:** object





___

<a id="exportedfunction"></a>

###  exportedFunction

► **exportedFunction**(): void



*Defined in [functions.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L12)*

This is a simple exported function.




**Returns:** void





___

<a id="functionwitharguments"></a>

###  functionWithArguments

► **functionWithArguments**(paramZ: *string*, paramG: *any*, paramA: *[INameInterface](#interface-inameinterface)*): number



*Defined in [functions.ts:41](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L41)*

This is a function with multiple arguments and a return value.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| paramZ  | string | - | This is a string parameter. |
| paramG  | any | - | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA  | [INameInterface](#interface-inameinterface) | - | This is a **parameter** pointing to an interface. |





**Returns:** number





___

<a id="functionwithdefaults"></a>

###  functionWithDefaults

► **functionWithDefaults**(valueA?: *string*, valueB?: *number*, valueC?: *number*, valueD?: *boolean*, valueE?: *boolean*): string



*Defined in [functions.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L61)*

This is a function with a parameter that has a default value.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| valueA  | string | &quot;defaultValue&quot; | - |
| valueB  | number | 100 | - |
| valueC  | number |  Number.NaN | - |
| valueD  | boolean | true | - |
| valueE  | boolean | false | - |





**Returns:** string
The input value or the default value.






___

<a id="functionwithdoclink"></a>

###  functionWithDocLink

► **functionWithDocLink**(): void



*Defined in [functions.ts:176](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L176)*

See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.
Also, check out {@link http://www.google.com|Google} and
{@link https://github.com GitHub}.

Taken from http://usejsdoc.org/tags-inline-link.html.





**Returns:** void





___

<a id="functionwithoptionalvalue"></a>

###  functionWithOptionalValue

► **functionWithOptionalValue**(requiredParam: *string*, optionalParam?: *string*): void



*Defined in [functions.ts:52](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L52)*

This is a function with a parameter that is optional.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| requiredParam  | string | - | A normal parameter. |
| optionalParam  | string | - | An optional parameter. |





**Returns:** void





___

<a id="functionwithrest"></a>

###  functionWithRest

► **functionWithRest**(...rest: *string[]*): string



*Defined in [functions.ts:78](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L78)*

This is a function with rest parameter.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| rest  | string[] | - | Multiple strings. |





**Returns:** string
The combined string.






___

<a id="genericfunction"></a>

###  genericFunction

► **genericFunction**T(value: *T*): T



*Defined in [functions.ts:121](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L121)*

This is a generic function.


**Type parameters:**

#### T 

The type parameter.

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | T | - | The typed value. |





**Returns:** T
Returns the typed value.






___

<a id="internalfunction"></a>

###  internalFunction

► **internalFunction**(): void



*Defined in [functions.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L6)*

This is an internal function.




**Returns:** void





___

<a id="multiplesignatures"></a>

###  multipleSignatures

► **multipleSignatures**(value: *string*): string

► **multipleSignatures**(value: *object*): string



*Defined in [functions.ts:88](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L88)*

This is the first signature of a function with multiple signatures.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | The name value. |





**Returns:** string



*Defined in [functions.ts:96](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L96)*

This is the second signature of a function with multiple signatures.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | object | - | An object containing the name value. |





**Returns:** string





___

<a id="privatefunction"></a>

### «Private» privateFunction

► **privateFunction**(): string



*Defined in [private-members.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L18)*

Marked as private




**Returns:** string





___

<a id="publicfunction"></a>

###  publicFunction

► **publicFunction**(): string



*Defined in [private-members.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L10)*



**Returns:** string





___

<a id="variablefunction"></a>

###  variableFunction

► **variableFunction**(paramZ: *string*, paramG: *any*, paramA: *[INameInterface](#interface-inameinterface)*): number



*Defined in [functions.ts:25](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L25)*

This is a function with multiple arguments and a return value.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| paramZ  | string | - | This is a string parameter. |
| paramG  | any | - | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA  | [INameInterface](#interface-inameinterface) | - | This is a **parameter** pointing to an interface. |





**Returns:** number





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

<a id="amixedobject"></a>

## Object literal: aMixedObject

<a id="amixedobject.somenumber"></a>

###  someNumber

**someNumber**:  *number*  = 10

*Defined in [basic-types.ts:45](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L45)*




___
<a id="amixedobject.somestring"></a>

###  someString

**someString**:  *string*  = "hello"

*Defined in [basic-types.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L46)*




___
<a id="amixedobject.somefunction"></a>

###  someFunction

► **someFunction**(): string



*Defined in [basic-types.ts:42](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L42)*



**Returns:** string





___





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
| name | string
## Methods
<a id="inameinterface.getname"></a>

###  getName

► **getName**(): string



*Defined in [classes.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L18)*

This is a interface function of INameInterface.

It should be inherited by all subinterfaces.





**Returns:** string





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: IPrintInterface


This is a simple interface.

## Hierarchy

**IPrintInterface**

↳  [IPrintNameInterface](#interface-iprintnameinterface)









## Methods
<a id="iprintinterface.print"></a>

###  print

► **print**(value: *string*): void



*Defined in [classes.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L30)*

This is a interface function of IPrintInterface

It should be inherited by all subinterfaces.



**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | - |





**Returns:** void





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





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
| name | string
## Methods
<a id="iprintnameinterface.getname"></a>

###  getName

► **getName**(): string



*Inherited from [INameInterface](#interface-inameinterface).[getName](#inameinterface.getname)*

*Defined in [classes.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L18)*

This is a interface function of INameInterface.

It should be inherited by all subinterfaces.





**Returns:** string





___

<a id="iprintnameinterface.print"></a>

###  print

► **print**(value: *string*): void



*Inherited from [IPrintInterface](#interface-iprintinterface).[print](#iprintinterface.print)*

*Defined in [classes.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L30)*

This is a interface function of IPrintInterface

It should be inherited by all subinterfaces.



**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | - |





**Returns:** void





___

<a id="iprintnameinterface.printname"></a>

###  printName

► **printName**(): void



*Defined in [classes.ts:40](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L40)*

This is a interface function of IPrintNameInterface




**Returns:** void





___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)



