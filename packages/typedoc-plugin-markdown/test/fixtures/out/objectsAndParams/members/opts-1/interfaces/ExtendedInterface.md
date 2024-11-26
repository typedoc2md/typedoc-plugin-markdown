# Interface: ExtendedInterface

Comments for ExtendedInterface

## Extends

- [`BasicInterface`](BasicInterface.md)

## Properties

### ~~deprecatedProp~~

> **deprecatedProp**: `string`

#### Deprecated

This prop is deprecated

#### See

Comments for some tag

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`deprecatedProp`](BasicInterface.md#deprecatedprop)

***

### extendedProp

> **extendedProp**: `string`

***

### functionProp()

> **functionProp**: (`s`: `string`) => `boolean`

Comments for functionProper

#### Parameters

##### s

`string`

Comment for param s

#### Returns

`boolean`

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`functionProp`](BasicInterface.md#functionprop)

***

### optionalProp?

> `optional` **optionalProp**: `string`

Comments for optional prop

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`optionalProp`](BasicInterface.md#optionalprop)

***

### prop

> **prop**: `string`

Comments for prop

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`prop`](BasicInterface.md#prop)

***

### propReturningObjectDeclaration

> **propReturningObjectDeclaration**: \{`a`: `boolean`;`b`: `string`; \}

Comments for propReturningObjectDeclaration

#### a

> **a**: `boolean`

#### b

> **b**: `string`

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`propReturningObjectDeclaration`](BasicInterface.md#propreturningobjectdeclaration)

***

### propReturningObjectDeclarations

> **propReturningObjectDeclarations**: \{`a`: `boolean`;`b`: `string`; \} & \{`c`: `boolean`;`d`: `string`; \}

Comments for propReturningObjectDeclarations

#### Type declaration

##### a

> **a**: `boolean`

##### b

> **b**: `string`

#### Type declaration

##### c

> **c**: `boolean`

##### d

> **d**: `string`

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`propReturningObjectDeclarations`](BasicInterface.md#propreturningobjectdeclarations)

***

### propReturningSignatureDeclaration()?

> `optional` **propReturningSignatureDeclaration**: () => `string` \| `number` \| `boolean`

Comments for propReturningSignatureDeclaration

#### Returns

`string` \| `number` \| `boolean`

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`propReturningSignatureDeclaration`](BasicInterface.md#propreturningsignaturedeclaration)

***

### propReturningSignatureDeclarations

> **propReturningSignatureDeclarations**: () => `any` & (`paramsA`: `true` \| `any`[], `paramsB`?: `any`) => `any` & (`paramsC`: `any`) => `any`

Comments for propReturningSignatureDeclarations

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`propReturningSignatureDeclarations`](BasicInterface.md#propreturningsignaturedeclarations)

***

### propWithFunction()

> **propWithFunction**: (`options`: \{`a`: `boolean`;`b`: `string`; \}) => `boolean`

Comments for propWithFunction

#### Parameters

##### options

###### options.a

`boolean`

###### options.b

`string`

#### Returns

`boolean`

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`propWithFunction`](BasicInterface.md#propwithfunction)

***

### propWithProps

> **propWithProps**: \{`callbacks`: `Partial`\<[`CallbacksOptions`](../classes/CallbacksOptions.md)\<[`DisposableClass`](../classes/DisposableClass.md), [`ClassWithModifiers`](../classes/ClassWithModifiers.md)\>\>;`nestedPropA`: `string`;`nestedPropB`: `boolean`;`nestedPropC`: \{`nestedPropCA`: `string`; \};`nestedPropD`: () => `boolean`; \}

Comments for propWithProps

#### callbacks?

> `optional` **callbacks**: `Partial`\<[`CallbacksOptions`](../classes/CallbacksOptions.md)\<[`DisposableClass`](../classes/DisposableClass.md), [`ClassWithModifiers`](../classes/ClassWithModifiers.md)\>\>

Comments for callbacks

#### nestedPropA

> **nestedPropA**: `string`

Comments for nestedPropA

#### nestedPropB

> **nestedPropB**: `boolean`

Comments for nestedPropB

#### nestedPropC

> **nestedPropC**: \{`nestedPropCA`: `string`; \}

Comments for nestedPropC

##### nestedPropC.nestedPropCA

> **nestedPropCA**: `string`

Comments for nestedPropCA

#### nestedPropD()

> **nestedPropD**: () => `boolean`

Comments for nestedPropD

##### Returns

`boolean`

#### Inherited from

[`BasicInterface`](BasicInterface.md).[`propWithProps`](BasicInterface.md#propwithprops)
