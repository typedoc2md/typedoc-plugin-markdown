import { expectFileToEqual } from '@devtools/testing';

describe(`Readmes`, () => {
  test(`should get merged readme for members`, () => {
    expectFileToEqual('readme', 'members', ['index.md']);
  });

  test(`should get merged readme for modules`, () => {
    expectFileToEqual('readme', 'modules', ['index.md']);
  });
});
