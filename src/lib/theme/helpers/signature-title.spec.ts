import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { signatureTitle } from './signature-title';

describe(`signatureTitle helper`, () => {
  test(`should compile`, () => {
    const data = getReflectionByName(getFixture(Fixture.Function), 'functionWithParameters');
    const result = signatureTitle.call(data.signatures[0]);
    expect(result).toMatchSnapshot();
  });
});
