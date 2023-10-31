import {
  Application,
  Comment,
  ProjectReflection,
  TSConfigReader,
} from 'typedoc';
import { FrontmatterEvent } from '../dist';
import { getFrontmatterTags } from '../dist/tags';

describe(`With options and custom plugin`, () => {
  let app: Application;
  let project: ProjectReflection;
  let frontmatterEvent: FrontmatterEvent;

  beforeAll(async () => {
    app = new Application();
    app.options.addReader(new TSConfigReader());

    await app.bootstrapWithPlugins({
      entryPoints: ['./test/stubs.ts'],
      tsconfig: './tsconfig.test.json',
      logLevel: 'None',
      out: './docs/options',
      readme: 'none',
      plugin: ['./dist', './test/custom-plugin'],
      frontmatterGlobals: {
        layout: 'blog',
        navOrder: 1,
        hide: true,
      },
      frontmatterTags: ['tagOne', 'tagTwo', 'tagThree'],
    } as any);

    project = app.convert() as ProjectReflection;

    app.generateDocs(project, app.options.getValue('out'));

    return new Promise((resolve) => {
      app.renderer.on(
        FrontmatterEvent.PREPARE_FRONTMATTER,
        (event: FrontmatterEvent) => {
          frontmatterEvent = event;
          if (event.page.url === 'classes/SomeClass.html') {
            resolve(frontmatterEvent);
          }
        },
      );
    });
  });

  describe(`Options`, () => {
    test(`should set default frontmatter from given options`, async () => {
      expect(frontmatterEvent.frontmatter).toEqual({
        title: 'SomeClass',
        tagOne: 0,
        tagTwo: "'Frontmatter' tag",
        layout: 'blog',
        navOrder: 1,
        hide: true,
      });
    });
  });

  describe(`YAML`, () => {
    test(`should prepend frontmatter to page contents`, async () => {
      const contentLines = frontmatterEvent.page.contents?.split(
        '\n',
      ) as string[];

      expect(contentLines.slice(0, 9)).toEqual([
        '---',
        'title: SomeClass',
        'layout: blog',
        'navOrder: 1',
        'hide: true',
        'tagOne: 0',
        'tagTwo: "\'Frontmatter\' tag"',
        '---',
        '',
      ]);

      expect(contentLines[9].startsWith('<!DOCTYPE')).toBeTruthy();
    });
  });

  describe(`Tags`, () => {
    let comment: Comment;
    beforeEach(() => {
      comment = {
        blockTags: [
          { tag: '@tagOne', content: [{ kind: 'text', text: '0' }] },
          {
            tag: '@tagTwo',
            content: [{ kind: 'text', text: 'Tag' }],
          },
        ],
      } as any;
    });

    test(`should ignore tags not defined`, () => {
      const tags = getFrontmatterTags(comment, [], false);
      expect(tags).toEqual({});
    });

    test(`should filter defined tags`, () => {
      const tags = getFrontmatterTags(comment, ['tagTwo'], false);
      expect(tags).toEqual({
        tagTwo: 'Tag',
      });
    });

    test(`should convert variable name to 'snakeCase'`, () => {
      const tags = getFrontmatterTags(comment, ['tagTwo'], true);
      expect(tags).toEqual({
        tag_two: 'Tag',
      });
    });
  });
});
