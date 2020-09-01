import { PageEvent } from 'typedoc/dist/lib/output/events';

import { TestApp } from '../../test/utils';
import { FrontMatterComponent } from './front-matter.component';

describe(`FrontMatterComponent`, () => {
  let testApp: TestApp;
  let frontMatterComponent: FrontMatterComponent;
  beforeAll(() => {
    testApp = new TestApp(['variables']);
    testApp.bootstrap();
    testApp.renderer.addComponent(
      'frontmatter',
      new FrontMatterComponent(testApp.renderer),
    );
    frontMatterComponent = testApp.renderer.getComponent(
      'frontmatter',
    ) as FrontMatterComponent;
  });

  test(`should prepend YAML block to start of page`, () => {
    const page = {
      contents: '[CONTENT]',
      url: 'modules/_access_access_.md',
      model: { name: '"access/access"' },
      project: { url: 'index.md' },
    } as PageEvent;
    frontMatterComponent.onPageEnd(page);
    expect(page.contents).toMatchSnapshot();
  });
});
