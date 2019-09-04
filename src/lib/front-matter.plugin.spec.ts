import { PageEvent } from 'typedoc/dist/lib/output/events';
import { DUMMY_APPLICATION_OWNER } from 'typedoc/dist/lib/utils/component';

import { FrontMatterPlugin } from './front-matter.plugin';

describe(`front matter plugin`, () => {
  const frontMatterPlugin = new FrontMatterPlugin(DUMMY_APPLICATION_OWNER);

  test(`should prepend YAML block to start of page`, () => {
    const spy = jest.spyOn(frontMatterPlugin, 'getTitleFromNavigation').mockReturnValue('Page title');
    const page = {
      contents: '[CONTENT]',
      url: 'modules/_access_access_.md',
      model: { name: '"access/access"' },
      project: { url: 'index.md' },
    } as PageEvent;
    frontMatterPlugin.onPageEnd(page);
    expect(page.contents).toMatchSnapshot();
    spy.mockRestore();
  });

  test(`should set id`, () => {
    const page = { url: 'modules/_access_access_.md' } as PageEvent;
    expect(frontMatterPlugin.getId(page)).toMatchSnapshot();
  });

  test(`should set correct title for index page`, () => {
    const page = {
      url: 'index.md',
      project: { url: 'index.md', name: 'Project name' },
    } as PageEvent;
    expect(frontMatterPlugin.getTitle(page)).toMatchSnapshot();
  });

  test(`should set correct title for pages without a navigation match`, () => {
    const spy = jest.spyOn(frontMatterPlugin, 'getTitleFromNavigation').mockReturnValue(null);
    const page = {
      url: 'index.md',
      project: { url: 'page.md', name: 'Project name' },
    } as PageEvent;
    expect(frontMatterPlugin.getTitle(page)).toMatchSnapshot();
    spy.mockRestore();
  });

  test(`should set correct title for index page if packageInfo label available`, () => {
    const page = {
      url: 'index.md',
      project: { url: 'index.md', packageInfo: { label: 'Package Label' } },
    } as PageEvent;
    expect(frontMatterPlugin.getTitle(page)).toMatchSnapshot();
  });

  test(`should compile set correct label for index without a README`, () => {
    const spy = jest.spyOn(frontMatterPlugin, 'getTitleFromNavigation').mockReturnValue(null);
    const page = {
      url: 'index.md',
      project: { url: 'index.md' },
    } as PageEvent;
    expect(frontMatterPlugin.getLabel(page)).toMatchSnapshot();
    spy.mockRestore();
  });

  test(`should set correct label for index with a README`, () => {
    const spy = jest.spyOn(frontMatterPlugin, 'getTitleFromNavigation').mockReturnValue(null);
    const page = {
      url: 'index.md',
      project: { url: 'index.md', readme: 'README' },
    } as PageEvent;
    expect(frontMatterPlugin.getLabel(page)).toMatchSnapshot();
    spy.mockRestore();
  });

  test(`should  set correct label for globals file`, () => {
    const page = {
      url: 'globals.md',
      project: { url: 'index.md' },
    } as PageEvent;
    expect(frontMatterPlugin.getLabel(page)).toMatchSnapshot();
  });

  test(`should parse a quoted string`, () => {
    expect(frontMatterPlugin.escapeYAMLString(`xyx's "quoted" title`)).toMatchSnapshot();
  });

  test(`should find title from navigation object`, () => {
    const page = {
      navigation: {
        children: [
          {
            url: 'urla',
            title: 'titlea',
            children: [
              { url: 'urla1', title: 'titlea1' },
              { url: 'urlb2', title: 'titleb2', children: [{ url: 'urlc1', title: 'titlec1' }] },
            ],
          },
          { url: 'urlb', title: 'titleb' },
        ],
      },
    } as PageEvent;
    expect(frontMatterPlugin.getTitleFromNavigation(page, 'urlb')).toEqual('titleb');
    expect(frontMatterPlugin.getTitleFromNavigation(page, 'urla1')).toEqual('titlea1');
    expect(frontMatterPlugin.getTitleFromNavigation(page, 'urlc1')).toEqual('titlec1');
    expect(frontMatterPlugin.getTitleFromNavigation(page, 'url')).toEqual(null);
  });
});
