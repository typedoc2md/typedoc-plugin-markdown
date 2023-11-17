import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`EntryFiles`, () => {
  test(`should get entry module`, () => {
    expectFileToEqual(
      FixtureOutputDir.EntryFiles,
      FixtureOutputFileStrategy.Members,
      ['README.md', 'index.md'],
    );
  });

  test(`should get readme file`, () => {
    expectFileToEqual(
      FixtureOutputDir.EntryFiles,
      FixtureOutputFileStrategy.Members,
      'readme_.md',
      1,
    );
  });
});
