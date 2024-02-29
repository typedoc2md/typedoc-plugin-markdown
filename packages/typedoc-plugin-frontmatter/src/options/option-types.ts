// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

import { ManuallyValidatedOption } from 'typedoc';

declare module 'typedoc' {
  export interface TypeDocOptionMap {
    frontmatterGlobals: ManuallyValidatedOption<FrontmatterGlobals>;
    readmeFrontmatter: ManuallyValidatedOption<ReadmeFrontmatter>;
    indexFrontmatter: ManuallyValidatedOption<IndexFrontmatter>;
    frontmatterCommentTags: any[];
    preserveFrontmatterCommentTags: boolean;
    frontmatterNamingConvention: 'camelCase' | 'snakeCase';
  }
}

export interface PluginOptions {
  frontmatterGlobals: ManuallyValidatedOption<FrontmatterGlobals>;
  readmeFrontmatter: ManuallyValidatedOption<ReadmeFrontmatter>;
  indexFrontmatter: ManuallyValidatedOption<IndexFrontmatter>;
  frontmatterCommentTags: any[];
  preserveFrontmatterCommentTags: boolean;
  frontmatterNamingConvention: 'camelCase' | 'snakeCase';
}

export interface FrontmatterGlobals {}

export interface ReadmeFrontmatter {}

export interface IndexFrontmatter {}
