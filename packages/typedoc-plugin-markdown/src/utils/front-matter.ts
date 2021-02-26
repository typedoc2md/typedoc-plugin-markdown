import { PageEvent } from 'typedoc/dist/lib/output/events';

import { reflectionTitle } from '../resources/helpers/reflection-title';

/*
 * Front Matter variable model.
 */
export interface FrontMatterVars {
  [key: string]: string | number | boolean;
}

/*
 * Prepends YAML block to top of page.
 * @param page
 * @param vars
 */
export const addYAML = (page: PageEvent, vars: FrontMatterVars) => {
  if (page.contents) {
    page.contents = page.contents
      .replace(/^/, toYAML(vars) + '\n\n')
      .replace(/[\r\n]{3,}/g, '\n\n');
  }
};

/*
 * Returns the page title as rendered in the document h1(# title)
 * @param page
 */
export const getPageTitle = (page: PageEvent) => {
  return reflectionTitle.call(page, false);
};

/**
 * Converts YAML object to a YAML string
 * @param vars
 */
const toYAML = (vars: FrontMatterVars) => {
  const yaml = `---
${Object.entries(vars)
  .map(
    ([key, value]) =>
      `${key}: ${
        typeof value === 'string' ? `"${escapeString(value)}"` : value
      }`,
  )
  .join('\n')}
---`;
  return yaml;
};

// prettier-ignore
const escapeString=(str: string)=> {
    return str.replace(/([^\\])'/g, '$1\\\'').replace(/\"/g, '');
  }
