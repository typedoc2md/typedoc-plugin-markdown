// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

import { ManuallyValidatedOption } from 'typedoc';

declare module 'typedoc' {
  export interface TypeDocOptionMap {
    docsRoot: string;
    sidebar: ManuallyValidatedOption<Sidebar>;
  }
}

export interface PluginOptions {
  docsRoot: string;
  sidebar: ManuallyValidatedOption<Sidebar>;
}

export interface Sidebar {
  autoConfiguration: boolean;
  format: string;
  pretty: boolean;
  collapsed: boolean;
}
