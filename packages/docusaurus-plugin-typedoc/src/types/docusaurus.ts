export interface LoadContext {
  siteDir: string;
  siteConfig: {
    plugins?: any[];
    presets?: any[];
  };
}

export type Cli = {
  command(name: string): Cli;
  description(desc: string): Cli;
  option(flag: string, desc?: string): Cli;
  action(fn: (...args: any[]) => void): void;
};
