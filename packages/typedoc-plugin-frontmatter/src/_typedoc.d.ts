// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';
import { FrontmatterGlobals } from './types/options';
import { IndexFrontmatter } from './types/options';
import { ReadmeFrontmatter } from './types/options';
declare module 'typedoc' {
  export interface TypeDocOptionMap {
    frontmatterCommentTags: any[];
    frontmatterGlobals: ManuallyValidatedOption<FrontmatterGlobals>;
    frontmatterNamingConvention: 'camelCase' | 'snakeCase';
    indexFrontmatter: ManuallyValidatedOption<IndexFrontmatter>;
    preserveFrontmatterCommentTags: boolean;
    readmeFrontmatter: ManuallyValidatedOption<ReadmeFrontmatter>;
  }
}
