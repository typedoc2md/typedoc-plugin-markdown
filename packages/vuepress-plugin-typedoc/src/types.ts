import { Application, ProjectReflection } from 'typedoc';

export interface PluginOptions {
  out: string;
  readme?: string;
  sidebar?: SidebarOptions | null;
  disableOutputCheck?: boolean;
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

export interface FrontMatter {
  title: string;
  sidebarDepth?: number;
}
