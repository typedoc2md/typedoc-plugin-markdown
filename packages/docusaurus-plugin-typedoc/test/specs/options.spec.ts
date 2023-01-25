import { getPluginOptions } from '../../dist/options';
import { PluginOptions } from '../../src/types';

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
          fullNames: true,
          indexLabel: 'Custom index',
        },
      } as PluginOptions).sidebar,
    ).toMatchSnapshot();
  });
});
