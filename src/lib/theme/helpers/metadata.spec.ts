import { ProjectReflection, Renderer } from 'typedoc';
import { Fixture, getFixture } from '../../../test/test.utils';
import { MarkdownPlugin } from '../../plugin';
import { DocusaurusTheme } from '../theme.docusaurus';
import { metadata } from './metadata';

jest.mock('../../plugin');
jest.mock('../theme');

describe(`metadata helper`, () => {
  test(`should compile`, () => {
    MarkdownPlugin.theme = new DocusaurusTheme({} as Renderer, '/', {});
    MarkdownPlugin.theme.navigationTitlesMap = {
      ['xyz.md']: `xyx's title`,
    };
    MarkdownPlugin.project = {
      packageInfo: { name: 'typedoc-test' },
    } as ProjectReflection;
    MarkdownPlugin.settings = { readme: 'none' };
    const data = {
      url: 'xyz.md',
      model: getFixture(Fixture.Variable).children[0],
    };
    const result = metadata.call(data);
    expect(result).toMatchSnapshot();
  });
});
