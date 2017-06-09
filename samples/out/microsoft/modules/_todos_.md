[Microsoft TypeScriptSamples](../index.md) >  ["todos"](../modules/_todos_.md)
# External module "todos"








## Modules
* [Backbone](../modules/_todos_.backbone.md)

## Classes
* [AppView](../classes/_todos_.appview.md)
* [Todo](../classes/_todos_.todo.md)
* [TodoList](../classes/_todos_.todolist.md)
* [TodoView](../classes/_todos_.todoview.md)

## Interfaces
* [JQuery](../interfaces/_todos_.jquery.md)

## Variables
* [$](../modules/_todos_.md#_)
* [Store](../modules/_todos_.md#store)
* [Todos](../modules/_todos_.md#todos)
* [_](../modules/_todos_.md#_-1)

---




<a id="_"></a>

###  $:  *function* 



#### Type declaration



(el: *HTMLElement*): [JQuery](../interfaces/_todos_.jquery.md)
(selector: *string*): [JQuery](../interfaces/_todos_.jquery.md)
(readyCallback: *function*): [JQuery](../interfaces/_todos_.jquery.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| el  | HTMLElement | - |



**Returns:** [JQuery](../interfaces/_todos_.jquery.md)











#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| selector  | string | - |



**Returns:** [JQuery](../interfaces/_todos_.jquery.md)











#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| readyCallback  | function | - |



**Returns:** [JQuery](../interfaces/_todos_.jquery.md)















* Defined in [todos.ts:102](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L102)






----



<a id="store"></a>

###  Store:  *any* 







* Defined in [todos.ts:113](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L113)






----



<a id="todos"></a>

###  Todos:  *[TodoList](../classes/_todos_.todolist.md)*  =  new TodoList()







* Defined in [todos.ts:187](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L187)






----



<a id="_-1"></a>

###  _:  *object* 



#### Type declaration




bindAll: function

► bindAll(object: *any*, ...methodNames: *string[]*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| object  | any | - |
| methodNames  | string[] | - |



**Returns:** void







* Defined in [todos.ts:111](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L111)










delay: function

► delay(f: *Function*, wait: *number*, ...arguments: *any[]*): number




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| f  | Function | - |
| wait  | number | - |
| arguments  | any[] | - |



**Returns:** number







* Defined in [todos.ts:109](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L109)










each: function

► eachT,U(arr: *T[]*, f: *function*): U[]



Type parameters:

#### T 

#### U 


#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| arr  | T[] | - |
| f  | function | - |



**Returns:** U[]







* Defined in [todos.ts:108](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L108)










template: function

► template(template: *string*): function




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| template  | string | - |



**Returns:** function







* Defined in [todos.ts:110](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L110)















* Defined in [todos.ts:107](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L107)






----





