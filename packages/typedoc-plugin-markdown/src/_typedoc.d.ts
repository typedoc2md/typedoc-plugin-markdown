// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';
declare module 'typedoc' {
  export interface TypeDocOptionMap {
    anchorPrefix: string;
    classPropertiesFormat: 'list' | 'table' | 'htmlTable';
    entryFileName: string;
    entryModule: string;
    enumMembersFormat: 'list' | 'table' | 'htmlTable';
    excludeGroups: boolean;
    excludeScopesInPaths: boolean;
    expandObjects: boolean;
    expandParameters: boolean;
    fileExtension: string;
    flattenOutputFiles: boolean;
    hideBreadcrumbs: boolean;
    hideGroupHeadings: boolean;
    hidePageHeader: boolean;
    hidePageTitle: boolean;
    indexFormat: 'list' | 'table' | 'htmlTable';
    interfacePropertiesFormat: 'list' | 'table' | 'htmlTable';
    membersWithOwnFile: (
      | 'Enum'
      | 'Variable'
      | 'Function'
      | 'Class'
      | 'Interface'
      | 'TypeAlias'
    )[];
    mergeReadme: boolean;
    navigationModel: {
      excludeGroups: boolean;
      excludeCategories: boolean;
      excludeFolders: boolean;
    };
    outputFileStrategy: 'members' | 'modules';
    parametersFormat: 'list' | 'table' | 'htmlTable';
    preserveAnchorCasing: boolean;
    propertiesFormat: 'list' | 'table' | 'htmlTable';
    propertyMembersFormat: 'list' | 'table' | 'htmlTable';
    publicPath: string;
    sanitizeComments: boolean;
    tableColumnSettings: {
      hideDefaults: boolean;
      hideInherited: boolean;
      hideModifiers: boolean;
      hideOverrides: boolean;
      hideSources: boolean;
      hideValues: boolean;
      leftAlignHeaders: boolean;
    };
    textContentMappings: ManuallyValidatedOption<{
      'header.title': string;
      'header.docs': string;
      'breadcrumbs.home': string;
      'title.indexPage': string;
      'title.memberPage': string;
      'footer.text': string;
    }>;
    typeDeclarationFormat: 'list' | 'table' | 'htmlTable';
    useCodeBlocks: boolean;
    useHTMLAnchors: boolean;
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace Internationalization {
    export interface TranslatableStrings {
      theme_default_value: [];
      theme_default_type: [];
      theme_description: [];
      theme_event: [];
      theme_extends: [];
      theme_extended_by: [];
      theme_globals: [];
      theme_member: [];
      theme_member_plural: [];
      theme_modifier: [];
      theme_name: [];
      theme_packages: [];
      theme_type: [];
      theme_value: [];
      theme_version: [];
    }
  }
}
