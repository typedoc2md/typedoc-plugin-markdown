import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration / Customization)`, () => {
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

  it(`should action pre-markdown-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', [
      'post-markdown-render-async-job.txt',
    ]);
  });

  it(`should action post-markdown-render-async jobs`, () => {
    expectFileToEqual('customize', 'members', [
      'post-markdown-render-async-job.txt',
    ]);
  });

  it(`should action renderer-event-begin jobs`, () => {
    expectFileToEqual('customize', 'members', ['renderer-event-begin.txt']);
  });

  it(`should action renderer-event-end jobs`, () => {
    expectFileToEqual('customize', 'members', ['renderer-event-end.txt']);
  });

  it(`should fire page and content hooks on the readme page`, () => {
    expectFileToEqual('hooks', 'members', 'README.md');
  });

  it(`should fire index page hooks on the project page`, () => {
    expectFileToEqual('hooks', 'members', 'modules.md');
  });

  it(`should fire page and content hooks on project document pages`, () => {
    expectFileToEqual('hooks', 'members', 'documents/PROJECT_DOC_2.md');
  });

  it(`should fire page and content hooks on reflection document pages`, () => {
    expectFileToEqual(
      'hooks',
      'members',
      'ModuleWithDocuments1/documents/MODULE_DOC.md',
    );
  });
});
