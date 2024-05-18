import { Application } from 'typedoc';

export function getTranslatable(app: Application) {
  // read text content mappings for backward compatibility
  const textContentMappings = app.options.getValue('textContentMappings');
  return { ...translatable, ...serializeTextContent(textContentMappings) };
}

export const translatable = {
  // header
  theme_header_title: '{0} {1}', // {projectName} {version},
  theme_header_docs: 'Docs', // displayed in the header when readme is resolved

  // breadcrumbs
  theme_breadcrumbs_home: '{0} {1}', // {projectName} {version},

  // titles
  theme_title_index_page: '{0} {1}', // {projectName} {version},
  theme_title_member_page: '{0}: {1}', // {kind}: {name}
  theme_title_module_page: '{0}', // {name},

  // footer
  theme_footer_text: '',

  // generic labels
  theme_api_index: 'API Index',
  theme_default_value: 'Default Value',
  theme_description: 'Description',
  theme_event: 'Event',
  theme_extends: 'Extends',
  theme_extended_by: 'Extended By',
  theme_flags: 'Flags',
  theme_globals: 'Globals',
  theme_member: 'Member',
  theme_member_plural: 'Members',
  theme_modifier: 'Modifier',
  theme_name: 'Name',
  theme_packages: 'Packages',
  theme_source: 'Source',
  theme_type: 'Type',
  theme_value: 'Value',
  theme_version: 'Version',
};

/**
 * textContentMappings is now deprecated.
 *
 * This method maps textContentMappings to translatable object to avoid a breaking options change.
 *
 * This method will be removed once textContentMappings is removed from options declaration.
 *
 */
function serializeTextContent(textContentMappings: any) {
  const output: { [key: string]: string } = {};
  for (const [key, value] of Object.entries(textContentMappings)) {
    const newKey = 'theme_' + camelToSnakeCase(key.replace(/\./g, '_'));
    let newValue = (value as any)
      .replace(/{version}/g, '{1}')
      .replace(/{kind}/g, '{0}')
      .replace(/{projectName}/g, '{0}');
    if (newKey === 'theme_title_member_page') {
      newValue = newValue.replace(/{name}/g, '{1}');
    } else {
      newValue = newValue.replace(/{name}/g, '{0}');
    }
    output[newKey] = newValue;
  }
  return output;
}

function camelToSnakeCase(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
