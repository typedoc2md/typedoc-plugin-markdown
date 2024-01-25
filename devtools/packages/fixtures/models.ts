export interface Fixture {
  entryPoints: string;
  outputFileStragies?: ('members' | 'modules')[];
  commonOptions: Record<string, any>;
  options: Record<string, any>[];
}
