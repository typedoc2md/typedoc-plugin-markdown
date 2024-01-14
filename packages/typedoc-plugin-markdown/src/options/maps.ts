import { KIND_DEFAULTS } from '../theme/constants/kinds';

/**
 * Defines outputFileStrategy model for the `outputFileStrategy` option.
 *
 * @enum
 *
 */
export const OutputFileStrategy = {
  Members: 'members',
  Modules: 'modules',
} as const;

export type OutputFileStrategy =
  (typeof OutputFileStrategy)[keyof typeof OutputFileStrategy];

/**
 *
 * @enum
 */
export const FormatStyle = {
  List: 'list',
  Table: 'table',
} as const;

export type FormatStyle = (typeof FormatStyle)[keyof typeof FormatStyle];

export const StaticText = {
  'header.title': '{projectName} {version}',
  'header.readme': 'Readme',
  'header.docs': 'API',
  'breadcrumbs.home': '{projectName}',
  'footer.generator': 'Generated using TypeDoc and typedoc-plugin-markdown.',
  'title.indexPage': '{projectName} {version}',
  'title.modulePage': '{name}',
  'title.memberPage': '{kind}: {name}',
  'title.member': '{name}',
  'label.defaultValue': 'Default value',
  'label.description': 'Description',
  'label.extendedBy': 'Extended by',
  'label.extends': 'Extends',
  'label.implements': 'Implements',
  'label.implementationOf': 'Implementation of',
  'label.inheritedFrom': 'Inherited from',
  'label.index': 'Index',
  'label.indexable': 'Indexable',
  'label.indexSignature': 'Index signature',
  'label.member': 'Member',
  'label.modifier': 'Modifier',
  'label.overrides': 'Overrides',
  'label.packages': 'Packages',
  'label.reExports': 'Re-exports',
  'label.renamesAndReExports': 'Renames and re-exports',
  'label.returns': 'Returns',
  'label.source': 'Source',
  'label.type': 'Type',
  'label.typeDeclaration': 'Type declaration',
  'label.value': 'Value',
  ...KIND_DEFAULTS,
};

/*export const MembersWithOwnFile = [
  ReflectionKind[ReflectionKind.Enum],
  ReflectionKind[ReflectionKind.Variable],
  ReflectionKind[ReflectionKind.Function],
  ReflectionKind[ReflectionKind.Class],
  ReflectionKind[ReflectionKind.Interface],
  ReflectionKind[ReflectionKind.TypeAlias],
];*/
