import * as Handlebars from 'handlebars';

import { TestApp } from '../../../test/utils';

describe(`[helpers] declarationTitle`, () => {
  let testApp: TestApp;
  beforeAll(() => {
    testApp = new TestApp(['variables']);
    testApp.bootstrap();
  });

  test(`should compile`, () => {
    expect(
      Handlebars.helpers.declarationTitle.call(
        testApp.project.findReflectionByName('color'),
      ),
    ).toMatchSnapshot();
  });
});
