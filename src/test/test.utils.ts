import * as fs from 'fs-extra';
import * as path from 'path';
import { Application, DeclarationReflection, NavigationItem, UrlMapping } from 'typedoc';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';
import { MarkdownPlugin } from '../lib/plugin';

export enum Fixture {
  Variable = 'variable',
  Comment = 'comment',
  Classes = 'classes',
  LiteralObject = 'literal-object',
  LiteralType = 'literal-type',
  Function = 'function',
  Destructuring = 'destructuring',
}

export function getReflectionByName(fixture: DeclarationReflection, name: string) {
  const match = fixture.children[0].children.find(child => {
    return child.name === name;
  });
  return match;
}

export function getFixture(fixture: Fixture): DeclarationReflection {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, `./fixtures/ts/${fixture}.ts.json`)).toString());
}

export function getNavigationMock() {
  const navMock = new NavigationItem('project', 'globals.md');
  const navSection = new NavigationItem('Section', 'README.md');
  navSection.children = [new NavigationItem('Subsection 1', 'sub-section-1.md'), new NavigationItem('Subsection 2', 'sub-section-2.md')];
  navMock.children = [navSection];
  return navMock;
}

export function bootstrapTheme(options?: Array<{ name: string; value: string }>) {
  const app = new Application({
    module: 'CommonJS',
    target: 'ES5',
    theme: 'markdown',
  });
  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: (docusaurus|gitbook|bitbucket) Specifies the markdown target.',
    name: 'platform',
    type: ParameterType.String,
  });
  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Deprectated - use --platform.',
    name: 'mdEngine',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Suppress file sources from output.',
    name: 'mdHideSources',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'The repository to use for source files (ignored unless markdownFlavour is set)',
    name: 'mdSourceRepo',
    type: ParameterType.String,
  });
  if (options) {
    options.forEach(option => {
      app.options.setValue(option.name, option.value);
    });
  }
  app.converter.addComponent('markdown', new MarkdownPlugin(app.converter));
  const project = app.convert(app.expandInputFiles(['./src/test/examples']));
  return { project, theme: app.renderer.theme };
}

export function getExpectedUrls(urlMappings: UrlMapping[]) {
  const expectedUrls = [];
  urlMappings.forEach(urlMapping => {
    expectedUrls.push(urlMapping.url);
    urlMapping.model.children.forEach(reflection => {
      expectedUrls.push(reflection.url);
    });
  });
  return expectedUrls;
}

export const handlebarsHelpersOptionsStub = {
  fn: () => 'true',
  inverse: () => 'false',
  hash: {},
};
