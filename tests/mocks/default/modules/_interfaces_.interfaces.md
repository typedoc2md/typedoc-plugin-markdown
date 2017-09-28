[typedoc-plugin-markdown](../README.md) > ["interfaces"](../modules/_interfaces_.md) > [interfaces](../modules/_interfaces_.interfaces.md)



# Module: interfaces

## Index

### Interfaces

* [ClockConstructor](../interfaces/_interfaces_.interfaces.clockconstructor.md)
* [ClockInterface](../interfaces/_interfaces_.interfaces.clockinterface.md)
* [Shape](../interfaces/_interfaces_.interfaces.shape.md)
* [Square](../interfaces/_interfaces_.interfaces.square.md)
* [SquareConfig](../interfaces/_interfaces_.interfaces.squareconfig.md)
* [StringArray](../interfaces/_interfaces_.interfaces.stringarray.md)
* [Surface](../interfaces/_interfaces_.interfaces.surface.md)


### Type aliases

* [SearchFunc](_interfaces_.interfaces.md#searchfunc)


### Variables

* [mySearch](_interfaces_.interfaces.md#mysearch)
* [square](_interfaces_.interfaces.md#square-1)


### Functions

* [createClock](_interfaces_.interfaces.md#createclock)



---
## Type aliases
<a id="searchfunc"></a>

###  SearchFunc

**Τ SearchFunc**:  *`function`* 

*Defined in [interfaces.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L61)*


#### Type declaration
►(source: *`string`*, subString: *`string`*): `boolean`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | `string`   |  - |
| subString | `string`   |  - |





**Returns:** `boolean`






___


## Variables
<a id="mysearch"></a>

###  mySearch

**●  mySearch**:  *[SearchFunc](_interfaces_.interfaces.md#searchfunc)* 

*Defined in [interfaces.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L63)*





___

<a id="square-1"></a>

###  square

**●  square**:  *[Square](../interfaces/_interfaces_.interfaces.square.md)*  =  {} as Square

*Defined in [interfaces.ts:97](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L97)*





___


## Functions
<a id="createclock"></a>

###  createClock

► **createClock**(ctor: *[ClockConstructor](../interfaces/_interfaces_.interfaces.clockconstructor.md)*, hour: *`number`*, minute: *`number`*): [ClockInterface](../interfaces/_interfaces_.interfaces.clockinterface.md)



*Defined in [interfaces.ts:85](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L85)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctor | [ClockConstructor](../interfaces/_interfaces_.interfaces.clockconstructor.md)   |  - |
| hour | `number`   |  - |
| minute | `number`   |  - |





**Returns:** [ClockInterface](../interfaces/_interfaces_.interfaces.clockinterface.md)





___


