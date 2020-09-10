import { Application, ProjectReflection } from 'typedoc';

export interface PluginOptions {
  id?: string;
  logger?: string;
  inputFiles: string[];
  out: string;
  hideBreadcrumbs: boolean;
  skipSidebar: boolean;
  sidebar: SidebarOptions;
}

export interface SidebarOptions {
  fullNames: boolean;
  parentCategory: string;
}

export interface LoadedContent {
  app: Application;
  project: ProjectReflection;
}
