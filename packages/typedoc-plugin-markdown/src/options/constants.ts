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

export const DEFAULT_PAGE_TITLES = {
  index: '{projectName} {version}',
  member: '{keyword} {kind}: {name}',
  module: '{name}',
};

/**
 * Default values for `textContentMappings` option.
 */
export const TEXT_CONTENT_MAPPINGS = {
  'header.title': '{projectName} {version}',
  'breadcrumbs.home': '{projectName} {version}',
  'title.indexPage': DEFAULT_PAGE_TITLES.index,
  'title.memberPage': DEFAULT_PAGE_TITLES.member,
  'title.modulePage': DEFAULT_PAGE_TITLES.module,
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
