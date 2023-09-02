import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Comments`, () => {
  test(`should compile comments for module`, () => {
    expectFileToEqual(
      FixtureOutputDir.Comments,
      [FixtureOutputFileStrategy.Modules, FixtureOutputFileStrategy.Members],
      'API.md',
    );
  });
});
