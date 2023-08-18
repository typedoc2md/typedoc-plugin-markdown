import { MarkdownPageEvent } from './events';

export class UrlMapping<Model = any> {
  url: string;

  model: Model;

  template: RenderTemplate<MarkdownPageEvent<Model>>;

  constructor(
    url: string,
    model: Model,
    template: RenderTemplate<MarkdownPageEvent<Model>>,
  ) {
    this.url = url;
    this.model = model;
    this.template = template;
  }
}

export type RenderTemplate<T> = (data: T) => string;
