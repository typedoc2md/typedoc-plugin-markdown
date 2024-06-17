import * as fs from 'fs';
import * as path from 'path';
import { Comment } from 'typedoc';
import { FrontmatterNamingConvention } from '../../dist/options/maps';
import { getFrontmatterTags } from '../../dist/tags';

describe(`Options:`, () => {
  beforeAll(async () => {});

  describe(`YAML`, () => {
    test(`should prepend frontmatter`, async () => {
      const pageContent = fs
        .readFileSync(
          path.join(__dirname, '../out/options/interfaces/SomeInterface.md'),
        )
        .toString();
      expect(pageContent).toMatchSnapshot();
    });

    test(`should prepend frontmatter with preserved tags`, async () => {
      const pageContent = fs
        .readFileSync(
          path.join(__dirname, '../out/options-2/interfaces/SomeInterface.md'),
        )
        .toString();
      expect(pageContent).toMatchSnapshot();
    });

    test(`should prepend frontmatter for readme page`, async () => {
      const pageContent = fs
        .readFileSync(path.join(__dirname, '../out/options-2/README.md'))
        .toString();
      expect(pageContent).toMatchSnapshot();
    });

    test(`should prepend frontmatter to index page`, async () => {
      const pageContent = fs
        .readFileSync(path.join(__dirname, '../out/options-2/globals.md'))
        .toString();
      expect(pageContent).toMatchSnapshot();
    });
  });

  describe(`Tags`, () => {
    let comment: Comment;
    beforeEach(() => {
      comment = {
        blockTags: [
          { tag: '@tagOne', content: [{ kind: 'text', text: '0' }] },
          {
            tag: '@tagTwo',
            content: [{ kind: 'text', text: 'Tag' }],
          },
        ],
      } as any;
    });

    test(`should ignore tags not defined`, () => {
      const tags = getFrontmatterTags(
        comment,
        [],
        FrontmatterNamingConvention.CamelCase,
      );
      expect(tags).toEqual({});
    });

    test(`should filter defined tags`, () => {
      const tags = getFrontmatterTags(
        comment,
        ['tagTwo'],
        FrontmatterNamingConvention.CamelCase,
      );
      expect(tags).toEqual({
        tagTwo: 'Tag',
      });
    });

    test(`should convert variable name to 'snakeCase'`, () => {
      const tags = getFrontmatterTags(
        comment,
        ['tagTwo'],
        FrontmatterNamingConvention.SnakeCase,
      );
      expect(tags).toEqual({
        tag_two: 'Tag',
      });
    });
  });
});
