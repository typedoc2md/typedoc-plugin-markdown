import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import { BindOption, MarkedLinksPlugin, Reflection } from 'typedoc';
import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import * as Util from 'util';
import MarkdownTheme from '../theme';

/**
 * This component is essentially a combination of TypeDoc's 'MarkedPlugin' and 'MarkedLinksPlugin'.
 * The options are unchanged , but strips out all of the html configs.
 */

@Component({ name: 'comments' })
export class CommentsComponent extends ContextAwareRendererComponent {
  @BindOption('includes')
  includes!: string;

  @BindOption('media')
  mediaDirectory!: string;

  @BindOption('listInvalidSymbolLinks')
  listInvalidSymbolLinks!: boolean;

  /**
   * The pattern used to find references in markdown.
   */
  private includePattern = /\[\[include:([^\]]+?)\]\]/g;

  /**
   * The pattern used to find media links.
   */
  private mediaPattern = /media:\/\/([^ "\)\]\}]+)/g;

  /**
   * Regular expression for detecting bracket links.
   */
  private brackets = /\[\[([^\]]+)\]\]/g;

  /**
   * Regular expression for detecting inline tags like {@link ...}.
   */
  private inlineTag = /(?:\[(.+?)\])?\{@(link|linkcode|linkplain)\s+((?:.|\n)+?)\}/gi;

  private warnings: string[] = [];

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

    const component = this;

    MarkdownTheme.HANDLEBARS.registerHelper('comment', function (this: string) {
      return component.parseComments(this);
    });
  }

  /**
   * Parse the given comemnts string and return the resulting html.
   *
   * @param text  The markdown string that should be parsed.
   * @param context  The current handlebars context.
   * @returns The resulting html string.
   */
  public parseComments(text: string) {
    const context = Object.assign(text, '');

    if (this.includes) {
      text = text.replace(
        this.includePattern,
        (match: string, includesPath: string) => {
          includesPath = path.join(this.includes!, includesPath.trim());
          if (
            fs.existsSync(includesPath) &&
            fs.statSync(includesPath).isFile()
          ) {
            const contents = fs.readFileSync(includesPath, 'utf-8');
            if (includesPath.substr(-4).toLocaleLowerCase() === '.hbs') {
              const template = Handlebars.compile(contents);
              return template(context);
            } else {
              return contents;
            }
          } else {
            return '';
          }
        },
      );
    }

    if (this.mediaDirectory) {
      text = text.replace(
        this.mediaPattern,
        (match: string, mediaPath: string) => {
          if (fs.existsSync(path.join(this.mediaDirectory!, mediaPath))) {
            return (
              MarkdownTheme.HANDLEBARS.helpers.relativeURL('media') +
              '/' +
              mediaPath
            );
          } else {
            return match;
          }
        },
      );
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
    return text.replace(
      this.brackets,
      (match: string, content: string): string => {
        const split = MarkedLinksPlugin.splitLinkText(content);
        return this.buildLink(match, split.target, split.caption);
      },
    );
  }

  /**
   * Find symbol {@link ...} strings in text and turn into html links
   *
   * @param text  The string in which to replace the inline tags.
   * @return      The updated string.
   */
  private replaceInlineTags(text: string): string {
    return text.replace(
      this.inlineTag,
      (
        match: string,
        leading: string,
        tagName: string,
        content: string,
      ): string => {
        const split = MarkedLinksPlugin.splitLinkText(content);
        const target = split.target;
        const caption = leading || split.caption;
        const monospace = tagName === 'linkcode';

        return this.buildLink(match, target, caption, monospace);
      },
    );
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
  private buildLink(
    original: string,
    target: string,
    caption: string,
    monospace?: boolean,
  ): string {
    if (!this.urlPrefix.test(target)) {
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
    }

    if (monospace) {
      caption = '`' + caption + '`';
    }

    return Util.format('[%s](%s)', caption, target);
  }

  /**
   * Triggered when [[Renderer]] is finished
   */
  onEndRenderer(event: RendererEvent) {
    if (this.listInvalidSymbolLinks && this.warnings.length > 0) {
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
