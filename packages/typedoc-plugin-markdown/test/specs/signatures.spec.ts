import { ProjectReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme/definition';

describe(`Signatures:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['signatures.ts'], {
      stubPartials: ['sources'],
    }));
  });

  test(`should compile callable signature'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('CallableSignature') as any).signatures[0],
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with a flag'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('privateFunction') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with params'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithParameters') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function that returns an object'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionReturningAnObject') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a promise that returns an object'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('promiseReturningAnObject') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a promise that returns a symbol'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('promiseReturningASymbol') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function that returns a function'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionReturningAFunction') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with rest params'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithRest') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with optional params'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithOptionalParam') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with union types'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithUnionTypes') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with default values'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithDefaults') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with @return comments'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('commentsInReturn') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile named parameters'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithNamedParams') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile named parameters with comments'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithNamedParamsAndComments') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile pipes in params and comments'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithPipesInParamsAndComments') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with reference type'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithReferenceType') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with nested typen params'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithNestedParams') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile class with constructor'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('ClassWithConstructor') as any).children[0]
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });
});
