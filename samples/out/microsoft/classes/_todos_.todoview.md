[Microsoft TypeScriptSamples](../index.md) >  ["todos"](../modules/_todos_.md)>  [TodoView](../classes/_todos_.todoview.md)
# Class TodoView


## Hierarchy
* [View](../classes/_todos_.backbone.view.md)

**TodoView**








## Constructors
* [constructor](../classes/_todos_.todoview.md#constructor)

## Properties
* [$el](../classes/_todos_.todoview.md#_el)
* [delegateEvents](../classes/_todos_.todoview.md#delegateevents)
* [el](../classes/_todos_.todoview.md#el)
* [events](../classes/_todos_.todoview.md#events)
* [input](../classes/_todos_.todoview.md#input)
* [model](../classes/_todos_.todoview.md#model)
* [tagName](../classes/_todos_.todoview.md#tagname)
* [template](../classes/_todos_.todoview.md#template)
* [extend](../classes/_todos_.todoview.md#extend)

## Methods
* [$](../classes/_todos_.todoview.md#_)
* [clear](../classes/_todos_.todoview.md#clear)
* [close](../classes/_todos_.todoview.md#close)
* [edit](../classes/_todos_.todoview.md#edit)
* [make](../classes/_todos_.todoview.md#make)
* [remove](../classes/_todos_.todoview.md#remove)
* [render](../classes/_todos_.todoview.md#render)
* [setElement](../classes/_todos_.todoview.md#setelement)
* [toggleDone](../classes/_todos_.todoview.md#toggledone)
* [updateOnEnter](../classes/_todos_.todoview.md#updateonenter)

---




<a id="constructor"></a>
## constructor: Constructor

### new TodoView(options?:any):[TodoView](../classes/_todos_.todoview.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| options  | any | - |






**Returns:** [TodoView](../classes/_todos_.todoview.md)




Overrides View.constructor



* Defined in todos.ts:202












## Properties

<a id="_el"></a>

### **$el**:  *[JQuery](../interfaces/_todos_.jquery.md)* 




Inherited from View.$el



* Defined in todos.ts:75






<a id="delegateevents"></a>

### **delegateEvents**:  *any* 




Inherited from View.delegateEvents



* Defined in todos.ts:78






<a id="el"></a>

### **el**:  *HTMLElement* 




Inherited from View.el



* Defined in todos.ts:74






<a id="events"></a>

### **events**:  *any* 




Inherited from View.events



* Defined in todos.ts:83






<a id="input"></a>

### **input**:  *[JQuery](../interfaces/_todos_.jquery.md)* 







* Defined in todos.ts:202






<a id="model"></a>

### **model**:  *[Todo](../classes/_todos_.todo.md)* 




Overrides View.model



* Defined in todos.ts:201






<a id="tagname"></a>

### **tagName**:  *string* 




Inherited from View.tagName



* Defined in todos.ts:82






<a id="template"></a>

### **template**:  *function* 



#### Type declaration

(data:any):string




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| data  | any | - |






**Returns:** string













* Defined in todos.ts:198






<a id="extend"></a>

### **extend**:  *any* 




Inherited from View.extend



* Defined in todos.ts:85








## Methods

<a id="_"></a>
### $(selector:string):[JQuery](../interfaces/_todos_.jquery.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| selector  | string | - |






**Returns:** [JQuery](../interfaces/_todos_.jquery.md)




Inherited from View.$



* Defined in todos.ts:73









---

<a id="clear"></a>
### clear():void








**Returns:** void







* Defined in todos.ts:256









---

<a id="close"></a>
### close():void








**Returns:** void







* Defined in todos.ts:245









---

<a id="edit"></a>
### edit():void








**Returns:** void







* Defined in todos.ts:239









---

<a id="make"></a>
### make(tagName:string, attrs?:any, opts?:any):[View](../classes/_todos_.backbone.view.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| tagName  | string | - |
| attrs  | any | - |
| opts  | any | - |








**Returns:** [View](../classes/_todos_.backbone.view.md)




Inherited from View.make



* Defined in todos.ts:79









---

<a id="remove"></a>
### remove():void








**Returns:** void




Inherited from View.remove



* Defined in todos.ts:77









---

<a id="render"></a>
### render():this








**Returns:** this







* Defined in todos.ts:227









---

<a id="setelement"></a>
### setElement(element:HTMLElement, delegate?:boolean):void
### setElement(element:[JQuery](../interfaces/_todos_.jquery.md), delegate?:boolean):void





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| element  | HTMLElement | - |
| delegate  | boolean | - |







**Returns:** void




Inherited from View.setElement



* Defined in todos.ts:80













#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| element  | [JQuery](../interfaces/_todos_.jquery.md) | - |
| delegate  | boolean | - |







**Returns:** void




Inherited from View.setElement



* Defined in todos.ts:81









---

<a id="toggledone"></a>
### toggleDone():void








**Returns:** void







* Defined in todos.ts:234









---

<a id="updateonenter"></a>
### updateOnEnter(e:any):void





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| e  | any | - |






**Returns:** void







* Defined in todos.ts:251









---



