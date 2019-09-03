import * as Handlebars from 'handlebars';
import { mocked } from 'ts-jest/utils';

import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { parameterTable } from './parameter-table';

describe(`parameterTable helper`, () => {
  test(`should compile`, () => {
    mocked(Handlebars).helpers.comment = () => {
      return 'Test Comments';
    };
    const data = getReflectionByName(getFixture(Fixture.Function), 'functionWithDefaults');
    const result = parameterTable.call(data.signatures[0].parameters);
    expect(result).toMatchSnapshot();
  });
});
