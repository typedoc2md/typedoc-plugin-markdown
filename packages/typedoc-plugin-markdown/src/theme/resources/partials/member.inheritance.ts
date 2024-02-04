import {
  ArrayType,
  DeclarationReflection,
  ReferenceType,
  SignatureReflection,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, heading } from '../markdown';

export function inheritance(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection | SignatureReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (reflection.implementationOf) {
    if (headingLevel !== -1) {
      md.push(
        heading(headingLevel, context.text.getText('label.implementationOf')),
      );
    }
    md.push(typeAndParent(context, reflection.implementationOf));
  }

  if (reflection.inheritedFrom) {
    if (headingLevel !== -1) {
      md.push(
        heading(headingLevel, context.text.getText('label.inheritedFrom')),
      );
    }
    md.push(typeAndParent(context, reflection.inheritedFrom));
  }

  if (reflection.overwrites) {
    const overridesLabel = context.text.getText('label.overrides');
    if (headingLevel !== -1) {
      md.push(heading(headingLevel, overridesLabel));
    }
    md.push(typeAndParent(context, reflection.overwrites));
  }

  return md.join('\n\n');
}

const typeAndParent = (
  context: MarkdownThemeRenderContext,
  props: ArrayType | ReferenceType,
) => {
  if (!props) {
    return backTicks('void');
  }

  if (props instanceof ArrayType) {
    return `${typeAndParent(context, props.elementType as any)}[]`;
  }

  if (props instanceof ReferenceType && props.reflection) {
    const refl =
      props.reflection instanceof SignatureReflection
        ? props.reflection.parent
        : props.reflection;
    const parent = refl?.parent;
    if (parent) {
      const resultWithParent: string[] = [];
      if (parent?.url) {
        resultWithParent.push(
          context.partials.linkTo(backTicks(parent.name), parent.url),
        );
      } else {
        resultWithParent.push(backTicks(parent?.name));
      }
      if (refl?.url) {
        resultWithParent.push(
          context.partials.linkTo(backTicks(refl.name), refl.url),
        );
      } else {
        resultWithParent.push(backTicks(refl?.name));
      }
      return resultWithParent.join('.');
    }
  }
  return backTicks(props.toString());
};
