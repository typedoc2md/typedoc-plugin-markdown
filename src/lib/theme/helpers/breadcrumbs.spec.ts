import * as Handlebars from 'handlebars';
import { mocked } from 'ts-jest/utils';

import { MarkdownPlugin } from '../../plugin';
import { breadcrumbs } from './breadcrumbs';

jest.mock('../../plugin');
jest.mock('handlebars');

describe(`breadcrumbs helper`, () => {
  test(`should compie`, () => {
    mocked(Handlebars).helpers.relativeURL = () => {
      return 'url';
    };
    mocked(MarkdownPlugin).settings = {};

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
