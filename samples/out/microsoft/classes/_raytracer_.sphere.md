[Microsoft TypeScriptSamples](../index.md) >  ["raytracer"](../modules/_raytracer_.md)>  [Sphere](../classes/_raytracer_.sphere.md)
# Class Sphere


## Hierarchy
**Sphere**



## Implements
* [Thing](../interfaces/_raytracer_.thing.md)
 






## Constructors
* [constructor](../classes/_raytracer_.sphere.md#constructor)

## Properties
* [center](../classes/_raytracer_.sphere.md#center)
* [radius2](../classes/_raytracer_.sphere.md#radius2)
* [surface](../classes/_raytracer_.sphere.md#surface)

## Methods
* [intersect](../classes/_raytracer_.sphere.md#intersect)
* [normal](../classes/_raytracer_.sphere.md#normal)

---




<a id="constructor"></a>
## constructor: Constructor

### new Sphere(center:[Vector](../classes/_raytracer_.vector.md), radius:number, surface:[Surface](../interfaces/_raytracer_.surface.md)):[Sphere](../classes/_raytracer_.sphere.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| center  | [Vector](../classes/_raytracer_.vector.md) | - |
| radius  | number | - |
| surface  | [Surface](../interfaces/_raytracer_.surface.md) | - |








**Returns:** [Sphere](../classes/_raytracer_.sphere.md)







* Defined in raytracer.ts:96












## Properties

<a id="center"></a>

### **center**:  *[Vector](../classes/_raytracer_.vector.md)* 







* Defined in raytracer.ts:98






<a id="radius2"></a>

### **radius2**:  *number* 







* Defined in raytracer.ts:96






<a id="surface"></a>

### **surface**:  *[Surface](../interfaces/_raytracer_.surface.md)* 




Implementation of Thing.surface



* Defined in raytracer.ts:98








## Methods

<a id="intersect"></a>
### intersect(ray:[Ray](../interfaces/_raytracer_.ray.md)):object





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/_raytracer_.ray.md) | - |






**Returns:** object







* Defined in raytracer.ts:102









---

<a id="normal"></a>
### normal(pos:[Vector](../classes/_raytracer_.vector.md)):[Vector](../classes/_raytracer_.vector.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| pos  | [Vector](../classes/_raytracer_.vector.md) | - |






**Returns:** [Vector](../classes/_raytracer_.vector.md)







* Defined in raytracer.ts:101









---



