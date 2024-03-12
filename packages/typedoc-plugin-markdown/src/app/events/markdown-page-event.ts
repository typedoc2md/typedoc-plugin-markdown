import { Event, ProjectReflection, Reflection } from 'typedoc';

export class MarkdownPageEvent<out Model = Reflection> extends Event {
  project!: ProjectReflection;
  filename!: string;
  url!: string;
  contents?: string;
  frontmatter?: any;
  pageHeadings: any;
  readonly model: Model;
  static readonly BEGIN = 'beginPage';
  static readonly END = 'endPage';
  constructor(name: string, model: Model) {
    super(name);
    this.model = model;
  }
}
