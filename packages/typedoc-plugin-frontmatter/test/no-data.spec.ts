import { Application, ProjectReflection, TSConfigReader } from 'typedoc';
import { FrontmatterEvent } from '../dist';

describe(`No Frontmatter Data`, () => {
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
      out: './docs/no-data',
      readme: 'none',
      plugin: ['./dist'],
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

  test(`should return empty object if no fronmatter found`, async () => {
    expect(frontmatterEvent.frontmatter).toEqual({});
  });

  test(`should not write any YAML to page if no data found`, async () => {
    const contentLines = frontmatterEvent.page.contents?.split(
      '\n',
    ) as string[];
    expect(contentLines[0].startsWith('<!DOCTYPE')).toBeTruthy();
  });
});
