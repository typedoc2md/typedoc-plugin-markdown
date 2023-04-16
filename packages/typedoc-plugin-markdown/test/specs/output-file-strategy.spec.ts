import { ProjectReflection } from 'typedoc';
import { MarkdownTheme } from '../../src';

describe(`Output File Strategy`, () => {
  let project: ProjectReflection;
  let theme: MarkdownTheme;

  test(`should set default --reflectionsWithOwnFile 'all' (modules)`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      { options: { reflectionsWithOwnFile: 'all' } },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set default --reflectionsWithOwnFile 'all' (namespaces)`, async () => {
    ({ project, theme } = await global.bootstrap(['index.ts'], {
      options: { reflectionsWithOwnFile: 'all' },
    }));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set with --groupByReflection=false (modules)`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      { options: { groupByReflections: false } },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set --reflectionsWithOwnFile none'`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      { options: { reflectionsWithOwnFile: 'none' } },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set default --reflectionsWithOwnFile 'none' (namespaces)`, async () => {
    ({ project, theme } = await global.bootstrap(['index.ts'], {
      options: { reflectionsWithOwnFile: 'none' },
    }));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should --reflectionsWithOwnFile [class]'`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      {
        options: { reflectionsWithOwnFile: ['class'] },
      },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should --reflectionsWithOwnFile [class, interface]'`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      {
        options: {
          reflectionsWithOwnFile: ['class', 'interface'],
        },
      },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set reflectionsWithOwnFile [enum, types, variables]'`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      {
        options: {
          reflectionsWithOwnFile: ['enum', 'type', 'var'],
        },
      },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });
});
