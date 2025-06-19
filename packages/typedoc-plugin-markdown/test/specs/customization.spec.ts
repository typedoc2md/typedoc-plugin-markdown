import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Customization)`, () => {
  it(`should insert content from hooks and apply custom theme index page`, () => {
    expectFileToEqual('customize', 'members', ['README.md']);
  });

  it(`should insert content from hooks and apply custom theme member page`, () => {
    expectFileToEqual('customize', 'members', ['functions/someFunction.md']);
  });

  it(`should action pre-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', ['post-render-async-job.txt']);
  });

  it(`should action post-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', ['post-render-async-job.txt']);
  });

  it(`should action renderer-event-begin jobs`, () => {
    expectFileToEqual('customize', 'members', ['renderer-event-begin.txt']);
  });

  it(`should action renderer-event-end jobs`, () => {
    expectFileToEqual('customize', 'members', ['renderer-event-end.txt']);
  });
});
