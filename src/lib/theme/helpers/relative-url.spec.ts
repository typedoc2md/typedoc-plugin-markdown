import { mocked } from 'ts-jest/utils';
import { MarkdownPlugin } from '../../plugin';
import { relativeUrl } from './relative-url';

jest.mock('../../plugin');
jest.mock('../theme');

describe(`relativeUrl helper`, () => {
  test(`should compile`, () => {
    mocked(MarkdownPlugin).location = 'interfaces/interface.md';
    const result = relativeUrl('modules/classes.md');
    expect(result).toMatchSnapshot();
  });
});
