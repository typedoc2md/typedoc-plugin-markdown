import { Application, ProjectReflection } from 'typedoc';

export interface PluginOptions {
  id?: string;
  logger?: string;
  out?: string;
  sidebar?: SidebarOptions | null;
  plugin?: string[];
}

export interface SidebarOptions {
  fullNames: boolean;
  parentCategory: string;
}

export interface LoadedContent {
  app: Application;
  project: ProjectReflection;
}
