import { ProjectReflection } from 'typedoc';
import { MarkdownTheme } from '../../src';

describe(`Output File Strategy`, () => {
  let project: ProjectReflection;
  let theme: MarkdownTheme;

  test(`should set default --kindsWithOwnFile 'all' (modules)`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      { options: { kindsWithOwnFile: 'all' } },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    expect(theme.getNavigation(project)).toMatchSnapshot();
  });

  test(`should set default --kindsWithOwnFile 'all' (modules) for monorepo`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      { options: { kindsWithOwnFile: 'all' } },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    expect(theme.getNavigation(project)).toMatchSnapshot();
  });

  test(`should set default --kindsWithOwnFile 'all' (namespaces)`, async () => {
    ({ project, theme } = await global.bootstrap(['index.ts'], {
      options: { kindsWithOwnFile: 'all' },
    }));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set --kindsWithOwnFile 'all' --numberPrefixOutput`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      { options: { kindsWithOwnFile: 'all', numberPrefixOutput: true } },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set --kindsWithOwnFile 'all' --flattenOutputFiles`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      { options: { kindsWithOwnFile: 'all', flattenOutputFiles: true } },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set with --groupByKinds=false (modules)`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      { options: { groupByKinds: false } },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set --kindsWithOwnFile none'`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      { options: { kindsWithOwnFile: 'none' } },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    expect(theme.getNavigation(project)).toMatchSnapshot();
  });

  test(`should set default --kindsWithOwnFile 'none' (namespaces)`, async () => {
    ({ project, theme } = await global.bootstrap(['index.ts'], {
      options: { kindsWithOwnFile: 'none' },
    }));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should --kindsWithOwnFile [class]'`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      {
        options: { kindsWithOwnFile: ['Class'] },
      },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should --kindsWithOwnFile [Class, Interface]'`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      {
        options: {
          kindsWithOwnFile: ['class', 'interface'],
        },
      },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });

  test(`should set kindsWithOwnFile [enum, types, variables]'`, async () => {
    ({ project, theme } = await global.bootstrap(
      ['modules/module-1', 'modules/module-2'],
      {
        options: {
          kindsWithOwnFile: ['Enum', 'TypeAlias', 'Variable'],
        },
      },
    ));
    expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
  });
});
