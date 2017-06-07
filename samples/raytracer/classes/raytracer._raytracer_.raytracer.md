[raytracer](../index.md) >  ["raytracer"](../modules/raytracer._raytracer_.md)>  [RayTracer](../classes/raytracer._raytracer_.raytracer.md)
# Class RayTracer


### Hierarchy
* RayTracer










## Properties

| Name  | Type                
| ------ | ------------------- 
| maxDepth  | number  =_5_ 




### getNaturalColor(thing:[Thing](../interfaces/raytracer._raytracer_.thing.md), pos:[Vector](../classes/raytracer._raytracer_.vector.md), norm:[Vector](../classes/raytracer._raytracer_.vector.md), rd:[Vector](../classes/raytracer._raytracer_.vector.md), scene:[Scene](../interfaces/raytracer._raytracer_.scene.md)):any
*Private*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| thing  | [Thing](../interfaces/raytracer._raytracer_.thing.md) | - |
| pos  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |
| norm  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |
| rd  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |
| scene  | [Scene](../interfaces/raytracer._raytracer_.scene.md) | - |




















**Returns:** any







* Defined in [raytracer.ts:214](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L214)











### getReflectionColor(thing:[Thing](../interfaces/raytracer._raytracer_.thing.md), pos:[Vector](../classes/raytracer._raytracer_.vector.md), normal:[Vector](../classes/raytracer._raytracer_.vector.md), rd:[Vector](../classes/raytracer._raytracer_.vector.md), scene:[Scene](../interfaces/raytracer._raytracer_.scene.md), depth:number):[Color](../classes/raytracer._raytracer_.color.md)
*Private*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| thing  | [Thing](../interfaces/raytracer._raytracer_.thing.md) | - |
| pos  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |
| normal  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |
| rd  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |
| scene  | [Scene](../interfaces/raytracer._raytracer_.scene.md) | - |
| depth  | number | - |























**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:210](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L210)











### intersections(ray:[Ray](../interfaces/raytracer._raytracer_.ray.md), scene:[Scene](../interfaces/raytracer._raytracer_.scene.md)):[Intersection](../interfaces/raytracer._raytracer_.intersection.md)
*Private*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/raytracer._raytracer_.ray.md) | - |
| scene  | [Scene](../interfaces/raytracer._raytracer_.scene.md) | - |











**Returns:** [Intersection](../interfaces/raytracer._raytracer_.intersection.md)







* Defined in [raytracer.ts:168](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L168)











### render(scene:any, ctx:any, screenWidth:any, screenHeight:any):void





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| scene  | any | - |
| ctx  | any | - |
| screenWidth  | any | - |
| screenHeight  | any | - |

















**Returns:** void







* Defined in [raytracer.ts:236](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L236)











### shade(isect:[Intersection](../interfaces/raytracer._raytracer_.intersection.md), scene:[Scene](../interfaces/raytracer._raytracer_.scene.md), depth:number):[Color](../classes/raytracer._raytracer_.color.md)
*Private*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| isect  | [Intersection](../interfaces/raytracer._raytracer_.intersection.md) | - |
| scene  | [Scene](../interfaces/raytracer._raytracer_.scene.md) | - |
| depth  | number | - |














**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:199](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L199)











### testRay(ray:[Ray](../interfaces/raytracer._raytracer_.ray.md), scene:[Scene](../interfaces/raytracer._raytracer_.scene.md)):number
*Private*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/raytracer._raytracer_.ray.md) | - |
| scene  | [Scene](../interfaces/raytracer._raytracer_.scene.md) | - |











**Returns:** number







* Defined in [raytracer.ts:181](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L181)











### traceRay(ray:[Ray](../interfaces/raytracer._raytracer_.ray.md), scene:[Scene](../interfaces/raytracer._raytracer_.scene.md), depth:number):[Color](../classes/raytracer._raytracer_.color.md)
*Private*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/raytracer._raytracer_.ray.md) | - |
| scene  | [Scene](../interfaces/raytracer._raytracer_.scene.md) | - |
| depth  | number | - |














**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:190](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L190)












