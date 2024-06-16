import { backTicks } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { ReflectionFlags } from 'typedoc';

export function getReflectionFlags(
  this: MarkdownThemeContext,
  reflectionFlags: ReflectionFlags,
): string {
  const result: string[] = [];
  if (reflectionFlags.isAbstract) {
    result.push(backTicks('abstract'));
  }
  if (reflectionFlags.isConst) {
    result.push(backTicks('const'));
  }
  if (reflectionFlags.isPrivate) {
    result.push(backTicks('private'));
  }
  if (reflectionFlags.isProtected) {
    result.push(backTicks('protected'));
  }
  if (reflectionFlags.isReadonly) {
    result.push(backTicks('readonly'));
  }
  if (reflectionFlags.isStatic) {
    result.push(backTicks('static'));
  }
  if (reflectionFlags.isOptional) {
    result.push(backTicks('optional'));
  }
  return result.join(' ');
}
