import { Application, Renderer } from 'typedoc';
import { MarkdownRenderer } from './markdown-renderer.js';

/**
 * The MarkdownApplication extends TypeDoc's {@linkcode Application} instance with a custom renderer.
 */
export interface MarkdownApplication extends Application {
  renderer: MarkdownRenderer & Renderer;
}
