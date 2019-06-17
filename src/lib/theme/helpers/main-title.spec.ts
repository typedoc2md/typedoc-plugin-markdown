import { mocked } from 'ts-jest/utils';

import { MarkdownPlugin } from '../../plugin';
import { MarkdownTheme } from '../theme';
import { mainTitle } from './main-title';

jest.mock('../../plugin');
jest.mock('../theme');

describe(`mainTitle helper`, () => {
  test(`should compile`, () => {
    mocked(MarkdownPlugin).theme = { indexName: 'README.md' } as MarkdownTheme;
    const data = {
      model: {
        name: 'Reflection title',
        url: 'pagex.md',
      },
    };
    const result = mainTitle.call(data);
    expect(result).toMatchSnapshot();
  });
});
