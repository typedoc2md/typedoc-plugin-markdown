import { ProjectReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme-context';

describe(`Signatures:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['signatures.ts'], {
      stubPartials: ['sources'],
    }));
    context.activeLocation = 'signatures.md';
  });

  test(`should compile callable signature'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('CallableSignature') as any).signatures[0],
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with a flag'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('privateFunction') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with params'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithParameters') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function that returns an object'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionReturningAnObject') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a promise that returns an object'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('promiseReturningAnObject') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a promise that returns a symbol'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('promiseReturningASymbol') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function that returns a function'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionReturningAFunction') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with rest params'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithRest') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with optional params'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithOptionalParam') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with union types'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithUnionTypes') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with default values'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithDefaults') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with @return comments'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('commentsInReturn') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile named parameters'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithNamedParams') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile named parameters with comments'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithNamedParamsAndComments') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile pipes in params and comments'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithPipesInParamsAndComments') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with reference type'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithReferenceType') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with nested typen params'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithNestedParams') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile class with constructor'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('ClassWithConstructor') as any).children[0]
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });
});
