[Developer Guide](../../README.md) / [typedoc-plugin-markdown](../README.md) / internationalization

# internationalization

Exposes additional i18n keys and translations used by the theme.

The translatable strings configured in the plugin are only additional strings that are not present in TypeDoc core.

To add a new locale or edit and existing locale (if you think the strings are incorrect).

## Functions

### setupInternationalization()

> **setupInternationalization**(`app`): `void`

Defined in: [packages/typedoc-plugin-markdown/src/internationalization/setup.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/internationalization/setup.ts#L11)

Returns subset of translatable strings for the plugin.

These will then be merged with the main set of TypeDoc string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `app` | [`Application`](https://typedoc.org/api/classes/Application.html) |

#### Returns

`void`

## Locales

### en

> `const` **en**: [`TranslatableStrings`](../types/interfaces/TranslatableStrings.md)

Defined in: [packages/typedoc-plugin-markdown/src/internationalization/locales/en.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/internationalization/locales/en.ts#L7)

Translations for 'en' locale.

#### Initializer

```ts
{
    theme_default_value: 'Default value',
    theme_default_type: 'Default type',
    theme_description: 'Description',
    theme_event: 'Event',
    theme_re_exports: 'Re-exports',
    theme_renames_and_re_exports: 'Renames and re-exports',
    theme_extends: 'Extends',
    theme_extended_by: 'Extended by',
    theme_globals: 'Globals',
    theme_member: 'Member',
    theme_member_plural: 'Members',
    theme_modifier: 'Modifier',
    theme_name: 'Name',
    theme_package: 'Package',
    theme_packages: 'Packages',
    theme_type: 'Type',
    theme_value: 'Value',
    theme_version: 'Version',
}
```

***

### ja

> `const` **ja**: `Partial`\<[`TranslatableStrings`](../types/interfaces/TranslatableStrings.md)\>

Defined in: [packages/typedoc-plugin-markdown/src/internationalization/locales/ja.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/internationalization/locales/ja.ts#L8)

Translations for 'ja' locale.

#### Initializer

```ts
{
    theme_default_value: 'デフォルト値',
    theme_default_type: 'デフォルトタイプ',
    theme_description: '説明',
    theme_event: 'イベント',
    theme_re_exports: '再エクスポート',
    theme_renames_and_re_exports: 'リネームと再エクスポート',
    theme_extends: '拡張',
    theme_extended_by: 'によって拡張された',
    theme_globals: 'グローバル変数',
    theme_member: 'メンバー',
    theme_member_plural: 'メンバー',
    theme_modifier: '修飾子',
    theme_name: '名前',
    theme_package: 'パッケージ',
    theme_packages: 'パッケージ',
    theme_type: 'タイプ',
    theme_value: '値',
    theme_version: 'バージョン',
}
```

***

### ko

> `const` **ko**: `Partial`\<[`TranslatableStrings`](../types/interfaces/TranslatableStrings.md)\>

Defined in: [packages/typedoc-plugin-markdown/src/internationalization/locales/ko.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/internationalization/locales/ko.ts#L7)

Translations for 'ko' locale.

#### Initializer

```ts
{
    theme_default_value: '기본 값',
    theme_default_type: '기본 유형',
    theme_description: '설명',
    theme_event: '이벤트',
    theme_re_exports: '다시 내보내진 원본:',
    theme_renames_and_re_exports: '새 이름으로 내보내진 원본:',
    theme_extends: '확장',
    theme_extended_by: '에 의해 확장됨',
    theme_globals: '전역',
    theme_member: '멤버',
    theme_member_plural: '멤버들',
    theme_modifier: '수정자',
    theme_name: '이름',
    theme_package: '패키지',
    theme_packages: '패키지',
    theme_type: '유형',
    theme_value: '값',
    theme_version: '버전',
}
```

***

### zh

> `const` **zh**: `Partial`\<[`TranslatableStrings`](../types/interfaces/TranslatableStrings.md)\>

Defined in: [packages/typedoc-plugin-markdown/src/internationalization/locales/zh.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/internationalization/locales/zh.ts#L7)

Translations for 'zh' locale.

#### Initializer

```ts
{
    theme_default_value: '默认值',
    theme_default_type: '默认类型',
    theme_description: '描述',
    theme_event: '事件',
    theme_re_exports: '重新导出',
    theme_renames_and_re_exports: '重命名并重新导出',
    theme_extends: '继承',
    theme_extended_by: '继承于',
    theme_globals: '全局变量',
    theme_member: '成员',
    theme_member_plural: '成员',
    theme_modifier: '修饰符',
    theme_name: '名称',
    theme_package: '包',
    theme_packages: '包',
    theme_type: '类型',
    theme_value: '值',
    theme_version: '版本',
}
```

## Other

### jp

Renames and re-exports [ja](README.md#ja)
