// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';
import { RemarkPlugin } from './types/options.js';
declare module 'typedoc' {
  export interface TypeDocOptionMap {
    defaultRemarkPlugins: {
      gfm?: boolean;
      frontmatter?: boolean;
      mdx?: boolean;
    };
    remarkPlugins: ManuallyValidatedOption<RemarkPlugin[]>;
    remarkStringifyOptions: ManuallyValidatedOption<Record<string, any>>;
  }
}
