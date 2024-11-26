# Type Alias: \_\_TypeDeclarationWithSpecialCharacters\_\<T, U\>

```ts
type __TypeDeclarationWithSpecialCharacters_<T, U>: object;
```

Comments for object with special characters

## Type Parameters

| Type Parameter |
| :------ |
| `T` |
| `U` |

## Type declaration

| Name | Type |
| :------ | :------ |
| `_` | `"_"` |
| `_foo_` | `"_foo_"` |
| `_prop_with_underscore_` | `"_prop_with_underscore_"` |
| `_x` | (`_param`: `T`) => `U` |
| `?` | `T` \| `U` |
| `{prop-with-brackets}` | `"{prop-with-brackets}"` |
| `*` | `"*"` |
| `**foo**` | `"**foo**"` |
| `*foo*` | `"*foo*"` |
| \ | "\\" |
| \a | "\\a" |
| \n | "\\n" |
| \` | "\`" |
| \`prop\`with\`backticks\` | "\`prop\`with\`backticks\`" |
| `<` | `"<"` |
| `<foo>` | `"<foo>"` |
| `>` | `">"` |
| \| | "\|" |
| \|prop\|with\|pipes\| | "\|prop\|with\|pipes\|" |
| `~` | `"~"` |

## Source

[types.ts:1](http://source-url)
