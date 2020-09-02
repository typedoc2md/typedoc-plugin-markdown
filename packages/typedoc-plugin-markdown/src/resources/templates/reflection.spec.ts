import * as path from 'path';

import * as fs from 'fs-extra';
import * as Handlebars from 'handlebars';

import {
  TestApp,
  compileHandlabrs,
  stubHelpers,
  stubPartials,
} from '../../../test/utils';

describe(`[template] reflection.hbs`, () => {
  let testApp: TestApp;
  let template: Handlebars.TemplateDelegate;

  beforeAll(() => {
    testApp = new TestApp(['reflections']);
    testApp.bootstrap(false);
    stubPartials();
    stubHelpers();
    const partial = fs.readFileSync(path.resolve(__dirname, 'reflection.hbs'));
    template = Handlebars.compile(partial.toString());
  });

  beforeEach(() => {
    Handlebars.registerHelper('ifShowIndexes', (options) => options.fn());
  });

  test(`should compile reflection with type params / implemented by`, () => {
    expect(
      compileHandlabrs(
        template,
        testApp.project.findReflectionByName('TypeParamsInterface'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a callable reflection`, () => {
    expect(
      compileHandlabrs(
        template,
        testApp.project.findReflectionByName('CallableInterface'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile an indexable reflection`, () => {
    expect(
      compileHandlabrs(
        template,
        testApp.project.findReflectionByName('IndexableInterface'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile reflection without index`, () => {
    Handlebars.registerHelper('ifShowIndexes', (options) => options.inverse());
    expect(
      compileHandlabrs(
        template,
        testApp.project.findReflectionByName('TypeParamsInterface'),
      ),
    ).toMatchSnapshot();
  });
});
