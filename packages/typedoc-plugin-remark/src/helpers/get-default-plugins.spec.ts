import { getDefaultPlugins } from './get-default-plugins';

describe('getDefaultPlugins', () => {
  it('should return an empty array when all flags are false', () => {
    const defaultPluginsFlag = {
      gfm: false,
      frontmatter: false,
      mdx: false,
    };

    const result = getDefaultPlugins(defaultPluginsFlag);

    expect(result).toEqual([]);
  });

  it('should include remark-frontmatter when frontmatter flag is true', () => {
    const defaultPluginsFlag = {
      gfm: false,
      frontmatter: true,
      mdx: false,
    };

    const result = getDefaultPlugins(defaultPluginsFlag);

    expect(result).toEqual([['remark-frontmatter', ['yaml']]]);
  });

  it('should include remark-gfm when gfm flag is true', () => {
    const defaultPluginsFlag = {
      gfm: true,
      frontmatter: false,
      mdx: false,
    };

    const result = getDefaultPlugins(defaultPluginsFlag);

    expect(result).toEqual(['remark-gfm']);
  });

  it('should include remark-mdx when mdx flag is true', () => {
    const defaultPluginsFlag = {
      gfm: false,
      frontmatter: false,
      mdx: true,
    };

    const result = getDefaultPlugins(defaultPluginsFlag);

    expect(result).toEqual(['remark-mdx']);
  });

  it('should include all plugins when all flags are true', () => {
    const defaultPluginsFlag = {
      gfm: true,
      frontmatter: true,
      mdx: true,
    };

    const result = getDefaultPlugins(defaultPluginsFlag);

    expect(result).toEqual([
      ['remark-frontmatter', ['yaml']],
      'remark-gfm',
      'remark-mdx',
    ]);
  });
});
