import { ReflectionKind } from 'typedoc';
import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

import { FrontMatterComponent } from './front-matter';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    renderer.addComponent('fm', new FrontMatterComponent(renderer));
  }

  allowedDirectoryListings() {
    return [...super.allowedDirectoryListings(), ...['_category_.yml']];
  }

  get mappings() {
    return super.mappings.map((mapping) => {
      if (mapping.kind.includes(ReflectionKind.Namespace)) {
        return {
          ...mapping,
          directory: 'namespaces',
        };
      }
      return mapping;
    });
  }
}
