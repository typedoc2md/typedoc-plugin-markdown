import { breadcrumbs } from './breadcrumbs';

describe(`breadcrumbs helper`, () => {
  test(`should compie`, () => {
    const page = {
      project: { name: 'typedoc-plugin-markdown', url: 'globals.md' },
      model: { name: 'Animal', parent: { name: 'Classes', url: 'modules/_classes_.md', parent: {} }, url: 'classes/_classes_.animal.md' },
    };
    expect(breadcrumbs.call(page)).toMatchSnapshot();
  });
});
