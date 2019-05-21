import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { commentTags } from './comment-tags';

describe(`tags helper`, () => {
  test(`should compile`, () => {
    const data = getReflectionByName(getFixture(Fixture.Comment), 'CommentedClass').comment.tags;
    const result = commentTags.call(data);
    expect(result).toMatchSnapshot();
  });
});
