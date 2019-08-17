import { mocked } from 'ts-jest/utils';
import { Renderer } from 'typedoc';

import { MarkdownPlugin } from '../../plugin';
import { MarkdownTheme } from '../theme';
import { GitbookTheme } from '../theme.gitbook';
import { projectTitle } from './project-title';

jest.mock('../../plugin');
jest.mock('../theme');

describe(`projectTitle helper`, () => {
  test(`should compile`, () => {
    mocked(MarkdownPlugin).settings = { hideProjectTitle: false };
    mocked(MarkdownPlugin).theme = { indexName: 'pagex.md' } as MarkdownTheme;
    const data = {
      project: {
        name: 'Project title',
      },
      model: {
        name: 'Reflection title',
      },
    };
    const result = projectTitle.call(data);
    expect(result).toMatchSnapshot();
  });

  test(`should return empty for GitbookTheme`, () => {
    mocked(MarkdownPlugin).theme = new GitbookTheme({} as Renderer, '/', {});
    const data = {
      project: {
        name: 'Project title',
      },
      model: {
        name: 'Reflection title',
      },
    };
    const result = projectTitle.call(data);
    expect(result).toEqual('');
  });
});
