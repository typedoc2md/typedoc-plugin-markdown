import { getOptions } from '../../src/options';
import { PluginOptions } from '../../src/types';

describe(`Options:`, () => {
  test(`should return default options`, () => {
    expect(
      getOptions('site-dir', { entryPoints: ['entrypoint.ts'] }),
    ).toMatchSnapshot();
  });
  test(`should merge plugins`, () => {
    expect(
      getOptions('site-dir', {
        plugin: ['plugin-xyz'],
      }).plugin,
    ).toMatchSnapshot();
  });
  test(`should not duplicate markdown plugin`, () => {
    expect(
      getOptions('site-dir', {
        plugin: ['typedoc-plugin-markdown', 'plugin-xyz'],
      }).plugin,
    ).toMatchSnapshot();
  });
  test(`should merge sidebar options`, () => {
    expect(
      getOptions('site-dir', {
        sidebar: { sidebarFile: 'custom-path.js', fullNames: true },
      } as PluginOptions).sidebar,
    ).toMatchSnapshot();
  });
});
