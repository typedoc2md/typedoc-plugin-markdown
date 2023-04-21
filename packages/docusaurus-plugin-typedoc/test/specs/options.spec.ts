import { getPluginOptions } from '../../dist/options';
import { PluginOptions } from '../../src/models';

describe(`Options:`, () => {
  test(`should return default options`, () => {
    expect(
      getPluginOptions({ entryPoints: ['entrypoint.ts'] }),
    ).toMatchSnapshot();
  });
  test(`should merge plugins`, () => {
    expect(
      getPluginOptions({
        plugin: ['plugin-xyz'],
      }).plugin,
    ).toMatchSnapshot();
  });

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
