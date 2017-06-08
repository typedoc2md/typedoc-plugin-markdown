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
### getC():boolean



<p>A generic member function.</p>










**Returns:** boolean

A generic return value.




Inherited from B.getC



* Defined in generics.ts:48









---

<a id="gett"></a>
### getT():T



<p>A generic member function.</p>










**Returns:** T

A generic return value.




Inherited from A.getT



* Defined in generics.ts:24









---

<a id="sett"></a>
### setT(value:T):void



<p>A generic member function.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | T | A generic parameter. |






**Returns:** void




Inherited from B.setT



* Defined in generics.ts:41









---



