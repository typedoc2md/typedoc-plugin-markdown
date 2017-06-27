[typedoc-plugin-markdown](../README.md) > [interfaces](../modules/interfaces.md)



# Module: interfaces

## Index

### Interfaces

* [ClockConstructor](../interfaces/interfaces.clockconstructor.md)
* [ClockInterface](../interfaces/interfaces.clockinterface.md)
* [Shape](../interfaces/interfaces.shape.md)
* [Square](../interfaces/interfaces.square.md)
* [SquareConfig](../interfaces/interfaces.squareconfig.md)
* [StringArray](../interfaces/interfaces.stringarray.md)
* [Surface](../interfaces/interfaces.surface.md)


### Type aliases

* [SearchFunc](interfaces.md#markdown-header-searchfunc)


### Variables

* [mySearch](interfaces.md#markdown-header-mysearch)
* [square](interfaces.md#markdown-header-square)


### Functions

* [createClock](interfaces.md#markdown-header-createclock)



---
## Type aliases


###  SearchFunc

**  SearchFunc**:  *function* 

*Defined in [interfaces.ts:61](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-61)*


#### Type declaration
(source: *`string`*, subString: *`string`*): `boolean`


*Defined in [interfaces.ts:61](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-61)*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source | `string` | - |
| subString | `string` | - |





**Returns:** `boolean`






___


## Variables


###  mySearch

** ●  mySearch**:  *[SearchFunc](interfaces.md#markdown-header-searchfunc)* 

*Defined in [interfaces.ts:63](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-63)*





___



###  square

** ●  square**:  *[Square](../interfaces/interfaces.square.md)*  =  {} as Square

*Defined in [interfaces.ts:97](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-97)*





___


## Functions


###  createClock

► **createClock**(ctor: *[ClockConstructor](../interfaces/interfaces.clockconstructor.md)*, hour: *`number`*, minute: *`number`*): [ClockInterface](../interfaces/interfaces.clockinterface.md)




*Defined in [interfaces.ts:85](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-85)*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ctor | [ClockConstructor](../interfaces/interfaces.clockconstructor.md) | - |
| hour | `number` | - |
| minute | `number` | - |





**Returns:** [ClockInterface](../interfaces/interfaces.clockinterface.md)





___


