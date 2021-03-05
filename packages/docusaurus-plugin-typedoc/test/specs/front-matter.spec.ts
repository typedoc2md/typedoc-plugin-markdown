import cuid from 'cuid';
import { Application } from 'typedoc';
import MarkdownPlugin from 'typedoc-plugin-markdown';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { FrontMatterComponent } from '../../dist/front-matter';
import { addOptions, getOptions } from '../../src/options';

async function generate(opts = {}) {
  const app = new Application();

  MarkdownPlugin(app);

  addOptions(app);

  const options = getOptions('test-site', opts);

  await app.bootstrap({
    ...options,
    logger: 'none',
    entryPoints: [
      '../typedoc-plugin-markdown/test/stubs/src/theme.ts',
      '../typedoc-plugin-markdown/test/stubs/src/frontmatter.ts',
    ],
    tsconfig: '../typedoc-plugin-markdown/test/stubs/tsconfig.json',
  });

  const project = app.convert();
  const componentNamename = cuid();
  app.renderer.addComponent(
    componentNamename,
    new FrontMatterComponent(app.renderer),
  );
  const frontMatterComponent = app.renderer.getComponent(
    componentNamename,
  ) as FrontMatterComponent;
  return { project, frontMatterComponent };
}

describe(`FrontMatter:`, () => {
  describe(`(readme)`, () => {
    test(`should set default index page`, async () => {
      const page = {
        url: 'index.md',
        model: { name: 'test-project-name' },
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
      const { frontMatterComponent } = await generate();
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set custom readmeLabel and readmeTitle`, async () => {
      const page = {
        url: 'index.md',
        model: { name: 'test-project-name' },
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
      const { frontMatterComponent } = await generate({
        sidebar: {
          readmeLabel: 'Custom readme label',
        },
        readmeTitle: 'Custom readme title',
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set the same custom readmeLabel and readmeTitle`, async () => {
      const page = {
        url: 'index.md',
        model: { name: 'test-project-name' },
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
      const { frontMatterComponent } = await generate({
        sidebar: {
          readmeLabel: 'Custom readme title',
        },
        readmeTitle: 'Custom readme title',
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });
  });

  describe(`(globals)`, () => {
    test(`should set default globals page`, async () => {
      const page = {
        url: 'modules.md',
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
      const { frontMatterComponent } = await generate();
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set custom indexLabel`, async () => {
      const page = {
        url: 'modules.md',
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
      const { frontMatterComponent } = await generate({
        sidebar: {
          indexLabel: 'Custom index label',
        },
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set globals page when readme=none`, async () => {
      const page = {
        url: 'modules.md',
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
      page.url = 'index.md';
      page.project.url = 'index.md';
      const { frontMatterComponent } = await generate();
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });
  });

  describe(`(reflection names)`, () => {
    test(`should return reflection labels with short names`, async () => {
      const { project, frontMatterComponent } = await generate();
      const page = {
        project,
        model: project.findReflectionByName('FrontMatterClass'),
        url: 'url',
        contents: 'CONTENTS',
      } as PageEvent;
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should return front matter with full names`, async () => {
      const { project, frontMatterComponent } = await generate({
        sidebar: {
          fullNames: true,
        },
      });

      const page = {
        project,
        model: project.findReflectionByName('FrontMatterClass'),
        url: 'url',
        contents: 'CONTENTS',
      } as PageEvent;
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });
  });

  describe(`(no sidebar)`, () => {
    test(`should return front matter without sidebar`, async () => {
      const page = {
        url: 'modules.md',
        project: { name: 'test-project-name', url: 'modules.md' },
        contents: 'CONTENTS',
      } as PageEvent;
      const { frontMatterComponent } = await generate({
        sidebar: null,
      });
      frontMatterComponent.onPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });
  });
});
