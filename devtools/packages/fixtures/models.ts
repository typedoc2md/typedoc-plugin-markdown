export interface Fixture {
  only?: boolean;
  entryPoints: string | string[];
  outputFileStrategies?: ('members' | 'modules' | 'categories' | 'groups')[];
  commonOptions: Record<string, any>;
  options: Record<string, any>[];
}
