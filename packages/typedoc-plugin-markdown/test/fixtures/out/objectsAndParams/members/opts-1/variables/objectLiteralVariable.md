# Variable: objectLiteralVariable

> `const` **objectLiteralVariable**: \{`valueA`: `number`;`valueB`: `boolean`;`valueX`: \{`valueA`: `number`[];`valueY`: (`z`: `string`) => \{`a`: `string`;`b`: `string`;`c`: \{`a`: `number`;`b`: `number`; \}; \};`valueZ`: `string`; \};`valueY`: (`unionParam`: `"a"` \| `"b"`, `_undercoreParam_`: `string`) => `string`; \}

Comments for objectLiteralVariable

## See

xyz.com

## Type declaration

### valueA

> **valueA**: `number` = `100`

Comments for valueA

### valueB

> **valueB**: `boolean` = `true`

### valueX

> **valueX**: \{`valueA`: `number`[];`valueY`: (`z`: `string`) => \{`a`: `string`;`b`: `string`;`c`: \{`a`: `number`;`b`: `number`; \}; \};`valueZ`: `string`; \}

Comments for valueX

#### valueX.valueA

> **valueA**: `number`[]

Comment for valueX.valueA

#### valueX.valueY()

> **valueY**: (`z`: `string`) => \{`a`: `string`;`b`: `string`;`c`: \{`a`: `number`;`b`: `number`; \}; \}

##### Parameters

###### z

`string`

##### Returns

\{`a`: `string`;`b`: `string`;`c`: \{`a`: `number`;`b`: `number`; \}; \}

###### a

> **a**: `string` = `'test'`

###### b

> **b**: `string` = `z`

###### c

> **c**: \{`a`: `number`;`b`: `number`; \}

###### c.a

> **a**: `number` = `1`

###### c.b

> **b**: `number` = `2`

#### valueX.valueZ

> **valueZ**: `string` = `'foo'`

### valueY()

> **valueY**: (`unionParam`: `"a"` \| `"b"`, `_undercoreParam_`: `string`) => `string`

#### Parameters

##### unionParam

`"a"` | `"b"`

##### \_undercoreParam\_

`string`

#### Returns

`string`
