// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

import { ManuallyValidatedOption } from 'typedoc';

declare module 'typedoc' {
  export interface TypeDocOptionMap {
    sidebar: ManuallyValidatedOption<Sidebar>;
  }
}

export interface PluginOptions {
  sidebar: ManuallyValidatedOption<Sidebar>;
}

export interface Sidebar {
  autoConfiguration: string;
  format: string;
}
