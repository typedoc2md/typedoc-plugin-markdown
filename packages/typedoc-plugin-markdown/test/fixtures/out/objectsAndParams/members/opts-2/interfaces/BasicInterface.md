# Interface: BasicInterface

Comments for BasicInterface

## Extended by

- [`ExtendedInterface`](ExtendedInterface.md)

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| ~~`deprecatedProp`~~ | `string` | **Deprecated** This prop is deprecated **See** Comments for some tag |
| `functionProp` | (`s`: `string`) => `boolean` | Comments for functionProper |
| `optionalProp?` | `string` | Comments for optional prop |
| `prop` | `string` | Comments for prop |
| `propReturningObjectDeclaration` | \{ `a`: `boolean`; `b`: `string`; \} | Comments for propReturningObjectDeclaration |
| `propReturningObjectDeclaration.a` | `boolean` | - |
| `propReturningObjectDeclaration.b` | `string` | - |
| `propReturningObjectDeclarations` | \{ `a`: `boolean`; `b`: `string`; \} & \{ `c`: `boolean`; `d`: `string`; \} | Comments for propReturningObjectDeclarations |
| `propReturningSignatureDeclaration?` | () => `string` \| `number` \| `boolean` | Comments for propReturningSignatureDeclaration |
| `propReturningSignatureDeclarations` | () => `any` & (`paramsA`: `true` \| `any`[], `paramsB`?: `any`) => `any` & (`paramsC`: `any`) => `any` | Comments for propReturningSignatureDeclarations |
| `propWithFunction` | (`options`: \{ `a`: `boolean`; `b`: `string`; \}) => `boolean` | Comments for propWithFunction |
| `propWithProps` | \{ `callbacks`: `Partial`\<[`CallbacksOptions`](../classes/CallbacksOptions.md)\<[`DisposableClass`](../classes/DisposableClass.md), [`ClassWithModifiers`](../classes/ClassWithModifiers.md)\>\>; `nestedPropA`: `string`; `nestedPropB`: `boolean`; `nestedPropC`: \{ `nestedPropCA`: `string`; \}; `nestedPropD`: () => `boolean`; \} | Comments for propWithProps |
| `propWithProps.callbacks?` | `Partial`\<[`CallbacksOptions`](../classes/CallbacksOptions.md)\<[`DisposableClass`](../classes/DisposableClass.md), [`ClassWithModifiers`](../classes/ClassWithModifiers.md)\>\> | Comments for callbacks |
| `propWithProps.nestedPropA` | `string` | Comments for nestedPropA |
| `propWithProps.nestedPropB` | `boolean` | Comments for nestedPropB |
| `propWithProps.nestedPropC` | \{ `nestedPropCA`: `string`; \} | Comments for nestedPropC |
| `propWithProps.nestedPropC.nestedPropCA` | `string` | Comments for nestedPropCA |
| `propWithProps.nestedPropD` | () => `boolean` | Comments for nestedPropD |
