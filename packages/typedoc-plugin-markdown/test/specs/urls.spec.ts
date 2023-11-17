import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectUrlsToEqual } from '../__utils__/helpers';

describe(`Urls`, () => {
  test(`should gets Urls for multiple entry points`, () => {
    expectUrlsToEqual(FixtureOutputDir.Groups, [
      FixtureOutputFileStrategy.Members,
      FixtureOutputFileStrategy.Modules,
    ]);
  });

  test(`should gets Urls for single entry points`, () => {
    expectUrlsToEqual(FixtureOutputDir.Reflections, [
      FixtureOutputFileStrategy.Members,
      FixtureOutputFileStrategy.Modules,
    ]);
  });

  test(`should gets Urls for packages entry points`, () => {
    expectUrlsToEqual(FixtureOutputDir.Packages, [
      FixtureOutputFileStrategy.Members,
      FixtureOutputFileStrategy.Modules,
    ]);
  });

  test(`should gets Urls for entry module`, () => {
    expectUrlsToEqual(FixtureOutputDir.EntryFiles, [
      FixtureOutputFileStrategy.Members,
      FixtureOutputFileStrategy.Modules,
    ]);
  });
});
