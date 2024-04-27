import { TypeDocOptions } from 'typedoc';
import { PluginOptions } from './option-types';

export * from './option-maps';
export * from './option-types';
export * from './text-mappings';

export type Options = TypeDocOptions & PluginOptions;
