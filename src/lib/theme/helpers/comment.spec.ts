import { mocked } from 'ts-jest/utils';
import { DeclarationReflection, Reflection } from 'typedoc';
import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { MarkdownPlugin } from '../../plugin';
import { MarkdownTheme } from '../theme';
import { comment } from './comment';

jest.mock('../../plugin');
jest.mock('../theme');

let commentsFixture: DeclarationReflection;

describe(`comment helper`, () => {
  beforeAll(() => {
    commentsFixture = getFixture(Fixture.Comment);
    mocked(MarkdownPlugin).theme = {} as MarkdownTheme;
    mocked(MarkdownPlugin).reflection = {
      findReflectionByName: name => {
        return { url: 'reflection-url_.md' };
      },
    } as Reflection;
    mocked(MarkdownPlugin).settings = { includes: './src/test/fixtures/inc/', media: './src/test/fixtures/media/' };
  });

  test(`should compile shortText`, () => {
    const data = getReflectionByName(commentsFixture, 'CommentedClass').comment;
    const result = comment.call(data.shortText);
    expect(result).toMatchSnapshot();
  });

  test(`should compile text`, () => {
    const data = getReflectionByName(commentsFixture, 'CommentedClass').comment;
    const result = comment.call(data.text);
    expect(result).toMatchSnapshot();
  });

  test(`should compile comments from include file`, () => {
    const data = getReflectionByName(getFixture(Fixture.Classes), 'BaseClass').comment;
    const result = comment.call(data.text);
    expect(result).toMatchSnapshot();
  });
});
