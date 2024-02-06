export interface Fixture {
  only?: boolean;
  entryPoints: string;
  outputFileStrategies?: ('members' | 'modules')[];
  commonOptions: Record<string, any>;
  options: Record<string, any>[];
}
