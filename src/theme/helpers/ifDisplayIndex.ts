import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { Flavour } from '../enums/flavour.enum';
import { ThemeService } from '../theme.service';

/**
 * Return true if index item should be displayed
 * @param item
 * @param opts
 */
export function ifDisplayIndex(member: DeclarationReflection, opts: any) {
  const options = ThemeService.getOptions();
  const classModule = member.children ? member.children[0].kind === ReflectionKind.Class : false;
  const enumModule = member.children ? member.children[0].kind === ReflectionKind.Enum : false;
  if (
    member.kind === ReflectionKind.Interface ||
    (options.mdFlavour === Flavour.GITBOOK && member.kind === ReflectionKind.Class) ||
    (
      (options.mdFlavour === Flavour.GITBOOK && member.kind === ReflectionKind.ExternalModule && !classModule) &&
      (options.mdFlavour === Flavour.GITBOOK && member.kind === ReflectionKind.ExternalModule && !enumModule))
  ) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
