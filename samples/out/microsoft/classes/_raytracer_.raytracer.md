[Microsoft TypeScriptSamples](../index.md) >  ["raytracer"](../modules/_raytracer_.md)>  [RayTracer](../classes/_raytracer_.raytracer.md)
# Class RayTracer


## Hierarchy
**RayTracer**








## Methods
* [render](../classes/_raytracer_.raytracer.md#render)

---



## Properties

<a id="maxdepth"></a>

### «Private» maxDepth:  *number*  = 5







* Defined in [raytracer.ts:166](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L166)






----


## Methods

<a id="getnaturalcolor"></a>
### «Private» getNaturalColor: Method

► getNaturalColor(thing: *[Thing](../interfaces/_raytracer_.thing.md)*, pos: *[Vector](../classes/_raytracer_.vector.md)*, norm: *[Vector](../classes/_raytracer_.vector.md)*, rd: *[Vector](../classes/_raytracer_.vector.md)*, scene: *[Scene](../interfaces/_raytracer_.scene.md)*): any




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| thing  | [Thing](../interfaces/_raytracer_.thing.md) | - |
| pos  | [Vector](../classes/_raytracer_.vector.md) | - |
| norm  | [Vector](../classes/_raytracer_.vector.md) | - |
| rd  | [Vector](../classes/_raytracer_.vector.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |



**Returns:** any







* Defined in [raytracer.ts:214](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L214)









---

<a id="getreflectioncolor"></a>
### «Private» getReflectionColor: Method

► getReflectionColor(thing: *[Thing](../interfaces/_raytracer_.thing.md)*, pos: *[Vector](../classes/_raytracer_.vector.md)*, normal: *[Vector](../classes/_raytracer_.vector.md)*, rd: *[Vector](../classes/_raytracer_.vector.md)*, scene: *[Scene](../interfaces/_raytracer_.scene.md)*, depth: *number*): [Color](../classes/_raytracer_.color.md)




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







* Defined in [raytracer.ts:210](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L210)









---

<a id="intersections"></a>
### «Private» intersections: Method

► intersections(ray: *[Ray](../interfaces/_raytracer_.ray.md)*, scene: *[Scene](../interfaces/_raytracer_.scene.md)*): [Intersection](../interfaces/_raytracer_.intersection.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/_raytracer_.ray.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |



**Returns:** [Intersection](../interfaces/_raytracer_.intersection.md)







* Defined in [raytracer.ts:168](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L168)









---

<a id="render"></a>
###  render: Method

► render(scene: *any*, ctx: *any*, screenWidth: *any*, screenHeight: *any*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| scene  | any | - |
| ctx  | any | - |
| screenWidth  | any | - |
| screenHeight  | any | - |



**Returns:** void







* Defined in [raytracer.ts:236](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L236)









---

<a id="shade"></a>
### «Private» shade: Method

► shade(isect: *[Intersection](../interfaces/_raytracer_.intersection.md)*, scene: *[Scene](../interfaces/_raytracer_.scene.md)*, depth: *number*): [Color](../classes/_raytracer_.color.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| isect  | [Intersection](../interfaces/_raytracer_.intersection.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |
| depth  | number | - |



**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in [raytracer.ts:199](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L199)









---

<a id="testray"></a>
### «Private» testRay: Method

► testRay(ray: *[Ray](../interfaces/_raytracer_.ray.md)*, scene: *[Scene](../interfaces/_raytracer_.scene.md)*): number




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/_raytracer_.ray.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |



**Returns:** number







* Defined in [raytracer.ts:181](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L181)









---

<a id="traceray"></a>
### «Private» traceRay: Method

► traceRay(ray: *[Ray](../interfaces/_raytracer_.ray.md)*, scene: *[Scene](../interfaces/_raytracer_.scene.md)*, depth: *number*): [Color](../classes/_raytracer_.color.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/_raytracer_.ray.md) | - |
| scene  | [Scene](../interfaces/_raytracer_.scene.md) | - |
| depth  | number | - |



**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in [raytracer.ts:190](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L190)









---



