import { FixtureEntryPoints, FixtureOutputDir } from './config';

export interface Fixture {
  outDir: FixtureOutputDir;
  entryPoints: FixtureEntryPoints;
  commonOptions: any;
  options: any[];
}
