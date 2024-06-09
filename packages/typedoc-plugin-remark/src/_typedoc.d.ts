// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';
import { RemarkPlugins } from './options/types';
import { RemarkStringifyOptions } from './options/types';
declare module 'typedoc' {
  export interface TypeDocOptionMap {
    remarkPlugins: ManuallyValidatedOption<RemarkPlugins>;
    remarkStringifyOptions: ManuallyValidatedOption<RemarkStringifyOptions>;
  }
}
