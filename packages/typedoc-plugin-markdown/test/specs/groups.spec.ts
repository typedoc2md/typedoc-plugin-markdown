import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Groups)`, () => {
  it(`should compile index page for project`, () => {
    expectFileToEqual(
      'groups',
      ['modules', 'members'],
      ['modules.md', 'index.md'],
    );
  });

  it(`should compile readme for a project`, () => {
    expectFileToEqual('groups', 'modules', 'index.md', 1);
  });

  it(`should compile basic module index page`, () => {
    expectFileToEqual('groups', 'modules', 'basic.md');

    expectFileToEqual('groups', 'members', 'basic/index.md');
  });

  it(`should compile module index with namespaces index page`, () => {
    expectFileToEqual(
      'groups',
      ['modules', 'members'],
      'has-namespaces/index.md',
    );
  });

  it(`should compile module index for a namespace`, () => {
    expectFileToEqual(
      'groups',
      ['modules', 'members'],
      'has-namespaces/namespaces/Namespace_A/index.md',
    );
  });

  it(`should compile categories group page`, () => {
    expectFileToEqual('groups', 'modules', 'has-categories.md');
  });

  it(`should compile categories index page`, () => {
    expectFileToEqual('groups', 'members', 'has-categories/index.md', 2);
  });

  it(`should compile custom groups index page`, () => {
    expectFileToEqual('groups', 'members', 'has-custom-groups/index.md', 2);
  });

  it(`should compile references group page`, () => {
    expectFileToEqual('groups', 'modules', 'has-references.md');
  });

  it(`should compile references index page`, () => {
    expectFileToEqual('groups', 'members', 'has-references/index.md', 2);
  });

  it(`should compile has disabled group page`, () => {
    expectFileToEqual('groups', 'modules', 'has-disabled-groups.md');
  });

  it(`should compile has disabled groups index page`, () => {
    expectFileToEqual('groups', 'members', 'has-disabled-groups/index.md', 2);
  });
});
