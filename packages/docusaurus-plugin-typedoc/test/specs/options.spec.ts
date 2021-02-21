import { getOptions } from '../../src/options';
import { PluginOptions } from '../../src/types';

describe(`Options:`, () => {
  test(`should return default options`, () => {
    expect(
      getOptions('/site-dir', { entryPoints: ['entrypoint.ts'] }),
    ).toMatchSnapshot();
  });
  test(`should merge plugins`, () => {
    expect(
      getOptions('/site-dir', {
        plugin: ['plugin-xyz'],
      }).plugin,
    ).toMatchSnapshot();
  });

  test(`should merge null sidebar`, () => {
    expect(
      getOptions('/site-dir', {
        sidebar: null,
      } as PluginOptions).sidebar,
    ).toBeNull();
  });

  test(`should merge custom sidebar options`, () => {
    expect(
      getOptions('/site-dir', {
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
