[Microsoft TypeScriptSamples](../index.md) >  ["raytracer"](../modules/_raytracer_.md)>  [Plane](../classes/_raytracer_.plane.md)
# Class Plane


## Hierarchy
**Plane**



## Implements
* [Thing](../interfaces/_raytracer_.thing.md)
 






## Constructors
* [constructor](../classes/_raytracer_.plane.md#constructor)

## Properties
* [intersect](../classes/_raytracer_.plane.md#intersect)
* [normal](../classes/_raytracer_.plane.md#normal)
* [surface](../classes/_raytracer_.plane.md#surface)

---




<a id="constructor"></a>
## constructor: Constructor


⊕ new Plane(norm: *[Vector](../classes/_raytracer_.vector.md)*, offset: *number*, surface: *[Surface](../interfaces/_raytracer_.surface.md)*): [Plane](../classes/_raytracer_.plane.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| norm  | [Vector](../classes/_raytracer_.vector.md) | - |
| offset  | number | - |
| surface  | [Surface](../interfaces/_raytracer_.surface.md) | - |



**Returns:** [Plane](../classes/_raytracer_.plane.md)







* Defined in [raytracer.ts:122](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L122)












## Properties

<a id="intersect"></a>

###  intersect:  *function* 



#### Type declaration



(ray: *[Ray](../interfaces/_raytracer_.ray.md)*): [Intersection](../interfaces/_raytracer_.intersection.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/_raytracer_.ray.md) | - |



**Returns:** [Intersection](../interfaces/_raytracer_.intersection.md)












*Implementation of [Thing](../interfaces/_raytracer_.thing.md).[intersect](../interfaces/_raytracer_.thing.md#intersect)*



* Defined in [raytracer.ts:122](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L122)






----
<a id="normal"></a>

###  normal:  *function* 



#### Type declaration



(pos: *[Vector](../classes/_raytracer_.vector.md)*): [Vector](../classes/_raytracer_.vector.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| pos  | [Vector](../classes/_raytracer_.vector.md) | - |



**Returns:** [Vector](../classes/_raytracer_.vector.md)












*Implementation of [Thing](../interfaces/_raytracer_.thing.md).[normal](../interfaces/_raytracer_.thing.md#normal)*



* Defined in [raytracer.ts:121](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L121)






----
<a id="surface"></a>

###  surface:  *[Surface](../interfaces/_raytracer_.surface.md)* 




*Implementation of [Thing](../interfaces/_raytracer_.thing.md).[surface](../interfaces/_raytracer_.thing.md#surface)*



* Defined in [raytracer.ts:123](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L123)






----


