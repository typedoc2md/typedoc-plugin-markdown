import { expectFileToEqual } from '@devtools/testing';

describe(`Customization`, () => {
  test(`should insert content from hooks and apply custom theme index page`, () => {
    expectFileToEqual('customize', 'members', ['README.md']);
  });

  test(`should insert content from hooks and apply custom theme member page`, () => {
    expectFileToEqual('customize', 'members', ['functions/someFunction.md']);
  });

  test(`should action pre-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', ['post-render.txt']);
  });

  test(`should action post-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', ['post-render.txt']);
  });
});
