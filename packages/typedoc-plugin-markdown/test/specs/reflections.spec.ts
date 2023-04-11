import * as Handlebars from 'handlebars';
import { ProjectReflection } from 'typedoc';

describe(`Reflections:`, () => {
  let reflectionTemplate: Handlebars.TemplateDelegate;

  describe(`(header)`, () => {
    let project: ProjectReflection;
    beforeEach(async () => {
      project = await global.bootstrap(['reflections.ts'], {
        hideBreadcrumbs: false,
        hidePageTitle: true,
      });
      global.stubPartials(['comment', 'member.signature', 'members']);
      global.stubHelpers(['toc', 'breadcrumbs', 'hierarchy']);
      reflectionTemplate = global.getTemplate('reflection');
    });
    test(`should compile template with breadcrumbs and without title`, () => {
      expect(
        global.compileTemplate(reflectionTemplate, {
          model: project.children ? project.children[0] : [],
          project: project,
        }),
      ).toMatchSnapshot();
    });
  });

  describe(`(template)`, () => {
    let project: ProjectReflection;
    beforeEach(async () => {
      project = await global.bootstrap(['reflections.ts'], {
        hideBreadcrumbs: true,
        hidePageTitle: false,
      });

      global.stubPartials(['index', 'comment', 'member.signature', 'members']);
      global.stubHelpers(['breadcrumbs', 'hierarchy']);
      reflectionTemplate = global.getTemplate('reflection');
    });

    test(`should compile a callable reflection`, () => {
      expect(
        global.compileTemplate(reflectionTemplate, {
          model: project.getChildByName('CallableReflection'),
          project: project,
        }),
      ).toMatchSnapshot();
    });

    test(`should compile an indexable reflection`, () => {
      expect(
        global.compileTemplate(reflectionTemplate, {
          model: project.getChildByName('IndexableReflection'),
          project: project,
        }),
      ).toMatchSnapshot();
    });
  });
});
