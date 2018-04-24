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

* [mySearch](interfaces.md#markdown-header-let-mysearch)
* [square](interfaces.md#markdown-header-const-square)

### Functions

* [createClock](interfaces.md#markdown-header-createclock)

---

## Type aliases

###  SearchFunc

**ΤSearchFunc**: *`function`*

*Defined in [interfaces.ts:62](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-62)*

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

### `<Let>` mySearch

**● mySearch**: *[SearchFunc](interfaces.md#markdown-header-searchfunc)*

*Defined in [interfaces.ts:64](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-64)*

___

### `<Const>` square

**● square**: *[Square](../interfaces/interfaces.square.md)* =  {} as Square

*Defined in [interfaces.ts:98](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-98)*

___

## Functions

###  createClock

▸ **createClock**(ctor: *[ClockConstructor](../interfaces/interfaces.clockconstructor.md)*, hour: *`number`*, minute: *`number`*): [ClockInterface](../interfaces/interfaces.clockinterface.md)

*Defined in [interfaces.ts:86](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| ctor | [ClockConstructor](../interfaces/interfaces.clockconstructor.md) | 
| hour | `number` | 
| minute | `number` | 

**Returns:** [ClockInterface](../interfaces/interfaces.clockinterface.md)

___

