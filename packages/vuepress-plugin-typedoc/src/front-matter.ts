import { reflectionTitle } from 'typedoc-plugin-markdown/dist/resources/helpers/reflection-title';
import { Component } from 'typedoc/dist/lib/converter/components';
import { RendererComponent } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

@Component({ name: 'front-matter' })
export class FrontMatterComponent extends RendererComponent {
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

  getYamlItems(page: PageEvent): any {
    const pageTitle = this.getTitle(page);

    return {
      title: pageTitle,
    };
  }

  getTitle(page: PageEvent) {
    return reflectionTitle.call(page, false);
  }

  // prettier-ignore
  escapeYAMLString(str: string) {
    return str.replace(/([^\\])'/g, '$1\\\'').replace(/\"/g, '');
  }
}
