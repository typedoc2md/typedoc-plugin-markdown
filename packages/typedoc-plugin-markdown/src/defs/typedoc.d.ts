// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';
import { TextContentMappings } from '../options/option-types';
declare module 'typedoc' {
  export interface TypeDocOptionMap {
    anchorPrefix: string;
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
    hidePageHeader: boolean;
    hidePageTitle: boolean;
    indexFormat: 'list' | 'table' | 'htmlTable';
    inlineDocuments: boolean;
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
    publicPath: string;
    sanitizeComments: boolean;
    tableColumns: {
      excludeDefaultsCol: boolean;
      excludeInheritedFromCol: boolean;
      excludeModifiersCol: boolean;
      excludeOverridesCol: boolean;
      excludeSourcesCol: boolean;
      leftAlignHeadings: boolean;
    };
    textContentMappings: ManuallyValidatedOption<Partial<TextContentMappings>>;
    typeDeclarationFormat: 'list' | 'table' | 'htmlTable';
    useCodeBlocks: boolean;
    useHTMLAnchors: boolean;
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace Internationalization {
    export interface TranslatableStrings {
      theme_header_title: [string, string];
      theme_header_docs: [];
      theme_breadcrumbs_home: [string, string];
      theme_title_index_page: [string, string];
      theme_title_member_page: [string, string];
      theme_title_module_page: [string];
      theme_footer_text: [];
      theme_api_index: [];
      theme_default_value: [];
      theme_description: [];
      theme_event: [];
      theme_extends: [];
      theme_extended_by: [];
      theme_flags: [];
      theme_globals: [];
      theme_member: [];
      theme_member_plural: [];
      theme_modifier: [];
      theme_name: [];
      theme_packages: [];
      theme_source: [];
      theme_type: [];
      theme_value: [];
      theme_version: [];
    }
  }
}
