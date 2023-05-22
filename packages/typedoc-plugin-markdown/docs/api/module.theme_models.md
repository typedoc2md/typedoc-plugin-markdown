[typedoc-plugin-markdown](README.md) > theme/models

# theme/models

Interfaces used by the theme.

## Interface: UrlOption

### Properties

#### directoryPosition

```ts
directoryPosition: number;
```

---

#### pagePosition

```ts
pagePosition: number;
```

---

#### parentUrl

```ts
parentUrl?: string
```

---

#### directory

```ts
directory?: null | string
```

---

#### forceDirectory

```ts
forceDirectory?: boolean
```

---

## Interface: TemplateMapping

### Properties

#### directory

```ts
directory: null | string;
```

---

#### template

```ts
template: any;
```

---

#### kind

```ts
kind: ReflectionKind;
```

---

## Interface: NavigationItem

### Properties

#### title

```ts
title: string;
```

---

#### url

```ts
url?: string
```

---

#### children

```ts
children?: NavigationItem[]
```

---

#### isReadme

```ts
isReadme?: boolean
```

---

#### isGroup

```ts
isGroup?: boolean
```
