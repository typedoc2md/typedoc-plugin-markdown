[Typedoc Examples](../index.md) >  ["classes"](../modules/_classes_.md)>  [SubClassA](../classes/_classes_.subclassa.md)
# Class SubClassA


<p>This is a class that extends another class.</p>


<p>This class has no own constructor, so its constructor should be inherited
from BaseClass.</p>






## Hierarchy
* [BaseClass](../classes/_classes_.baseclass.md)

**SubClassA**



## Implements
* [INameInterface](../interfaces/_classes_.inameinterface.md)
* [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md)
 






## Constructors
* [constructor](../classes/_classes_.subclassa.md#constructor)

## Properties
* [kind](../classes/_classes_.subclassa.md#kind)
* [name](../classes/_classes_.subclassa.md#name)
* [instance](../classes/_classes_.subclassa.md#instance)
* [instances](../classes/_classes_.subclassa.md#instances)

## Accessors
* [nameProperty](../classes/_classes_.subclassa.md#nameproperty)
* [readOnlyNameProperty](../classes/_classes_.subclassa.md#readonlynameproperty)
* [writeOnlyNameProperty](../classes/_classes_.subclassa.md#writeonlynameproperty)

## Methods
* [arrowFunction](../classes/_classes_.subclassa.md#arrowfunction)
* [getName](../classes/_classes_.subclassa.md#getname)
* [print](../classes/_classes_.subclassa.md#print)
* [printName](../classes/_classes_.subclassa.md#printname)
* [setName](../classes/_classes_.subclassa.md#setname)
* [caTest](../classes/_classes_.subclassa.md#catest)
* [getInstance](../classes/_classes_.subclassa.md#getinstance)
* [getName](../classes/_classes_.subclassa.md#getname-1)

---




<a id="constructor"></a>
## constructor: Constructor


⊕ new SubClassA(name: *string*): [SubClassA](../classes/_classes_.subclassa.md)
⊕ new SubClassA(source: *[BaseClass](../classes/_classes_.baseclass.md)*): [SubClassA](../classes/_classes_.subclassa.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name  | string | - |



**Returns:** [SubClassA](../classes/_classes_.subclassa.md)




Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)



* Defined in [classes.ts:76](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L76)













#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source  | [BaseClass](../classes/_classes_.baseclass.md) | - |



**Returns:** [SubClassA](../classes/_classes_.subclassa.md)




Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)



* Defined in [classes.ts:79](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L79)












## Properties

<a id="kind"></a>

### «Protected» kind:  *number* 


<p>This is a simple protected member.</p>







Inherited from [BaseClass](_classes_.baseclass.md).[kind](_classes_.baseclass.md#kind)



* Defined in [classes.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L63)






----
<a id="name"></a>

###  name:  *string* 


<p>This is a simple public member.</p>







*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[name](../interfaces/_classes_.iprintnameinterface.md#name)*
Inherited from [BaseClass](_classes_.baseclass.md).[name](_classes_.baseclass.md#name)



* Defined in [classes.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L58)






----
<a id="instance"></a>

### «Static» instance:  *[BaseClass](../classes/_classes_.baseclass.md)* 


<p>This is a static member.</p>


<p>Static members should not be inherited.</p>





Inherited from [BaseClass](_classes_.baseclass.md).[instance](_classes_.baseclass.md#instance)



* Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L70)






----
<a id="instances"></a>

### «Static» instances:  *[BaseClass](../classes/_classes_.baseclass.md)[]* 




Inherited from [BaseClass](_classes_.baseclass.md).[instances](_classes_.baseclass.md#instances)



* Defined in [classes.ts:71](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L71)






----



## nameProperty: Accessor


getnameProperty(): stringsetnameProperty(value: *string*): void


<p>Returns the name. See <a href="_classes_.baseclass.md#name">BaseClass.name</a>.</p>










**Returns:** string

The return value.







* Defined in [classes.ts:219](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L219)











<p>Sets the name. See <a href="_classes_.baseclass.md#name">BaseClass.name</a>.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | string | The new name. |



**Returns:** void

The return value.







* Defined in [classes.ts:229](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L229)












## readOnlyNameProperty: Accessor


getreadOnlyNameProperty(): string


<p>Returns the name. See <a href="_classes_.baseclass.md#name">BaseClass.name</a>.</p>










**Returns:** string

The return value.







* Defined in [classes.ts:239](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L239)












## writeOnlyNameProperty: Accessor


setwriteOnlyNameProperty(value: *string*): void


<p>Sets the name. See <a href="_classes_.baseclass.md#name">BaseClass.name</a>.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | string | The new name. |



**Returns:** void

The return value.







* Defined in [classes.ts:250](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L250)














## Methods

<a id="arrowfunction"></a>
###  arrowFunction: Method

► arrowFunction(param2: *string*, param1: *number*): void


<p>This is a simple fat arrow function.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param2  | string | The second parameter needed by this function. |
| param1  | number | The first parameter needed by this function. |



**Returns:** void




Inherited from [BaseClass](_classes_.baseclass.md).[arrowFunction](_classes_.baseclass.md#arrowfunction)



* Defined in [classes.ts:140](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L140)









---

<a id="getname"></a>
###  getName: Method

► getName(): string


<p>This is a simple member function.</p>


<p>It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.</p>








**Returns:** string

Return the name.




*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[getName](../interfaces/_classes_.iprintnameinterface.md#getname)*
Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname)



* Defined in [classes.ts:102](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L102)









---

<a id="print"></a>
###  print: Method

► print(value: *string*): void


<p>This is a simple interface function.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | string | - |



**Returns:** void




*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[print](../interfaces/_classes_.iprintnameinterface.md#print)*



* Defined in [classes.ts:203](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L203)









---

<a id="printname"></a>
###  printName: Method

► printName(): void


<p>This is a interface function of IPrintNameInterface</p>










**Returns:** void




*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[printName](../interfaces/_classes_.iprintnameinterface.md#printname)*



* Defined in [classes.ts:209](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L209)









---

<a id="setname"></a>
###  setName: Method

► setName(name: *string*): void


<p>This is a simple member function.</p>


<p>It should be inherited by all subclasses.</p>





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name  | string | The new name. |



**Returns:** void




Inherited from [BaseClass](_classes_.baseclass.md).[setName](_classes_.baseclass.md#setname)



* Defined in [classes.ts:127](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L127)









---

<a id="catest"></a>
### «Static» caTest: Method

► caTest(originalValues: *[BaseClass](../classes/_classes_.baseclass.md)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string






**see**: https://github.com/sebastian-lenz/typedoc/issues/42



#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| originalValues  | [BaseClass](../classes/_classes_.baseclass.md) | - |
| newRecord  | any | - |
| fieldNames  | string[] | - |
| mandatoryFields  | string[] | - |



**Returns:** string




Inherited from [BaseClass](_classes_.baseclass.md).[caTest](_classes_.baseclass.md#catest)



* Defined in [classes.ts:167](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L167)









---

<a id="getinstance"></a>
### «Static» getInstance: Method

► getInstance(): [BaseClass](../classes/_classes_.baseclass.md)


<p>This is a static function.</p>


<p>Static functions should not be inherited.</p>








**Returns:** [BaseClass](../classes/_classes_.baseclass.md)

An instance of BaseClass.




Inherited from [BaseClass](_classes_.baseclass.md).[getInstance](_classes_.baseclass.md#getinstance)



* Defined in [classes.ts:159](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L159)









---

<a id="getname-1"></a>
### «Static» getName: Method

► getName(): string


<p>This is a simple static member function.</p>


<p>Static functions should not be inherited. This class has a
member with the same name, both should be documented.</p>








**Returns:** string

Return the name.




Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname-1)



* Defined in [classes.ts:115](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L115)









---



