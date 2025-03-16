import { MarkdownPageEvent } from '@plugin/events/index.js';
import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';

export function reflection(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  md.push(this.hook(getBeginHookName(page.model), this).join('\n'));

  if (!this.options.getValue('hidePageHeader')) {
    md.push(this.partials.header());
  }

  if (!this.options.getValue('hideBreadcrumbs')) {
    md.push(this.partials.breadcrumbs());
  }

  const includeReadme = shouldIncludeReadme(this, page.model);

  if (includeReadme && page.model.readme) {
    md.push(this.helpers.getCommentParts(page.model.readme));
  }

  if (!this.options.getValue('hidePageTitle') && !includeReadme) {
    md.push(heading(1, this.partials.pageTitle()));
  }

  md.push(this.hook('content.begin', this).join('\n'));

  if (
    [
      ReflectionKind.Module,
      ReflectionKind.Namespace,
      ReflectionKind.Enum,
      ReflectionKind.Class,
      ReflectionKind.Interface,
    ].includes(page.model.kind) ||
    (page.model.kind === ReflectionKind.TypeAlias && page.model.groups)
  ) {
    md.push(
      this.partials.memberWithGroups(page.model, {
        headingLevel: 2,
      }),
    );
  } else {
    md.push(
      this.partials.memberContainer(page.model, {
        headingLevel: 1,
      }),
    );
  }

  md.push(this.partials.footer());

  md.push(this.hook(getEndHookName(page.model), this).join('\n'));

  return md.join('\n\n');
}

function getBeginHookName(model: DeclarationReflection) {
  return model instanceof ProjectReflection ? 'index.page.begin' : 'page.begin';
}

function getEndHookName(model: DeclarationReflection) {
  return model instanceof ProjectReflection ? 'index.page.end' : 'page.end';
}

function shouldIncludeReadme(
  context: MarkdownThemeContext,
  model: DeclarationReflection,
) {
  if (model.kind === ReflectionKind.Project) {
    return context.options.getValue('mergeReadme') && Boolean(model.readme);
  }
  return Boolean(model.readme);
}
