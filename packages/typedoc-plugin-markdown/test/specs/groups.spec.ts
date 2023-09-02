import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Groups`, () => {
  test(`should compile index page for project`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      [FixtureOutputFileStrategy.Modules, FixtureOutputFileStrategy.Members],
      ['API.md', 'index.md'],
    );
  });

  test(`should compile index page for monorepo`, () => {
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      ['API.md'],
    );
  });

  test(`should compile basic module index page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      FixtureOutputFileStrategy.Modules,
      'basic.md',
    );

    expectFileToEqual(
      FixtureOutputDir.Groups,
      FixtureOutputFileStrategy.Members,
      ['basic/README.md', 'basic/index.md'],
    );
  });

  test(`should compile module index with namespaces index page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      [FixtureOutputFileStrategy.Modules, FixtureOutputFileStrategy.Members],
      ['has-namespaces/README.md', 'has-namespaces/index.md'],
    );
  });

  test(`should compile module index for a namespace`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      [FixtureOutputFileStrategy.Modules, FixtureOutputFileStrategy.Members],
      [
        'has-namespaces/namespaces/Namespace_A_/README.md',
        'has-namespaces/namespaces/Namespace_A_/index.md',
      ],
    );
  });

  test(`should compile categories group page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      FixtureOutputFileStrategy.Modules,
      'has-categories.md',
    );
  });

  test(`should compile categories index page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      FixtureOutputFileStrategy.Members,
      ['has-categories/README.md', 'has-categories/index.md'],
      2,
    );
  });
});
