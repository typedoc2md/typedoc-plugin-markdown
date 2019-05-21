import { mocked } from 'ts-jest/utils';
import { MarkdownPlugin } from '../../plugin';
import { MarkdownTheme } from '../theme';
import { reflectionTitle } from './reflection-title';

jest.mock('../../plugin');
jest.mock('../theme');

describe(`reflectionTitle helper`, () => {
  test(`should compile`, () => {
    mocked(MarkdownPlugin).theme = {} as MarkdownTheme;
    const data = {
      model: {
        name: 'Reflection title',
      },
    };
    const result = reflectionTitle.call(data);
    expect(result).toMatchSnapshot();
  });
});
