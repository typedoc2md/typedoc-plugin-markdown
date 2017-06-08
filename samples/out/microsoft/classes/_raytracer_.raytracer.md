[Microsoft TypeScriptSamples](../index.md) >  ["raytracer"](../modules/_raytracer_.md)>  [RayTracer](../classes/_raytracer_.raytracer.md)
# Class RayTracer


## Hierarchy
**RayTracer**








## Methods
* [render](../classes/_raytracer_.raytracer.md#render)

---



## Properties

<a id="maxdepth"></a>

### **maxDepth**:  *number*  = 5







* Defined in raytracer.ts:166








## Methods

<a id="getnaturalcolor"></a>
### getNaturalColor(thing:[Thing](../interfaces/_raytracer_.thing.md), pos:[Vector](../classes/_raytracer_.vector.md), norm:[Vector](../classes/_raytracer_.vector.md), rd:[Vector](../classes/_raytracer_.vector.md), scene:[Scene](../interfaces/_raytracer_.scene.md)):any
(*Private*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| thing  | [Thing](../interfaces/_raytracer_.thing.md) | - |
| pos  | [Vector](../classes/_raytracer_.vector.md) | - |
| norm  | [Vector](../classes/_raytracer_.vector.md) | - |
| rd  | [Vector](../classes/_raytracer_.vector.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |










**Returns:** any







* Defined in raytracer.ts:214









---

<a id="getreflectioncolor"></a>
### getReflectionColor(thing:[Thing](../interfaces/_raytracer_.thing.md), pos:[Vector](../classes/_raytracer_.vector.md), normal:[Vector](../classes/_raytracer_.vector.md), rd:[Vector](../classes/_raytracer_.vector.md), scene:[Scene](../interfaces/_raytracer_.scene.md), depth:number):[Color](../classes/_raytracer_.color.md)
(*Private*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| thing  | [Thing](../interfaces/_raytracer_.thing.md) | - |
| pos  | [Vector](../classes/_raytracer_.vector.md) | - |
| normal  | [Vector](../classes/_raytracer_.vector.md) | - |
| rd  | [Vector](../classes/_raytracer_.vector.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |
| depth  | number | - |











**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in raytracer.ts:210









---

<a id="intersections"></a>
### intersections(ray:[Ray](../interfaces/_raytracer_.ray.md), scene:[Scene](../interfaces/_raytracer_.scene.md)):[Intersection](../interfaces/_raytracer_.intersection.md)
(*Private*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/_raytracer_.ray.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |







**Returns:** [Intersection](../interfaces/_raytracer_.intersection.md)







* Defined in raytracer.ts:168









---

<a id="render"></a>
### render(scene:any, ctx:any, screenWidth:any, screenHeight:any):void





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| scene  | any | - |
| ctx  | any | - |
| screenWidth  | any | - |
| screenHeight  | any | - |









**Returns:** void







* Defined in raytracer.ts:236









---

<a id="shade"></a>
### shade(isect:[Intersection](../interfaces/_raytracer_.intersection.md), scene:[Scene](../interfaces/_raytracer_.scene.md), depth:number):[Color](../classes/_raytracer_.color.md)
(*Private*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| isect  | [Intersection](../interfaces/_raytracer_.intersection.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |
| depth  | number | - |








**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in raytracer.ts:199









---

<a id="testray"></a>
### testRay(ray:[Ray](../interfaces/_raytracer_.ray.md), scene:[Scene](../interfaces/_raytracer_.scene.md)):number
(*Private*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/_raytracer_.ray.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |







**Returns:** number







* Defined in raytracer.ts:181









---

<a id="traceray"></a>
### traceRay(ray:[Ray](../interfaces/_raytracer_.ray.md), scene:[Scene](../interfaces/_raytracer_.scene.md), depth:number):[Color](../classes/_raytracer_.color.md)
(*Private*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/_raytracer_.ray.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |
| depth  | number | - |








**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in raytracer.ts:190









---



