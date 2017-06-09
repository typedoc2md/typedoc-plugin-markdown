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


⊕ new TodoView(options?: *any*): [TodoView](../classes/_todos_.todoview.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| options  | any | - |



**Returns:** [TodoView](../classes/_todos_.todoview.md)




Overrides [View](_todos_.backbone.view.md).[constructor](_todos_.backbone.view.md#constructor)



* Defined in [todos.ts:202](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L202)












## Properties

<a id="_el"></a>

###  $el:  *[JQuery](../interfaces/_todos_.jquery.md)* 




Inherited from [View](_todos_.backbone.view.md).[$el](_todos_.backbone.view.md#_el)



* Defined in [todos.ts:75](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L75)






----
<a id="delegateevents"></a>

###  delegateEvents:  *any* 




Inherited from [View](_todos_.backbone.view.md).[delegateEvents](_todos_.backbone.view.md#delegateevents)



* Defined in [todos.ts:78](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L78)






----
<a id="el"></a>

###  el:  *HTMLElement* 




Inherited from [View](_todos_.backbone.view.md).[el](_todos_.backbone.view.md#el)



* Defined in [todos.ts:74](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L74)






----
<a id="events"></a>

###  events:  *any* 




Inherited from [View](_todos_.backbone.view.md).[events](_todos_.backbone.view.md#events)



* Defined in [todos.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L83)






----
<a id="input"></a>

###  input:  *[JQuery](../interfaces/_todos_.jquery.md)* 







* Defined in [todos.ts:202](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L202)






----
<a id="model"></a>

###  model:  *[Todo](../classes/_todos_.todo.md)* 




Overrides [View](_todos_.backbone.view.md).[model](_todos_.backbone.view.md#model)



* Defined in [todos.ts:201](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L201)






----
<a id="tagname"></a>

###  tagName:  *string* 




Inherited from [View](_todos_.backbone.view.md).[tagName](_todos_.backbone.view.md#tagname)



* Defined in [todos.ts:82](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L82)






----
<a id="template"></a>

###  template:  *function* 



#### Type declaration



(data: *any*): string




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| data  | any | - |



**Returns:** string















* Defined in [todos.ts:198](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L198)






----
<a id="extend"></a>

### «Static» extend:  *any* 




Inherited from [View](_todos_.backbone.view.md).[extend](_todos_.backbone.view.md#extend)



* Defined in [todos.ts:85](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L85)






----


## Methods

<a id="_"></a>
###  $: Method

► $(selector: *string*): [JQuery](../interfaces/_todos_.jquery.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| selector  | string | - |



**Returns:** [JQuery](../interfaces/_todos_.jquery.md)




Inherited from [View](_todos_.backbone.view.md).[$](_todos_.backbone.view.md#_)



* Defined in [todos.ts:73](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L73)









---

<a id="clear"></a>
###  clear: Method

► clear(): void







**Returns:** void







* Defined in [todos.ts:256](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L256)









---

<a id="close"></a>
###  close: Method

► close(): void







**Returns:** void







* Defined in [todos.ts:245](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L245)









---

<a id="edit"></a>
###  edit: Method

► edit(): void







**Returns:** void







* Defined in [todos.ts:239](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L239)









---

<a id="make"></a>
###  make: Method

► make(tagName: *string*, attrs?: *any*, opts?: *any*): [View](../classes/_todos_.backbone.view.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| tagName  | string | - |
| attrs  | any | - |
| opts  | any | - |



**Returns:** [View](../classes/_todos_.backbone.view.md)




Inherited from [View](_todos_.backbone.view.md).[make](_todos_.backbone.view.md#make)



* Defined in [todos.ts:79](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L79)









---

<a id="remove"></a>
###  remove: Method

► remove(): void







**Returns:** void




Inherited from [View](_todos_.backbone.view.md).[remove](_todos_.backbone.view.md#remove)



* Defined in [todos.ts:77](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L77)









---

<a id="render"></a>
###  render: Method

► render(): this







**Returns:** this







* Defined in [todos.ts:227](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L227)









---

<a id="setelement"></a>
###  setElement: Method

► setElement(element: *HTMLElement*, delegate?: *boolean*): void
► setElement(element: *[JQuery](../interfaces/_todos_.jquery.md)*, delegate?: *boolean*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| element  | HTMLElement | - |
| delegate  | boolean | - |



**Returns:** void




Inherited from [View](_todos_.backbone.view.md).[setElement](_todos_.backbone.view.md#setelement)



* Defined in [todos.ts:80](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L80)













#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| element  | [JQuery](../interfaces/_todos_.jquery.md) | - |
| delegate  | boolean | - |



**Returns:** void




Inherited from [View](_todos_.backbone.view.md).[setElement](_todos_.backbone.view.md#setelement)



* Defined in [todos.ts:81](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L81)









---

<a id="toggledone"></a>
###  toggleDone: Method

► toggleDone(): void







**Returns:** void







* Defined in [todos.ts:234](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L234)









---

<a id="updateonenter"></a>
###  updateOnEnter: Method

► updateOnEnter(e: *any*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| e  | any | - |



**Returns:** void







* Defined in [todos.ts:251](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L251)









---



