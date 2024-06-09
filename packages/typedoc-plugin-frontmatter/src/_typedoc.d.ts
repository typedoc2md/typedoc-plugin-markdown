// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';
import { FrontmatterGlobals } from './options/types';
import { IndexFrontmatter } from './options/types';
import { ReadmeFrontmatter } from './options/types';
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
