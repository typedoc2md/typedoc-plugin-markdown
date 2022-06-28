import * as Handlebars from 'handlebars';
import { ProjectReflection } from 'typedoc';

describe(`Index:`, () => {
  let project: ProjectReflection;
  let indexTemplate: Handlebars.TemplateDelegate;

  beforeAll(async () => {
    project = await global.bootstrap(['reflections.ts']);
    indexTemplate = global.getTemplate('index');
    global.stubHelpers(['breadcrumbs']);
  });

  test(`should compile readme`, () => {
    expect(
      global.compileTemplate(indexTemplate, {
        model: project,
        project: project,
      }),
    ).toMatchSnapshot();
  });
});
