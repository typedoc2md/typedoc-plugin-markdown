export interface Fixture {
  only?: boolean;
  entryPoints: string;
  outputFileStragies?: ('members' | 'modules')[];
  commonOptions: Record<string, any>;
  options: Record<string, any>[];
}
