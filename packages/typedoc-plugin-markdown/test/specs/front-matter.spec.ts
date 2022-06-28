import { PageEvent, ProjectReflection } from 'typedoc';

import { getPageTitle, prependYAML } from '../../src/utils/front-matter';

describe(`FrontMatter:`, () => {
  let project: ProjectReflection;

  beforeAll(async () => {
    project = await global.bootstrap(['frontmatter.ts']);
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
