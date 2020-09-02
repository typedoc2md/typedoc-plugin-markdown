import * as Handlebars from 'handlebars';

import { TestApp } from '../../../test/utils';

describe(`[helpers] signatureTitle`, () => {
  let testApp: TestApp;
  beforeAll(() => {
    testApp = new TestApp(['functions']);
    testApp.bootstrap();
  });
  test(`should compile`, () => {
    const data = testApp.project.findReflectionByName(
      'functionWithParameters',
    ) as any;
    const result = Handlebars.helpers.signatureTitle.call(data.signatures[0]);
    expect(result).toMatchSnapshot();
  });
});
