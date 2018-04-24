import { MarkdownEngine } from './enums/markdown-engine.enum';

/**
 * Global props and util methods
 */
export class ThemeService {

  public static projectName: string;
  public static options: any;
  public static resources: any;

  /**
   * Returns application options
   */
  public static getOptions() {
    return this.options;
  }

  /**
   * Return application resources
   */
  public static getResources() {
    return this.resources;
  }

  /**
   * Returns the specified markdown engine
   */
  public static getMarkdownEngine() {
    const specifiedEngine = this.options.mdEngine || this.options.mdFlavour || MarkdownEngine.GITHUB;
    return specifiedEngine;
  }

  /**
   * Returns a compiled partial
   * @param partialName
   * @param data
   */
  public static compilePartial(partialName: string, data: {}) {
    const template = ThemeService.getResources().partials.getResource(partialName).getTemplate();
    return template(data);
  }

  /**
   * Returns compiled template
   * @param templateName
   * @param data
   */
  public static compileTemplate(templateName: string, data: {}) {
    const template = ThemeService.getResources().templates.getResource(templateName).getTemplate();
    return template(data);
  }

  /**
   * Takes an anchor ref and returns id friendly string
   * @param ref
   */
  public static getAnchorRef(ref: string) {
    return ref.replace(/_|\/|\.| /g, '-').replace(/"/g, '').replace(/ /g, '-').toLowerCase();
  }

}
