# Type Alias: LiteralType

> **LiteralType**: \{`someFunctionWithArrow`: () => `string`;`x`: `string`;`y`: \{`x`: `string`;`y`: `boolean` \| `string`;`z`: (`x`: `string`) => `string`; \};`z`: (`x`: `string`) => `string`;get set `accessorA`: [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>;get set `accessorB`: `string`;`someFunction`: [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>; \}

Comments for LiteralType

## Type declaration

### someFunctionWithArrow()

> **someFunctionWithArrow**: () => `string`

Comments for someFunctionWithArrow

#### Returns

`string`

### x?

> `optional` **x**: `string`

comment for x

### y

> **y**: \{`x`: `string`;`y`: `boolean` \| `string`;`z`: (`x`: `string`) => `string`; \}

comment for y

#### y.x

> **x**: `string`

comment for y.x

#### y.y?

> `optional` **y**: `boolean` \| `string`

comment for y.y

#### y.z()

> **z**: (`x`: `string`) => `string`

comment for y.z

##### Parameters

###### x

`string`

##### Returns

`string`

### z()

> **z**: (`x`: `string`) => `string`

#### Parameters

##### x

`string`

#### Returns

`string`

### accessorA

#### Get Signature

> **get** **accessorA**(): [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Comments for accessorA getter

##### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### Set Signature

> **set** **accessorA**(`x`: [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>): `void`

Comments for accessorA setter

##### Parameters

###### x

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

##### Returns

`void`

### accessorB

#### Get Signature

> **get** **accessorB**(): `string`

##### Returns

`string`

#### Set Signature

> **set** **accessorB**(`x`: `string`): `void`

##### Parameters

###### x

`string`

##### Returns

`void`

### someFunction()

Comments for someFunction

#### Parameters

##### param

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>
