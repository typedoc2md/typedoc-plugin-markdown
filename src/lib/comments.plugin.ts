import * as FS from 'fs-extra';
import * as Handlebars from 'handlebars';
import * as Path from 'path';
import { MarkedLinksPlugin, Reflection } from 'typedoc';
import { Component, ContextAwareRendererComponent } from 'typedoc/dist/lib/output/components';
import { RendererEvent } from 'typedoc/dist/lib/output/events';

@Component({ name: 'comments' })
export class CommentsPlugin extends ContextAwareRendererComponent {
  /**
   * The path referenced files are located in.
   */
  private includes?: string;

  /**
   * Path to the output media directory.
   */
  private mediaDirectory?: string;

  /**
   * The pattern used to find references in markdown.
   */
  private includePattern: RegExp = /\[\[include:([^\]]+?)\]\]/g;

  /**
   * The pattern used to find media links.
   */
  private mediaPattern: RegExp = /media:\/\/([^ "\)\]\}]+)/g;

  /**
   * Regular expression for detecting bracket links.
   */
  private brackets: RegExp = /\[\[([^\]]+)\]\]/g;

  /**
   * Regular expression for detecting inline tags like {@link ...}.
   */
  private inlineTag: RegExp = /(?:\[(.+?)\])?\{@(link|linkcode|linkplain)\s+((?:.|\n)+?)\}/gi;

  listInvalidSymbolLinks: boolean;

  private warnings: string[] = [];

  /**
   * Create a new MarkedPlugin instance.
   */
  initialize() {
    super.initialize();

    this.listenTo(
      this.owner,
      {
        [RendererEvent.END]: this.onEndRenderer,
      },
      undefined,
      100,
    );

    const that = this;

    Handlebars.registerHelper('comment', function(this: string) {
      return that.parseMarkdown(this);
    });
  }

  /**
   * Parse the given markdown string and return the resulting html.
   *
   * @param text  The markdown string that should be parsed.
   * @param context  The current handlebars context.
   * @returns The resulting html string.
   */
  public parseMarkdown(text: string) {
    const context = Object.assign(text, '');

    this.includes = this.application.options.getValue('includes');
    this.mediaDirectory = this.application.options.getValue('media');
    this.listInvalidSymbolLinks = this.application.options.getValue('listInvalidSymbolLinks');

    if (this.includes) {
      text = text.replace(this.includePattern, (match: string, path: string) => {
        path = Path.join(this.includes!, path.trim());
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
        if (FS.existsSync(Path.join(this.mediaDirectory!, path))) {
          return this.getRelativeUrl('media') + '/' + path;
        } else {
          return match;
        }
      });
    }

    return this.replaceInlineTags(this.replaceBrackets(text));
  }

  /**
   * Find all references to symbols within the given text and transform them into a link.
   *
   * This function is aware of the current context and will try to find the symbol within the
   * current reflection. It will walk up the reflection chain till the symbol is found or the
   * root reflection is reached. As a last resort the function will search the entire project
   * for the given symbol.
   *
   * @param text  The text that should be parsed.
   * @returns The text with symbol references replaced by links.
   */
  private replaceBrackets(text: string): string {
    return text.replace(this.brackets, (match: string, content: string): string => {
      const split = MarkedLinksPlugin.splitLinkText(content);
      return this.buildLink(match, split.target, split.caption);
    });
  }

  /**
   * Find symbol {@link ...} strings in text and turn into html links
   *
   * @param text  The string in which to replace the inline tags.
   * @return      The updated string.
   */
  private replaceInlineTags(text: string): string {
    return text.replace(this.inlineTag, (match: string, leading: string, tagName: string, content: string): string => {
      const split = MarkedLinksPlugin.splitLinkText(content);
      const target = split.target;
      const caption = leading || split.caption;
      const monospace = tagName === 'linkcode';

      return this.buildLink(match, target, caption, monospace);
    });
  }

  /**
   * Format a link with the given text and target.
   *
   * @param original   The original link string, will be returned if the target cannot be resolved..
   * @param target     The link target.
   * @param caption    The caption of the link.
   * @param monospace  Whether to use monospace formatting or not.
   * @returns A html link tag.
   */
  private buildLink(original: string, target: string, caption: string, monospace?: boolean): string {
    let reflection: Reflection | undefined;

    if (this.reflection) {
      reflection = this.reflection.findReflectionByName(target);
    } else if (this.project) {
      reflection = this.project.findReflectionByName(target);
    }

    if (reflection && reflection.url) {
      if (this.urlPrefix.test(reflection.url)) {
        target = reflection.url;
      } else {
        target = this.getRelativeUrl(reflection.url);
      }
    } else {
      const fullName = (this.reflection || this.project)!.getFullName();
      this.warnings.push(`In ${fullName}: ${original}`);
      return original;
    }

    if (monospace) {
      caption = '`' + caption + '`';
    }

    return `[${caption}](${target})`;
  }

  /**
   * Triggered when [[Renderer]] is finished
   */
  onEndRenderer(event: RendererEvent) {
    if (this.listInvalidSymbolLinks && this.warnings.length > 0) {
      this.application.logger.write('');
      this.application.logger.warn(
        'Found invalid symbol reference(s) in JSDocs, ' +
          'they will not render as links in the generated documentation.',
      );

      for (const warning of this.warnings) {
        this.application.logger.write('  ' + warning);
      }
    }
  }
}
