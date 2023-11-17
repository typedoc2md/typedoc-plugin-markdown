import { FixtureEntryPoints, FixtureOutputDir } from './fixture-config';

export interface Fixture {
  outDir: FixtureOutputDir;
  entryPoints: FixtureEntryPoints;
  commonOptions: any;
  options: any[];
}
