import {
  DeclarationReflection,
  Event,
  PageEvent,
  ProjectReflection,
} from 'typedoc';

/**
 * An event emitted before frontmatter is prepended to page contents.
 */
export class FrontmatterEvent extends Event {
  /**
   * A Json object that will be parsed into YAML.
   */
  frontmatter: Record<string, any>;

  /**
   * The page that this markdown is being parsed for.
   */
  readonly page: PageEvent<ProjectReflection | DeclarationReflection>;

  static readonly PREPARE_FRONTMATTER = 'prepareFrontmatter';

  constructor(
    name: string,
    page: PageEvent<ProjectReflection | DeclarationReflection>,
    frontmatter: any,
  ) {
    super(name);
    this.page = page;
    this.frontmatter = frontmatter;
  }
}
