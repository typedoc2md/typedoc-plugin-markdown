import { Application } from 'typedoc';
import { MarkdownRenderer } from './markdown-renderer';

/**
 * This interface is essentially an extended typing of TypeDoc's {@linkcode typedoc!Application Application} instance.``
 */
export interface MarkdownApplication extends Application {
  /**
   * Re-types the `renderer` instance to {@linkcode MarkdownRenderer }.
   */
  renderer: MarkdownRenderer;
}
