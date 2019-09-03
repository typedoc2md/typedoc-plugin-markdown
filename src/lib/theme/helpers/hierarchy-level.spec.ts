import { hierachyLevel } from './hierarchy-level';

describe(`hierachyLevel helper`, () => {
  test(`should compile with extendedType`, () => {
    const data = {
      reflection: {
        extendedTypes: {},
      },
    };
    const result = hierachyLevel.call(data);
    expect(result).toMatchSnapshot();
  });

  test(`should compile without extended types`, () => {
    const data = {
      reflection: {},
    };
    const result = hierachyLevel.call(data);
    expect(result).toMatchSnapshot();
  });
});
