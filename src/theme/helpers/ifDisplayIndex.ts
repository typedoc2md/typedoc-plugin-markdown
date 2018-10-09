
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { MarkdownEngine } from '../enums/markdown-engine.enum';
import { ThemeService } from '../theme.service';

/**
 * Return true if index item should be displayed
 * @param item
 * @param opts
 */
export function ifDisplayIndex(member: any, opts: any) {
  const isGitBook = ThemeService.getMarkdownEngine() === MarkdownEngine.GITBOOK;
  const classModule = member.children && member.children.length ? member.children[0].kind === ReflectionKind.Class : false;
  const enumModule = member.children && member.children.length ? member.children[0].kind === ReflectionKind.Enum : false;
  const interfaceModule = member.children && member.children.length ? member.children[0].kind === ReflectionKind.Interface : false;
  if (
    member.displayReadme && isGitBook ||
    (isGitBook && member.kind === ReflectionKind.Class) ||
    (isGitBook && member.kind === ReflectionKind.Interface)
    ||
    (
      (isGitBook && member.kind === ReflectionKind.ExternalModule && !classModule) &&
      (isGitBook && member.kind === ReflectionKind.ExternalModule && !enumModule) &&
      (isGitBook && member.kind === ReflectionKind.ExternalModule && !interfaceModule))
  ) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
