[typedoc-plugin-markdown](../index.md) > [interfaces](../modules/interfaces.md)



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

* [SearchFunc](interfaces.md#searchfunc)


### Variables

* [mySearch](interfaces.md#mysearch)
* [square](interfaces.md#square-1)


### Functions

* [createClock](interfaces.md#createclock)



## Type aliases
<a id="searchfunc"></a>

###  SearchFunc

**SearchFunc**:  *function* 

*Defined in [interfaces.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L61)*


#### Type declaration
(source: *string*, subString: *string*): boolean


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | string | - | - |
| subString  | string | - | - |





**Returns:** boolean






___


## Variables
<a id="mysearch"></a>

###  mySearch

**mySearch**:  *[SearchFunc](interfaces.md#searchfunc)* 

*Defined in [interfaces.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L63)*





___

<a id="square-1"></a>

###  square

**square**:  *[Square](../interfaces/interfaces.square.md)*  =  {} as Square

*Defined in [interfaces.ts:97](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L97)*





___


## Functions
<a id="createclock"></a>

###  createClock

► **createClock**(ctor: *[ClockConstructor](../interfaces/interfaces.clockconstructor.md)*, hour: *number*, minute: *number*): [ClockInterface](../interfaces/interfaces.clockinterface.md)



*Defined in [interfaces.ts:85](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L85)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| ctor  | [ClockConstructor](../interfaces/interfaces.clockconstructor.md) | - | - |
| hour  | number | - | - |
| minute  | number | - | - |





**Returns:** [ClockInterface](../interfaces/interfaces.clockinterface.md)





___


