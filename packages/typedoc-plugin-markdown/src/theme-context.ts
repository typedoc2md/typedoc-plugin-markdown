import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import { ContainerReflection, PageEvent, Reflection } from 'typedoc';
import type * as ts from 'typescript';
import { MarkdownTheme } from '.';
import { URL_PREFIX } from './constants';
import breadcrumbsHelper from './resources/helpers/breadcrumbs';
import commentHelper from './resources/helpers/comment';
import commentsHelper from './resources/helpers/comments';
import declarationTitleHelper from './resources/helpers/declaration-title';
import escapeHelper from './resources/helpers/escape';
import hierarchyHelper from './resources/helpers/hierarchy';
import ifIsReference from './resources/helpers/if-is-reference';
import ifNamedAnchors from './resources/helpers/if-named-anchors';
import ifShowBreadcrumbsHelper from './resources/helpers/if-show-breadcrumbs';
import ifShowNamedAnchorsHelper from './resources/helpers/if-show-named-anchors';
import ifShowPageTitleHelper from './resources/helpers/if-show-page-title';
import ifShowReturnsHelper from './resources/helpers/if-show-returns';
import ifShowTypeHierarchyHelper from './resources/helpers/if-show-type-hierarchy';
import indexSignatureTitleHelper from './resources/helpers/index-signature-title';
import memberSymbolHelper from './resources/helpers/member-symbol';
import parameterTableHelper from './resources/helpers/parameter-table';
import propertyTableHelper from './resources/helpers/property-table';
import referenceMember from './resources/helpers/reference-member';
import reflectionPathHelper from './resources/helpers/reflection-path';
import reflectionTitleHelper from './resources/helpers/reflection-title';
import signatureTitleHelper from './resources/helpers/signature-title';
import tocHelper from './resources/helpers/toc';
import typeHelper from './resources/helpers/type';
import typeAndParentHelper from './resources/helpers/type-and-parent';
import typeParameterTableHelper from './resources/helpers/type-parameter-table';

const templatePath = path.join(__dirname, 'resources', 'templates');

export class MarkdownThemeContext {
  options: any;

  constructor(private theme: MarkdownTheme, options: any) {
    this.options = options.getRawValues();

    this.registerHelpers();
    this.registerPartials();
  }

  relativeURL(url: string | undefined) {
    if (!url) {
      return;
    }
    if (URL_PREFIX.test(url)) {
      return url;
    }
    if (this.options.publicPath) {
      return this.options.publicPath + url;
    }

    const relative = path.relative(
      path.dirname(this.theme.location),
      path.dirname(url),
    );

    return path.join(relative, path.basename(url)).replace(/\\/g, '/');
  }

  urlTo = (reflection: Reflection) => this.relativeURL(reflection.url);

  reflection = () => this.theme.reflection;

  project = () => this.theme.project;

  attemptExternalResolution = (symbol: ts.Symbol | undefined) => {
    return this.theme.owner.attemptExternalResolution(symbol);
  };

  readmeTemplate = (props: PageEvent<ContainerReflection>) =>
    this.compileTemplate(props, 'readme.hbs');

  indexTemplate = (props: PageEvent<ContainerReflection>) =>
    this.compileTemplate(props, 'index.hbs');

  reflectionTemplate = (props: PageEvent<ContainerReflection>) =>
    this.compileTemplate(props, 'reflection.hbs');

  reflectionMemberTemplate = (props: PageEvent<ContainerReflection>) =>
    this.compileTemplate(props, 'reflection.member.hbs');

  compileTemplate = (props: PageEvent<ContainerReflection>, name: string) =>
    Handlebars.compile(
      fs.readFileSync(path.join(templatePath, name)).toString(),
    )(props, {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true,
    });

  registerPartials = () => {
    const partialsFolder = path.join(__dirname, 'resources', 'partials');
    const partialFiles = fs.readdirSync(partialsFolder);
    partialFiles.forEach((partialFile) => {
      const partialName = path.basename(partialFile, '.hbs');
      const partialContent = fs
        .readFileSync(partialsFolder + '/' + partialFile)
        .toString();
      Handlebars.registerPartial(partialName, partialContent);
    });
  };

  registerHelpers = () => {
    breadcrumbsHelper(this);
    commentHelper(this);
    commentsHelper();
    declarationTitleHelper();
    escapeHelper();
    hierarchyHelper();
    ifIsReference();
    ifNamedAnchors(this);
    ifShowBreadcrumbsHelper(this);
    ifShowNamedAnchorsHelper(this);
    ifShowPageTitleHelper(this);
    ifShowReturnsHelper();
    ifShowTypeHierarchyHelper();
    indexSignatureTitleHelper();
    memberSymbolHelper();
    parameterTableHelper();
    propertyTableHelper();
    referenceMember(this);
    reflectionPathHelper(this);
    reflectionTitleHelper(this);
    signatureTitleHelper();
    tocHelper(this);
    typeHelper(this);
    typeAndParentHelper(this);
    typeParameterTableHelper();
  };
}
