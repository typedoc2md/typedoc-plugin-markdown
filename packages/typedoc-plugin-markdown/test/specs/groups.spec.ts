import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Groups`, () => {
  test(`should compile index page for project`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      [FixtureOutputFileStrategy.Modules, FixtureOutputFileStrategy.Members],
      ['modules.md', 'index.md'],
    );
  });

  test(`should compile readme for a project`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      FixtureOutputFileStrategy.Modules,
      'index.md',
      1,
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
      'basic/index.md',
    );
  });

  test(`should compile module index with namespaces index page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      [FixtureOutputFileStrategy.Modules, FixtureOutputFileStrategy.Members],
      'has-namespaces/index.md',
    );
  });

  test(`should compile module index for a namespace`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      [FixtureOutputFileStrategy.Modules, FixtureOutputFileStrategy.Members],
      'has-namespaces/namespaces/Namespace_A_/index.md',
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
      'has-categories/index.md',
      2,
    );
  });

  test(`should compile references group page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      FixtureOutputFileStrategy.Modules,
      'has-references.md',
    );
  });

  test(`should compile references index page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      FixtureOutputFileStrategy.Members,
      'has-references/index.md',
      2,
    );
  });
});
