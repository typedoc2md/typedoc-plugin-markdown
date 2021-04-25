import { getPluginOptions } from '../../dist/options';
import { PluginOptions } from '../../src/types';

describe(`Options:`, () => {
  test(`should return default options`, () => {
    expect(
      getPluginOptions('/site-dir', { entryPoints: ['entrypoint.ts'] }),
    ).toMatchSnapshot();
  });
  test(`should merge plugins`, () => {
    expect(
      getPluginOptions('/site-dir', {
        plugin: ['plugin-xyz'],
      }).plugin,
    ).toMatchSnapshot();
  });

  test(`should merge null sidebar`, () => {
    expect(
      getPluginOptions('/site-dir', {
        sidebar: null,
      } as PluginOptions).sidebar,
    ).toBeNull();
  });

  test(`should merge custom sidebar options`, () => {
    expect(
      getPluginOptions('/site-dir', {
        sidebar: {
          sidebarFile: 'custom-sidebar.js',
          fullNames: true,
          indexLabel: 'Custom index',
          readmeLabel: 'Custom readme',
        },
      } as PluginOptions).sidebar,
    ).toMatchSnapshot();
  });
});
