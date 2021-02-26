import { PageEvent } from 'typedoc/dist/lib/output/events';

import { getPageTitle, prependYAML } from '../../src/utils/front-matter';
import { TestApp } from '../test-app';

describe(`FrontMatter:`, () => {
  let testApp: TestApp;

  beforeAll(async () => {
    testApp = new TestApp(['frontmatter.ts']);
    await testApp.bootstrap();
  });

  test(`should prependYAML to doc content`, () => {
    expect(
      prependYAML('# Doc title\n\nDoc content', {
        stringProp: '"Escaped" title',
        booleanProp: true,
        numberProp: 2,
      }),
    ).toMatchSnapshot();
  });

  test(`should get page page from reflection helper`, () => {
    const page = {
      project: { url: 'index.md' },
      model: { name: 'Someclass' },
    } as PageEvent;
    getPageTitle(page);
    expect(getPageTitle(page)).toEqual('Someclass');
  });
});
