import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Customization`, () => {
  test(`should insert content from hooks and apply custom theme`, () => {
    expectFileToEqual(
      FixtureOutputDir.Customize,
      FixtureOutputFileStrategy.Members,
      ['README.md'],
    );
  });

  test(`should action pre-render-async jobs`, () => {
    expectFileToEqual(
      FixtureOutputDir.Customize,
      FixtureOutputFileStrategy.Members,
      ['post-render.txt'],
    );
  });

  test(`should action post-render-async jobs`, () => {
    expectFileToEqual(
      FixtureOutputDir.Customize,
      FixtureOutputFileStrategy.Members,
      ['post-render.txt'],
    );
  });
});
