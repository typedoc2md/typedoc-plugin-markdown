// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';
import { ToStringOptions } from 'yaml';
declare module 'typedoc' {
  export interface TypeDocOptionMap {
    frontmatterCommentTags: string[];
    frontmatterGlobals: ManuallyValidatedOption<Record<string, any>>;
    frontmatterNamingConvention: 'camelCase' | 'snakeCase';
    indexFrontmatter: ManuallyValidatedOption<Record<string, any>>;
    preserveFrontmatterCommentTags: boolean;
    readmeFrontmatter: ManuallyValidatedOption<Record<string, any>>;
    yamlStringifyOptions: ManuallyValidatedOption<ToStringOptions>;
  }
}
