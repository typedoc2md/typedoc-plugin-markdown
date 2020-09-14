import { Application, ProjectReflection } from 'typedoc';

export interface PluginOptions {
  id?: string;
  logger?: string;
  inputFiles?: string[];
  out?: string;
  hideBreadcrumbs: boolean;
  hideProjectName: boolean;
  sidebar?: SidebarOptions | null;
}

export interface SidebarOptions {
  fullNames: boolean;
  parentCategory: string;
}

export interface LoadedContent {
  app: Application;
  project: ProjectReflection;
}
