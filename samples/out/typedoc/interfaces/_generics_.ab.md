[Typedoc Examples](../index.md) >  ["generics"](../modules/_generics_.md)>  [AB](../interfaces/_generics_.ab.md)
T
# Interface AB


<p>A generic interface extending two other generic interfaces
and setting one of the type parameters.</p>






  
 ## Type parameters

#### T 

<p>The leftover generic type parameter.</p>








## Hierarchy
* [A](../interfaces/_generics_.a.md)T
* [B](../interfaces/_generics_.b.md)T, boolean

**AB**

* [ABString](../interfaces/_generics_.abstring.md)
* [ABNumber](../interfaces/_generics_.abnumber.md)










## Methods

<a id="getc"></a>
###  getC: Method

► getC(): boolean


<p>A generic member function.</p>










**Returns:** boolean

A generic return value.




Inherited from [B](_generics_.b.md).[getC](_generics_.b.md#getc)



* Defined in [generics.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/generics.ts#L48)









---

<a id="gett"></a>
###  getT: Method

► getT(): T


<p>A generic member function.</p>










**Returns:** T

A generic return value.




Inherited from [A](_generics_.a.md).[getT](_generics_.a.md#gett)



* Defined in [generics.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/generics.ts#L24)









---

<a id="sett"></a>
###  setT: Method

► setT(value: *T*): void


<p>A generic member function.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | T | A generic parameter. |



**Returns:** void




Inherited from [B](_generics_.b.md).[setT](_generics_.b.md#sett)



* Defined in [generics.ts:41](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/generics.ts#L41)









---



