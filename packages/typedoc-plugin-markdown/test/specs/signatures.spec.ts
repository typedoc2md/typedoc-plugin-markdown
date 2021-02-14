import * as Handlebars from 'handlebars';
import { SignatureReflection } from 'typedoc';

import { TestApp } from '../test-app';

describe(`Signatures:`, () => {
  let testApp: TestApp;
  let partial: Handlebars.TemplateDelegate;
  beforeAll(async () => {
    testApp = new TestApp(['signatures.ts']);
    await testApp.bootstrap();
    TestApp.stubPartials(['member.sources']);
    partial = TestApp.getPartial('member.signature');
  });

  test(`should compile callable signature'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('CallableSignature').signatures[0],
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with a flag'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('privateFunction')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with params'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithParameters')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function that returns an object'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionReturningAnObject')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with type params'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithTypeParams')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with rest params'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithRest')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with optional params'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithOptionalParam')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with union types'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithUnionTypes')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with default values'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithDefaults')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with @return comments'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('commentsInReturn')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile named parameters'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithNamedParams')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile named parameters with comments'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithNamedParamsAndComments')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile pipes in params and comments'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithPipesInParamsAndComments')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with reference type'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithReferenceType')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });
});
