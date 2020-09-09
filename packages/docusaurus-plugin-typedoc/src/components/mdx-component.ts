import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

@Component({ name: 'docusaurus-mdx' })
export class MdxComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();
    this.listenTo(this.application.renderer, {
      [PageEvent.END]: this.onPageEnd,
    });
  }

  onPageEnd(page: PageEvent) {
    page.contents = page.contents.replace(/</g, '‹').replace(/>/g, '›');
  }
}
