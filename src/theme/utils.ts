import { getOptions, getResources } from './props';

/**
 * Global props and util methods
 */

/**
 * Returns the specified markdown engine
 */
export function getMarkdownEngine() {
  const options = getOptions();
  const specifiedEngine = options.mdEngine || options.mdFlavour || 'github';
  return specifiedEngine as 'github' | 'bitbucket' | 'gitbook';
}

/**
 * Returns a compiled partial
 * @param partialName
 * @param data
 */
export function compilePartial(partialName: string, data: {}) {
  const template = getResources()
    .partials.getResource(partialName)
    .getTemplate();
  return template(data);
}

/**
 * Returns compiled template
 * @param templateName
 * @param data
 */
export function compileTemplate(templateName: string, data: {}) {
  const template = getResources()
    .templates.getResource(templateName)
    .getTemplate();
  return template(data);
}

/**
 * Takes an anchor ref and returns id friendly string
 * @param ref
 */
export function getAnchorRef(ref: string) {
  return ref
    .replace(/_|\/|\.| /g, '-')
    .replace(/"/g, '')
    .replace(/ /g, '-');
}
