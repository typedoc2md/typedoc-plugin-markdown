import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { MarkdownPlugin } from '../../plugin';
import { literal } from './literal';

describe(`literal helper`, () => {
  test(`should compile object literal`, () => {
    const data = getReflectionByName(getFixture(Fixture.LiteralObject), 'objectLiteral');
    const result = MarkdownPlugin.formatContents(literal.call(data));
    expect(result).toMatchSnapshot();
  });

  test(`should compile type literal`, () => {
    const data = getReflectionByName(getFixture(Fixture.LiteralType), 'typeLiteral');
    const result = MarkdownPlugin.formatContents(literal.call(data));
    expect(result).toMatchSnapshot();
  });
});
