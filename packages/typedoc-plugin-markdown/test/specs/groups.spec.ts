import { expectFileToEqual } from '@devtools/testing';

describe(`Groups`, () => {
  test(`should compile index page for project`, () => {
    expectFileToEqual(
      'groups',
      ['modules', 'members'],
      ['modules.md', 'index.md'],
    );
  });

  test(`should compile readme for a project`, () => {
    expectFileToEqual('groups', 'modules', 'index.md', 1);
  });

  test(`should compile basic module index page`, () => {
    expectFileToEqual('groups', 'modules', 'basic.md');

    expectFileToEqual('groups', 'members', 'basic/index.md');
  });

  test(`should compile module index with namespaces index page`, () => {
    expectFileToEqual(
      'groups',
      ['modules', 'members'],
      'has-namespaces/index.md',
    );
  });

  test(`should compile module index for a namespace`, () => {
    expectFileToEqual(
      'groups',
      ['modules', 'members'],
      'has-namespaces/namespaces/Namespace_A/index.md',
    );
  });

  test(`should compile categories group page`, () => {
    expectFileToEqual('groups', 'modules', 'has-categories.md');
  });

  test(`should compile categories index page`, () => {
    expectFileToEqual('groups', 'members', 'has-categories/index.md', 2);
  });

  test(`should compile custom groups index page`, () => {
    expectFileToEqual('groups', 'members', 'has-custom-groups/index.md', 2);
  });

  test(`should compile references group page`, () => {
    expectFileToEqual('groups', 'modules', 'has-references.md');
  });

  test(`should compile references index page`, () => {
    expectFileToEqual('groups', 'members', 'has-references/index.md', 2);
  });
});
