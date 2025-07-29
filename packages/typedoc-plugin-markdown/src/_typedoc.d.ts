// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';
declare module 'typedoc' {
  export interface TypeDocOptionMap {
    anchorPrefix: string;
    blockTagsPreserveOrder: string[];
    classPropertiesFormat: 'list' | 'table' | 'htmlTable';
    customAnchorsFormat: 'curlyBrace' | 'escapedCurlyBrace' | 'squareBracket';
    entryFileName: string;
    entryModule: string;
    enumMembersFormat: 'list' | 'table' | 'htmlTable';
    excludeGroups: boolean;
    excludeScopesInPaths: boolean;
    expandObjects: boolean;
    expandParameters: boolean;
    fileExtension: string;
    flattenOutputFiles: boolean;
    formatWithPrettier: boolean;
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
    modulesFileName: string;
    navigationModel: {
      excludeGroups?: boolean;
      excludeCategories?: boolean;
      excludeFolders?: boolean;
    };
    outputFileStrategy: 'members' | 'modules';
    pageTitleTemplates: {
      index?:
        | string
        | ((name: { projectName: string; version: string }) => string);
      member?:
        | string
        | ((name: {
            name: string;
            rawName: string;
            kind: string;
            isDeprecated: boolean;
            group?: string;
            codeKeyword?: string;
            keyword?: string;
          }) => string);
      module?:
        | string
        | ((name: {
            name: string;
            rawName: string;
            kind: string;
            isDeprecated: boolean;
          }) => string);
    };
    parametersFormat: 'list' | 'table' | 'htmlTable';
    preserveAnchorCasing: boolean;
    prettierConfigFile: string;
    propertiesFormat: 'list' | 'table' | 'htmlTable';
    propertyMembersFormat: 'list' | 'table' | 'htmlTable';
    publicPath: string;
    sanitizeComments: boolean;
    strikeDeprecatedPageTitles: boolean;
    tableColumnSettings: {
      hideDefaults?: boolean;
      hideInherited?: boolean;
      hideModifiers?: boolean;
      hideOverrides?: boolean;
      hideSources?: boolean;
      hideValues?: boolean;
      leftAlignHeaders?: boolean;
    };
    textContentMappings: ManuallyValidatedOption<{
      'header.title'?: string;
      'breadcrumbs.home'?: string;
      'title.indexPage'?: string;
      'title.memberPage'?: string;
      'title.modulePage'?: string;
    }>;
    typeAliasPropertiesFormat: 'list' | 'table' | 'htmlTable';
    typeDeclarationFormat: 'list' | 'table' | 'htmlTable';
    typeDeclarationVisibility: 'compact' | 'verbose';
    useCodeBlocks: boolean;
    useCustomAnchors: boolean;
    useHTMLAnchors: boolean;
    useHTMLEncodedBrackets: boolean;
  }

  export namespace Internationalization {
    export interface TranslatableStrings {
      theme_default_value: [];
      theme_default_type: [];
      theme_description: [];
      theme_event: [];
      theme_re_exports: [];
      theme_renames_and_re_exports: [];
      theme_extends: [];
      theme_extended_by: [];
      theme_globals: [];
      theme_member: [];
      theme_member_plural: [];
      theme_modifier: [];
      theme_name: [];
      theme_package: [];
      theme_packages: [];
      theme_type: [];
      theme_value: [];
      theme_version: [];
    }
  }
}
