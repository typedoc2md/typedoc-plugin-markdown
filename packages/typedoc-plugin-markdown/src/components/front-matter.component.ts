import * as path from 'path';
import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { reflectionTitle } from '../resources/helpers/reflection-title';

@Component({ name: 'frontmatter' })
export class FrontMatterComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();
    this.listenTo(this.application.renderer, {
      [PageEvent.END]: this.onPageEnd,
    });
  }

  onPageEnd(page: PageEvent) {
    if (page.contents) {
      page.contents = page.contents
        .replace(/^/, this.getYamlString(this.getYamlItems(page)) + '\n\n')
        .replace(/[\r\n]{3,}/g, '\n\n');
    }
  }

  getYamlString(yamlItems: { [key: string]: string | number | boolean }) {
    const yaml = `---
${Object.entries(yamlItems)
  .map(
    ([key, value]) =>
      `${key}: ${
        typeof value === 'string' ? `"${this.escapeYAMLString(value)}"` : value
      }`,
  )
  .join('\n')}
---`;
    return yaml;
  }

  getYamlItems(page: PageEvent) {
    return this.getDefaultValues(page);
  }

  getDefaultValues(page: PageEvent) {
    return {
      id: this.getId(page),
      title: this.getTitle(page),
    };
  }

  getId(page: PageEvent) {
    return path.basename(page.url, path.extname(page.url));
  }

  getTitle(page: PageEvent) {
    return reflectionTitle.call(page, false, false);
  }

  // prettier-ignore
  escapeYAMLString(str: string) {
    return str.replace(/([^\\])'/g, '$1\\\'').replace(/\"/g, '');
  }
}
