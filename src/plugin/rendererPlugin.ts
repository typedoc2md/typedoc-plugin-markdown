import * as FS from 'fs-extra';
import * as Handlebars from 'handlebars';
import * as Path from 'path';

import { Component, ContextAwareRendererComponent } from 'typedoc/dist/lib/output/components';
import { RendererEvent } from 'typedoc/dist/lib/output/events';

import { Options } from '../theme/options';

@Component({ name: 'markdown-renderer' })
export class MarkdownRendererPlugin extends ContextAwareRendererComponent {

  /**
   * Path to the output media directory.
   */
  private mediaDirectory: any;

  /**
   * The pattern used to find references in markdown.
   */
  private includePattern: RegExp = /\[\[include:([^\]]+?)\]\]/g;

  /**
   * The pattern used to find media links.
   */
  private mediaPattern: RegExp = /media:\/\/([^ "\)\]\}]+)/g;

  /**
   * Create a new MarkedPlugin instance.
   */
  public initialize() {
    super.initialize();

    const that = this;
    Handlebars.registerHelper('parseComments', function(arg: any) { return that.parseComments(arg.fn(this), this); });
    Handlebars.registerHelper('relativeURL', (url: string) => url ? this.getRelativeUrl(url) : url);

  }

  /**
   * Parse the given markdown string and return the resulting html.
   *
   * @param text  The markdown string that should be parsed.
   * @param context  The current handlebars context.
   * @returns The resulting html string.
   */
  public parseComments(text: string, context: any) {

    if (Options.includes) {
      text = text.replace(this.includePattern, (match: string, path: string) => {
        path = Path.join(Options.includes, path.trim());
        if (FS.existsSync(path) && FS.statSync(path).isFile()) {
          const contents = FS.readFileSync(path, 'utf-8');
          if (path.substr(-4).toLocaleLowerCase() === '.hbs') {
            const template = Handlebars.compile(contents);
            return template(context);
          } else {
            return contents;
          }
        } else {
          return '';
        }
      });
    }

    if (this.mediaDirectory) {
      text = text.replace(this.mediaPattern, (match: string, path: string) => {
        if (FS.existsSync(Path.join(this.mediaDirectory, path))) {
          return this.getRelativeUrl('media') + '/' + path;
        } else {
          return match;
        }
      });
    }

    return text;
  }

  protected onBeginRenderer(event: RendererEvent) {
    super.onBeginRenderer(event);

    if (Options.media) {
      const media = Path.resolve(Options.media);
      if (FS.existsSync(media) && FS.statSync(media).isDirectory()) {
        this.mediaDirectory = Path.join(event.outputDirectory, 'media');
        FS.copySync(media, this.mediaDirectory);
      } else {
        this.mediaDirectory = null;
      }
    }
  }

}
