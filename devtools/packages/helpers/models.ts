export interface DocsConfig {
  declarationsPath?: string;
  translatablePath?: string;
  presetsPath?: string;
  optionsPath: string;
  docsPath: string;
  declarations: boolean;
  presets: boolean;
}

export interface OptionDocument {
  name: string;
  comments: string;
  tags: { name: string; comments: string }[];
  example: string;
  category: string;
  help: string;
}
