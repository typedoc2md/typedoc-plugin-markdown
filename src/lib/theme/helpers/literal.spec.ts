import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { MarkdownTheme } from '../theme';
import { literal } from './literal';

describe(`literal helper`, () => {
  test(`should compile object literal`, () => {
    const data = getReflectionByName(getFixture(Fixture.LiteralObject), 'objectLiteral');
    const result = MarkdownTheme.formatContents(literal.call(data));
    expect(result).toMatchSnapshot();
  });

  test(`should compile type literal`, () => {
    const data = getReflectionByName(getFixture(Fixture.LiteralType), 'typeLiteral');
    const result = MarkdownTheme.formatContents(literal.call(data));
    expect(result).toMatchSnapshot();
  });
});
