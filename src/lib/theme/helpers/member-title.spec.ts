import { mocked } from 'ts-jest/utils';

import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { MarkdownPlugin } from '../../plugin';
import { memberTitle } from './member-title';

jest.mock('../../plugin');
jest.mock('../theme');
describe(`memberTitle helper`, () => {
  beforeAll(() => {
    mocked(MarkdownPlugin).settings = {};
  });
  test(`should compile`, () => {
    const data = getReflectionByName(getFixture(Fixture.Variable), 'myConst');
    const result = memberTitle.call(data);
    expect(result).toMatchSnapshot();
  });
  test(`should compile`, () => {
    mocked(MarkdownPlugin).settings = { namedAnchors: true };
    const data = getReflectionByName(getFixture(Fixture.Variable), 'myConst');
    const result = memberTitle.call(data);
    expect(result).toMatchSnapshot();
  });
});
