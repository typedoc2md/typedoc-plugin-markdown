import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration / Text)`, () => {
  it(`should get translations for index page`, () => {
    expectFileToEqual('text', 'members', 'README.md');
  });

  it(`should get translations for module page`, () => {
    expectFileToEqual('text', 'members', ['module-1/README.md']);
  });

  it(`should get translations for member page`, () => {
    expectFileToEqual(
      'text',
      'members',
      'module-1/interfaces/SomeInterface.md',
    );
  });

  it(`should get translations for modules page`, () => {
    expectFileToEqual('text', 'modules', ['module-2.md']);
  });

  it(`should get translations for sidebar`, () => {
    expectFileToEqual('text', 'members', ['sidebar.json']);
  });

  it(`should get pageTitle templates`, () => {
    expectFileToEqual(
      'text',
      'members',
      'module-1/classes/SomeAbstractClass.md',
    );
    expectFileToEqual(
      'text',
      'members',
      'module-1/classes/SomeDeprecatedAbstractClass.md',
    );
  });
});
