[typedoc-plugin-markdown](../index.md) > ["interfaces"](../modules/_interfaces_.md) > [interfaces](../modules/_interfaces_.interfaces.md)

# Module: interfaces

## Index

### Interfaces

* [ClockConstructor](../interfaces/_interfaces_.interfaces.clockconstructor.md)
* [ClockInterface](../interfaces/_interfaces_.interfaces.clockinterface.md)
* [Shape](../interfaces/_interfaces_.interfaces.shape.md)
* [Square](../interfaces/_interfaces_.interfaces.square.md)
* [SquareConfig](../interfaces/_interfaces_.interfaces.squareconfig.md)
* [StringArray](../interfaces/_interfaces_.interfaces.stringarray.md)


### Type aliases

* [SearchFunc](_interfaces_.interfaces.md#searchfunc)


### Variables

* [mySearch](_interfaces_.interfaces.md#mysearch)
* [square](_interfaces_.interfaces.md#square-1)


### Functions

* [createClock](_interfaces_.interfaces.md#createclock)



### SearchFunc

**SearchFunc**:  *function* 

*Defined in [interfaces.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L9)*


#### Type declaration
(source: *string*, subString: *string*): boolean


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | string | - | - |
| subString  | string | - | - |





**Returns:** boolean







## Variables

<a id="mysearch"></a>

###  mySearch

**mySearch**:  *[SearchFunc](../modules/_interfaces_.interfaces.md#searchfunc)* 

*Defined in [interfaces.ts:11](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L11)*



<a id="square-1"></a>

###  square

**square**:  *[Square](../interfaces/_interfaces_.interfaces.square.md)*  =  {} as Square

*Defined in [interfaces.ts:45](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L45)*




## Functions

<a id="createclock"></a>
###  createClock

► **createClock**(ctor: *[ClockConstructor](../interfaces/_interfaces_.interfaces.clockconstructor.md)*, hour: *number*, minute: *number*): [ClockInterface](../interfaces/_interfaces_.interfaces.clockinterface.md)



*Defined in [interfaces.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L33)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| ctor  | [ClockConstructor](../interfaces/_interfaces_.interfaces.clockconstructor.md) | - | - |
| hour  | number | - | - |
| minute  | number | - | - |





**Returns:** [ClockInterface](../interfaces/_interfaces_.interfaces.clockinterface.md)



----




