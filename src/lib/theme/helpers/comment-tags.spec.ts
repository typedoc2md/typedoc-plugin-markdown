import * as Handlebars from 'handlebars';
import { mocked } from 'ts-jest/utils';

import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { commentTags } from './comment-tags';

describe(`commentTags helper`, () => {
  test(`should compile`, () => {
    mocked(Handlebars).helpers.comment = () => {
      return 'Test Comments';
    };
    const data = getReflectionByName(getFixture(Fixture.Comment), 'CommentedClass').comment.tags;
    const result = commentTags.call(data);
    expect(result).toMatchSnapshot();
  });
});
