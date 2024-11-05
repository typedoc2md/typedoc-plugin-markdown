// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';
import { FrontmatterGlobals } from './types/options.js';
import { IndexFrontmatter } from './types/options.js';
import { ReadmeFrontmatter } from './types/options.js';
declare module 'typedoc' {
  export interface TypeDocOptionMap {
    frontmatterCommentTags: string[];
    frontmatterGlobals: ManuallyValidatedOption<FrontmatterGlobals>;
    frontmatterNamingConvention: 'camelCase' | 'snakeCase';
    indexFrontmatter: ManuallyValidatedOption<IndexFrontmatter>;
    preserveFrontmatterCommentTags: boolean;
    readmeFrontmatter: ManuallyValidatedOption<ReadmeFrontmatter>;
  }
}
