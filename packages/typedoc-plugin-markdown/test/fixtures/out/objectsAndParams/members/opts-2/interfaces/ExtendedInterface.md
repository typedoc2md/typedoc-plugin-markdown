# Interface: ExtendedInterface

Comments for ExtendedInterface

## Extends

- [`BasicInterface`](BasicInterface.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| ~~`deprecatedProp`~~ | `string` | **Deprecated** This prop is deprecated **See** Comments for some tag | [`BasicInterface`](BasicInterface.md).`deprecatedProp` |
| `extendedProp` | `string` | - | - |
| `functionProp` | (`s`: `string`) => `boolean` | Comments for functionProper | [`BasicInterface`](BasicInterface.md).`functionProp` |
| `optionalProp?` | `string` | Comments for optional prop | [`BasicInterface`](BasicInterface.md).`optionalProp` |
| `prop` | `string` | Comments for prop | [`BasicInterface`](BasicInterface.md).`prop` |
| `propReturningObjectDeclaration` | \{ `a`: `boolean`; `b`: `string`; \} | Comments for propReturningObjectDeclaration | [`BasicInterface`](BasicInterface.md).`propReturningObjectDeclaration` |
| `propReturningObjectDeclaration.a` | `boolean` | - | - |
| `propReturningObjectDeclaration.b` | `string` | - | - |
| `propReturningObjectDeclarations` | \{ `a`: `boolean`; `b`: `string`; \} & \{ `c`: `boolean`; `d`: `string`; \} | Comments for propReturningObjectDeclarations | [`BasicInterface`](BasicInterface.md).`propReturningObjectDeclarations` |
| `propReturningSignatureDeclaration?` | () => `string` \| `number` \| `boolean` | Comments for propReturningSignatureDeclaration | [`BasicInterface`](BasicInterface.md).`propReturningSignatureDeclaration` |
| `propReturningSignatureDeclarations` | () => `any` & (`paramsA`: `true` \| `any`[], `paramsB`?: `any`) => `any` & (`paramsC`: `any`) => `any` | Comments for propReturningSignatureDeclarations | [`BasicInterface`](BasicInterface.md).`propReturningSignatureDeclarations` |
| `propWithFunction` | (`options`: \{ `a`: `boolean`; `b`: `string`; \}) => `boolean` | Comments for propWithFunction | [`BasicInterface`](BasicInterface.md).`propWithFunction` |
| `propWithProps` | \{ `callbacks`: `Partial`\<[`CallbacksOptions`](../classes/CallbacksOptions.md)\<[`DisposableClass`](../classes/DisposableClass.md), [`ClassWithModifiers`](../classes/ClassWithModifiers.md)\>\>; `nestedPropA`: `string`; `nestedPropB`: `boolean`; `nestedPropC`: \{ `nestedPropCA`: `string`; \}; `nestedPropD`: () => `boolean`; \} | Comments for propWithProps | [`BasicInterface`](BasicInterface.md).`propWithProps` |
| `propWithProps.callbacks?` | `Partial`\<[`CallbacksOptions`](../classes/CallbacksOptions.md)\<[`DisposableClass`](../classes/DisposableClass.md), [`ClassWithModifiers`](../classes/ClassWithModifiers.md)\>\> | Comments for callbacks | - |
| `propWithProps.nestedPropA` | `string` | Comments for nestedPropA | - |
| `propWithProps.nestedPropB` | `boolean` | Comments for nestedPropB | - |
| `propWithProps.nestedPropC` | \{ `nestedPropCA`: `string`; \} | Comments for nestedPropC | - |
| `propWithProps.nestedPropC.nestedPropCA` | `string` | Comments for nestedPropCA | - |
| `propWithProps.nestedPropD` | () => `boolean` | Comments for nestedPropD | - |
