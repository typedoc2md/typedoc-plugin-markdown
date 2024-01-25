import { expectFileToEqual } from '@devtools/testing';

describe(`Customization`, () => {
  test(`should insert content from hooks and apply custom theme`, () => {
    expectFileToEqual('customize', 'members', ['README.md']);
  });

  test(`should action pre-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', ['post-render.txt']);
  });

  test(`should action post-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', ['post-render.txt']);
  });
});
