import { ProjectReflection, Reflection } from 'typedoc';

import { MarkdownThemeRenderContext } from '../../src/theme-render-context';

describe(`Breadcrumbs:`, () => {
  let moduleReflection: Reflection;
  let classReflection: Reflection;

  describe(`(with readme)`, () => {
    let project: ProjectReflection;
    let context: MarkdownThemeRenderContext;
    beforeAll(async () => {
      ({ project, context } = await global.bootstrap(['breadcrumbs.ts']));
      moduleReflection = (project.children as any)[0];
      classReflection = project.getChildByName('Breadcrumbs') as Reflection;
      context.activeLocation = 'breadcrumbs.md';
    });

    test(`should compile entryPoint (globals) breadcrumbs'`, () => {
      expect(
        context.partials.breadcrumbs({
          project: project,
          model: project,
          url: 'globals.md',
        } as any),
      ).toMatchSnapshot();
    });

    test(`should compile module breadcrumbs'`, () => {
      expect(
        context.partials.breadcrumbs({
          project: project,
          model: moduleReflection,
          url: moduleReflection.url,
        } as any),
      ).toMatchSnapshot();
    });
    test(`should compile class breadcrumbs'`, () => {
      expect(
        context.partials.breadcrumbs({
          project: project,
          model: classReflection,
          url: classReflection.url,
        } as any),
      ).toMatchSnapshot();
    });
  });
  describe(`(without readme)`, () => {
    let project: ProjectReflection;
    let context: MarkdownThemeRenderContext;
    beforeAll(async () => {
      ({ project, context } = await global.bootstrap(['breadcrumbs.ts'], {
        options: { readme: 'none' },
      }));
      moduleReflection = (project.children as any)[0];
      classReflection = project.getChildByName('Breadcrumbs') as Reflection;
      context.activeLocation = 'breadcrumbs.md';
    });

    test(`should compile module breadcrumbs'`, () => {
      expect(
        context.partials.breadcrumbs({
          project: project,
          model: moduleReflection,
          url: moduleReflection.url,
        } as any),
      ).toMatchSnapshot();
    });
    test(`should compile class breadcrumbs'`, () => {
      expect(
        context.partials.breadcrumbs({
          project: project,
          model: classReflection,
          url: classReflection.url,
        } as any),
      ).toMatchSnapshot();
    });
  });
});
