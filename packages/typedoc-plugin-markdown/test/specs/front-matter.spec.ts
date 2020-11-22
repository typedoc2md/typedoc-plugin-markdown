import { PageEvent } from 'typedoc/dist/lib/output/events';

import { FrontMatterComponent } from '../../dist/components/front-matter';
import { TestApp } from '../test-app';

describe(`FrontMatter:`, () => {
  let testApp: TestApp;
  let frontMatterComponent: FrontMatterComponent;
  beforeAll(() => {
    testApp = new TestApp(['frontmatter.ts']);
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
    const reflection = testApp.findReflection('FrontMatterClass');
    const page = {
      project: testApp.project,
      model: reflection,
      url: reflection.url,
      contents: 'CONTENTS',
    } as PageEvent;
    frontMatterComponent.onPageEnd(page);
    expect(page.contents).toMatchSnapshot();
  });
});
