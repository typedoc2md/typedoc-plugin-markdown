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

**ΤSearchFunc**: *`function`*

*Defined in [interfaces.ts:62](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/interfaces.ts#L62)*

#### Type declaration
▸(source: *`string`*, subString: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| source | `string` |
| subString | `string` |

**Returns:** `boolean`

___

## Variables

<a id="mysearch"></a>

### `<Let>` mySearch

**● mySearch**: *[SearchFunc](_interfaces_.interfaces.md#searchfunc)*

*Defined in [interfaces.ts:64](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/interfaces.ts#L64)*

___
<a id="square-1"></a>

### `<Const>` square

**● square**: *[Square](../interfaces/_interfaces_.interfaces.square.md)* =  {} as Square

*Defined in [interfaces.ts:98](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/interfaces.ts#L98)*

___

## Functions

<a id="createclock"></a>

###  createClock

▸ **createClock**(ctor: *[ClockConstructor](../interfaces/_interfaces_.interfaces.clockconstructor.md)*, hour: *`number`*, minute: *`number`*): [ClockInterface](../interfaces/_interfaces_.interfaces.clockinterface.md)

*Defined in [interfaces.ts:86](https://github.com/tgreyjs/typedoc-plugin-markdown/blob/master/test/src/interfaces.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| ctor | [ClockConstructor](../interfaces/_interfaces_.interfaces.clockconstructor.md) |
| hour | `number` |
| minute | `number` |

**Returns:** [ClockInterface](../interfaces/_interfaces_.interfaces.clockinterface.md)

___

