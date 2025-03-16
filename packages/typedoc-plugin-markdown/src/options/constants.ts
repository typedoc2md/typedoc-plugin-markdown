/**
 * Contains constant default values used in options.
 *
 * @module
 */

/**
 * Default values for `membersWithOwnFile` option.
 */
export const ALLOWED_OWN_FILE_MEMBERS = [
  'Enum',
  'Variable',
  'Function',
  'Class',
  'Interface',
  'TypeAlias',
];

/**
 * Default values for `textContentMappings` option.
 */
export const TEXT_CONTENT_MAPPINGS = {
  'header.title': '{projectName} {version}',
  'breadcrumbs.home': '{projectName} {version}',
  'title.indexPage': '{projectName} {version}',
  'title.memberPage': '{kind}: {name}',
  'title.modulePage': '{name}',
};

export const DEFAULT_PAGE_TITLES = {
  index: '{projectName} {version}',
  member: '{kind}: {name}',
  module: '{name}',
};

export const AVAILABLE_ROUTERS = [
  'member',
  'module',
  'kind',
  'kind-dir',
  'structure',
  'structure-dir',
  'group',
  'category',
];
