import cuid from 'cuid';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { TestApp } from '../../../typedoc-plugin-markdown/test/test-app';
import { DocusaurusFrontMatterComponent } from '../../dist/front-matter';
import { PluginOptions } from '../../dist/types';

function generate(testApp: TestApp, options: PluginOptions) {
  testApp.bootstrap();
  const componentNamename = cuid();
  testApp.renderer.addComponent(
    componentNamename,
    new DocusaurusFrontMatterComponent(testApp.renderer, options),
  );
  const frontMatterComponent = testApp.renderer.getComponent(
    componentNamename,
  ) as DocusaurusFrontMatterComponent;
  return frontMatterComponent;
}

describe(`FrontMatter:`, () => {
  let testApp: TestApp;
  const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
    out: 'api',
    sidebar: {
      fullNames: false,
      sidebarFile: 'typedoc-sidebar.js',
      globalsLabel: 'Globals',
      readmeLabel: 'README',
    },
  } as PluginOptions;
  beforeAll(() => {
    testApp = new TestApp(['frontmatter.ts']);
  });

  describe(`(readme)`, () => {
    let page: PageEvent;

    beforeEach(() => {
      page = {
        url: 'index.md',
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
    });

    test(`should set default index page`, () => {
      const frontMatterComponent = generate(testApp, DEFAULT_PLUGIN_OPTIONS);
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set custom readmeLabel and readmeTitle`, () => {
      const frontMatterComponent = generate(testApp, {
        ...DEFAULT_PLUGIN_OPTIONS,
        sidebar: {
          ...DEFAULT_PLUGIN_OPTIONS.sidebar,
          readmeLabel: 'Custom readme label',
        },
        readmeTitle: 'Custom readme title',
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set the same custom readmeLabel and readmeTitle`, () => {
      const frontMatterComponent = generate(testApp, {
        ...DEFAULT_PLUGIN_OPTIONS,
        sidebar: {
          ...DEFAULT_PLUGIN_OPTIONS.sidebar,
          readmeLabel: 'Custom readme title',
        },
        readmeTitle: 'Custom readme title',
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set default globals page`, () => {
      const frontMatterComponent = generate(testApp, {
        ...DEFAULT_PLUGIN_OPTIONS,
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });
  });

  describe(`(globals)`, () => {
    let page: PageEvent;

    beforeEach(() => {
      page = {
        url: 'modules.md',
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
    });

    test(`should set default globals page`, () => {
      const frontMatterComponent = generate(testApp, DEFAULT_PLUGIN_OPTIONS);
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set custom globalsLabel and custom globalsTitle`, () => {
      const frontMatterComponent = generate(testApp, {
        ...DEFAULT_PLUGIN_OPTIONS,
        sidebar: {
          ...DEFAULT_PLUGIN_OPTIONS.sidebar,
          globalsLabel: 'Custom globals label',
        },
        globalsTitle: 'Custom globals title',
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set globals page when readme=none`, () => {
      page.url = 'index.md';
      page.project.url = 'index.md';
      const frontMatterComponent = generate(testApp, DEFAULT_PLUGIN_OPTIONS);
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });
  });

  describe(`(reflection names)`, () => {
    let page: PageEvent;

    beforeEach(() => {
      const reflection = testApp.findReflection('FrontMatterClass');

      page = {
        project: testApp.project,
        model: reflection,
        url: 'url',
        contents: 'CONTENTS',
      } as PageEvent;
    });

    test(`should return reflection labels with short names`, () => {
      const frontMatterComponent = generate(testApp, DEFAULT_PLUGIN_OPTIONS);
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should return front matter with full names`, () => {
      const frontMatterComponent = generate(testApp, {
        ...DEFAULT_PLUGIN_OPTIONS,
        sidebar: {
          ...DEFAULT_PLUGIN_OPTIONS.sidebar,
          fullNames: true,
        },
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });
  });

  describe(`(no sidebar)`, () => {
    test(`should return front matter without sidebar`, () => {
      const page = {
        url: 'modules.md',
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
      const frontMatterComponent = generate(testApp, {
        ...DEFAULT_PLUGIN_OPTIONS,
        sidebar: null,
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });
  });
});
