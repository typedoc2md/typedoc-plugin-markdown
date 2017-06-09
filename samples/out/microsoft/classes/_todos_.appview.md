[Microsoft TypeScriptSamples](../index.md) >  ["todos"](../modules/_todos_.md)>  [AppView](../classes/_todos_.appview.md)
# Class AppView


## Hierarchy
* [View](../classes/_todos_.backbone.view.md)

**AppView**








## Constructors
* [constructor](../classes/_todos_.appview.md#constructor)

## Properties
* [$el](../classes/_todos_.appview.md#_el)
* [allCheckbox](../classes/_todos_.appview.md#allcheckbox)
* [delegateEvents](../classes/_todos_.appview.md#delegateevents)
* [el](../classes/_todos_.appview.md#el)
* [input](../classes/_todos_.appview.md#input)
* [model](../classes/_todos_.appview.md#model)
* [statsTemplate](../classes/_todos_.appview.md#statstemplate)
* [tagName](../classes/_todos_.appview.md#tagname)
* [tooltipTimeout](../classes/_todos_.appview.md#tooltiptimeout)
* [extend](../classes/_todos_.appview.md#extend)

## Methods
* [$](../classes/_todos_.appview.md#_)
* [addAll](../classes/_todos_.appview.md#addall)
* [addOne](../classes/_todos_.appview.md#addone)
* [clearCompleted](../classes/_todos_.appview.md#clearcompleted)
* [createOnEnter](../classes/_todos_.appview.md#createonenter)
* [make](../classes/_todos_.appview.md#make)
* [newAttributes](../classes/_todos_.appview.md#newattributes)
* [remove](../classes/_todos_.appview.md#remove)
* [render](../classes/_todos_.appview.md#render)
* [setElement](../classes/_todos_.appview.md#setelement)
* [showTooltip](../classes/_todos_.appview.md#showtooltip)
* [toggleAllComplete](../classes/_todos_.appview.md#toggleallcomplete)

## Object literals
* [events](../classes/_todos_.appview.md#events)

---




<a id="constructor"></a>
## constructor: Constructor


⊕ new AppView(): [AppView](../classes/_todos_.appview.md)







**Returns:** [AppView](../classes/_todos_.appview.md)




Overrides [View](_todos_.backbone.view.md).[constructor](_todos_.backbone.view.md#constructor)



* Defined in [todos.ts:278](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L278)












## Properties

<a id="_el"></a>

###  $el:  *[JQuery](../interfaces/_todos_.jquery.md)* 




Inherited from [View](_todos_.backbone.view.md).[$el](_todos_.backbone.view.md#_el)



* Defined in [todos.ts:75](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L75)






----
<a id="allcheckbox"></a>

###  allCheckbox:  *HTMLInputElement* 







* Defined in [todos.ts:277](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L277)






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
<a id="input"></a>

###  input:  *[JQuery](../interfaces/_todos_.jquery.md)* 







* Defined in [todos.ts:276](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L276)






----
<a id="model"></a>

###  model:  *[Model](../classes/_todos_.backbone.model.md)* 




Inherited from [View](_todos_.backbone.view.md).[model](_todos_.backbone.view.md#model)



* Defined in [todos.ts:76](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L76)






----
<a id="statstemplate"></a>

###  statsTemplate:  *function* 



#### Type declaration



(params: *any*): string




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| params  | any | - |



**Returns:** string















* Defined in [todos.ts:278](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L278)






----
<a id="tagname"></a>

###  tagName:  *string* 




Inherited from [View](_todos_.backbone.view.md).[tagName](_todos_.backbone.view.md#tagname)



* Defined in [todos.ts:82](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L82)






----
<a id="tooltiptimeout"></a>

###  tooltipTimeout:  *number*  =  null







* Defined in [todos.ts:352](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L352)






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

<a id="addall"></a>
###  addAll: Method

► addAll(): void







**Returns:** void







* Defined in [todos.ts:325](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L325)









---

<a id="addone"></a>
###  addOne: Method

► addOne(todo: *any*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| todo  | any | - |



**Returns:** void







* Defined in [todos.ts:319](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L319)









---

<a id="clearcompleted"></a>
###  clearCompleted: Method

► clearCompleted(): boolean







**Returns:** boolean







* Defined in [todos.ts:347](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L347)









---

<a id="createonenter"></a>
###  createOnEnter: Method

► createOnEnter(e: *any*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| e  | any | - |



**Returns:** void







* Defined in [todos.ts:340](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L340)









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

<a id="newattributes"></a>
###  newAttributes: Method

► newAttributes(): object







**Returns:** object







* Defined in [todos.ts:330](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L330)









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

► render(): void







**Returns:** void







* Defined in [todos.ts:304](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L304)









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

<a id="showtooltip"></a>
###  showTooltip: Method

► showTooltip(e: *any*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| e  | any | - |



**Returns:** void







* Defined in [todos.ts:355](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L355)









---

<a id="toggleallcomplete"></a>
###  toggleAllComplete: Method

► toggleAllComplete(): void







**Returns:** void







* Defined in [todos.ts:364](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L364)









---





<a id="events"></a>
## events: Object literal

<a id="events.click__mark_all_done"></a>

###  click .mark-all-done:  *string*  = "toggleAllComplete"







* Defined in [todos.ts:273](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L273)






----



<a id="events.click__todo_clear_a"></a>

###  click .todo-clear a:  *string*  = "clearCompleted"







* Defined in [todos.ts:272](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L272)






----



<a id="events.keypress__new_todo"></a>

###  keypress #new-todo:  *string*  = "createOnEnter"







* Defined in [todos.ts:270](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L270)






----



<a id="events.keyup__new_todo"></a>

###  keyup #new-todo:  *string*  = "showTooltip"







* Defined in [todos.ts:271](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L271)






----







