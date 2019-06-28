import { mocked } from 'ts-jest/utils';

import { MarkdownPlugin } from '../../plugin';
import { MarkdownTheme } from '../theme';
import { breadcrumbs } from './breadcrumbs';

jest.mock('../../plugin');

describe(`breadcrumbs helper`, () => {
  test(`should compie`, () => {
    mocked(MarkdownPlugin).settings = {};
    mocked(MarkdownPlugin).theme = { hasGlobalsFile: true } as MarkdownTheme;
    const page = {
      project: { name: 'typedoc-plugin-markdown', url: 'globals.md' },
      model: {
        name: 'Animal',
        parent: { name: 'Classes', url: 'modules/_classes_.md', parent: {} },
        url: 'classes/_classes_.animal.md',
      },
    };
    expect(breadcrumbs.call(page)).toMatchSnapshot();
  });
});
