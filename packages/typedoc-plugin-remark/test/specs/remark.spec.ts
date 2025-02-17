import * as fs from 'fs';
import * as path from 'path';

describe(`Remark`, () => {
  test(`should parse members index`, () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/members/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse members module page`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/members/module-1/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse members class page`, async () => {
    const contents = fs
      .readFileSync(
        path.join(__dirname, '../out/members/module-1/classes/SomeClass.md'),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });

  /*test(`should parse modules index`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/modules/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });*/

  test(`should parse modules module page`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/modules/module-1.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse globals page`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/globals/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse globals page without toc`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/globals-notoc/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse mdx`, async () => {
    const contents = fs
      .readFileSync(
        path.join(__dirname, '../out/globals-mdx/functions/some_function.mdx'),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });

  /*test(`should parse Class with toc`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/toc-md/classes/Class.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse TypeAlias with toc`, async () => {
    const contents = fs
      .readFileSync(
        path.join(
          __dirname,
          '../out/toc-md/type-aliases/TypeAliasWithTypeDeclaration.md',
        ),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse simple TypeAlias with toc`, async () => {
    const contents = fs
      .readFileSync(
        path.join(__dirname, '../out/toc-md/type-aliases/SimpleTypeAlias.md'),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });*/
});
