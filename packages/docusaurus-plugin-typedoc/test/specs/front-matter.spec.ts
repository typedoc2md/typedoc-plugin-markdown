import cuid from 'cuid';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { TestApp } from '../../../typedoc-plugin-markdown/test/test-app';
import { DocsaurusFrontMatterComponent } from '../../dist/components/front-matter.component';
import { SidebarOptions } from '../../dist/types';

function generate(testApp: TestApp, sidebar: SidebarOptions) {
  testApp.bootstrap();
  const componentNamename = cuid();
  testApp.renderer.addComponent(
    componentNamename,
    new DocsaurusFrontMatterComponent(testApp.renderer, 'api', sidebar),
  );
  const frontMatterComponent = testApp.renderer.getComponent(
    componentNamename,
  ) as DocsaurusFrontMatterComponent;
  return frontMatterComponent;
}

function getPage(testApp: TestApp) {
  const reflection = testApp.findReflection('FrontMatterClass');
  const page = {
    project: testApp.project,
    model: reflection,
    url: reflection.url,
    navigation: testApp.renderer.theme.getNavigation(testApp.project),
    contents: 'CONTENTS',
  } as PageEvent;
  return page;
}

describe(`FrontMatter:`, () => {
  let testApp: TestApp;
  beforeAll(() => {
    testApp = new TestApp(['frontmatter.ts']);
  });

  test(`should return front with short names`, () => {
    const frontMatterComponent = generate(testApp, {
      fullNames: false,
      sidebarFile: 'typedoc-sidebar.js',
      globalsLabel: 'Globals',
      readmeLabel: 'README',
    });
    const page = getPage(testApp);
    frontMatterComponent.onPageEnd(page);
    expect(page.contents).toMatchSnapshot();
  });

  test(`should return front matter with full names`, () => {
    const frontMatterComponent = generate(testApp, {
      fullNames: true,
      sidebarFile: 'typedoc-sidebar.js',
      globalsLabel: 'Globals',
      readmeLabel: 'README',
    });
    const page = getPage(testApp);
    frontMatterComponent.onPageEnd(page);
    expect(page.contents).toMatchSnapshot();
  });

  test(`should return front matter without sidebar`, () => {
    const frontMatterComponent = generate(testApp, null);
    const page = getPage(testApp);
    frontMatterComponent.onPageEnd(page);
    expect(page.contents).toMatchSnapshot();
  });

  test(`should set slug for index page`, () => {
    const frontMatterComponent = generate(testApp, null);
    const page = {
      project: testApp.project,
      model: testApp.project,
      url: 'index.md',
      navigation: testApp.renderer.theme.getNavigation(testApp.project),
      contents: 'CONTENTS',
    } as PageEvent;
    frontMatterComponent.onPageEnd(page);
    expect(page.contents).toMatchSnapshot();
  });
});
