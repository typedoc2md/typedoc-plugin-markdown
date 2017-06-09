[Microsoft TypeScriptSamples](../index.md) >  ["todos"](../modules/_todos_.md)>  [Backbone](../modules/_todos_.backbone.md)>  [View](../classes/_todos_.backbone.view.md)
# Class View


## Hierarchy
**View**

* [TodoView](../classes/_todos_.todoview.md)
* [AppView](../classes/_todos_.appview.md)








## Constructors
* [constructor](../classes/_todos_.backbone.view.md#constructor)

## Properties
* [$el](../classes/_todos_.backbone.view.md#_el)
* [delegateEvents](../classes/_todos_.backbone.view.md#delegateevents)
* [el](../classes/_todos_.backbone.view.md#el)
* [events](../classes/_todos_.backbone.view.md#events)
* [model](../classes/_todos_.backbone.view.md#model)
* [tagName](../classes/_todos_.backbone.view.md#tagname)
* [extend](../classes/_todos_.backbone.view.md#extend)

## Methods
* [$](../classes/_todos_.backbone.view.md#_)
* [make](../classes/_todos_.backbone.view.md#make)
* [remove](../classes/_todos_.backbone.view.md#remove)
* [setElement](../classes/_todos_.backbone.view.md#setelement)

---




<a id="constructor"></a>
## constructor: Constructor


⊕ new View(options?: *any*): [View](../classes/_todos_.backbone.view.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| options  | any | - |



**Returns:** [View](../classes/_todos_.backbone.view.md)







* Defined in [todos.ts:71](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L71)












## Properties

<a id="_el"></a>

###  $el:  *[JQuery](../interfaces/_todos_.jquery.md)* 







* Defined in [todos.ts:75](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L75)






----
<a id="delegateevents"></a>

###  delegateEvents:  *any* 







* Defined in [todos.ts:78](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L78)






----
<a id="el"></a>

###  el:  *HTMLElement* 







* Defined in [todos.ts:74](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L74)






----
<a id="events"></a>

###  events:  *any* 







* Defined in [todos.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L83)






----
<a id="model"></a>

###  model:  *[Model](../classes/_todos_.backbone.model.md)* 







* Defined in [todos.ts:76](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L76)






----
<a id="tagname"></a>

###  tagName:  *string* 







* Defined in [todos.ts:82](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L82)






----
<a id="extend"></a>

### «Static» extend:  *any* 







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







* Defined in [todos.ts:73](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L73)









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







* Defined in [todos.ts:79](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L79)









---

<a id="remove"></a>
###  remove: Method

► remove(): void







**Returns:** void







* Defined in [todos.ts:77](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L77)









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







* Defined in [todos.ts:80](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L80)













#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| element  | [JQuery](../interfaces/_todos_.jquery.md) | - |
| delegate  | boolean | - |



**Returns:** void







* Defined in [todos.ts:81](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L81)









---



