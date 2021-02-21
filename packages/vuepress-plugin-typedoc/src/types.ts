import { Application, ProjectReflection } from 'typedoc';

export interface PluginOptions {
  hideBreadcrumbs: boolean;
  out: string;
  sidebar?: SidebarOptions | null;
  plugin: string[];
  watch: boolean;
}

export interface SidebarOptions {
  fullNames: boolean;
  parentCategory: string;
  sidebarFile: string;
  sidebarPath: string;
}

export interface LoadedContent {
  app: Application;
  project: ProjectReflection;
}
