import { expectFileToEqual } from '@devtools/testing';

describe(`Customization`, () => {
  test(`should insert content from hooks and apply custom theme index page`, () => {
    expectFileToEqual('customize', 'members', ['README.md']);
  });

  test(`should insert content from hooks and apply custom theme member page`, () => {
    expectFileToEqual('customize', 'members', ['functions/someFunction.md']);
  });

  test(`should action pre-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', ['post-render-async-job.txt']);
  });

  test(`should action post-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', ['post-render-async-job.txt']);
  });

  test(`should action renderer-event-begin jobs`, () => {
    expectFileToEqual('customize', 'members', ['renderer-event-begin.txt']);
  });

  test(`should action renderer-event-end jobs`, () => {
    expectFileToEqual('customize', 'members', ['renderer-event-end.txt']);
  });
});
