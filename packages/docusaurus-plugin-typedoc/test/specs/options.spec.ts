import { getPluginOptions } from '../../dist/options';
import { PluginOptions } from '../../src/models';

describe(`Options:`, () => {
  test(`should merge custom sidebar options`, () => {
    expect(
      getPluginOptions({
        sidebar: {
          position: 2,
        },
      } as PluginOptions).sidebar,
    ).toMatchSnapshot();
  });
});
