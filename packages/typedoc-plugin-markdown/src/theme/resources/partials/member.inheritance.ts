import {
  ArrayType,
  DeclarationReflection,
  ReferenceType,
  SignatureReflection,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, heading, link } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';

export function inheritance(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection | SignatureReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (reflection.implementationOf) {
    if (headingLevel !== -1) {
      md.push(heading(headingLevel, 'Implementation of'));
    }
    md.push(typeAndParent(context, reflection.implementationOf));
  }

  if (reflection.inheritedFrom) {
    if (headingLevel !== -1) {
      md.push(heading(headingLevel, 'Inherited from'));
    }
    md.push(typeAndParent(context, reflection.inheritedFrom));
  }

  if (reflection.overwrites) {
    if (headingLevel !== -1) {
      md.push(heading(headingLevel, 'Overrides'));
    }
    md.push(typeAndParent(context, reflection.overwrites));
  }

  return md.join('\n\n');
}

const typeAndParent = (
  context: MarkdownThemeRenderContext,
  props: ArrayType | ReferenceType,
) => {
  const getLink = (name: string, url: string) =>
    link(backTicks(name), context.relativeURL(url));

  if (props) {
    if ('elementType' in props) {
      return typeAndParent(context, props.elementType as any) + '[]';
    } else {
      if (props.reflection) {
        const md: string[] = [];
        if (props.reflection instanceof SignatureReflection) {
          if (props.reflection.parent?.parent?.url) {
            md.push(
              getLink(
                props.reflection.parent.parent.name,
                props.reflection.parent.parent.url,
              ),
            );
            if (props.reflection.parent?.url) {
              md.push(
                getLink(
                  props.reflection.parent.name,
                  props.reflection.parent.url,
                ),
              );
            }
          }
        } else {
          if (props.reflection.parent) {
            if (props.reflection.parent.url) {
              md.push(
                getLink(
                  props.reflection.parent.name,
                  props.reflection.parent.url,
                ),
              );
            } else {
              md.push(backTicks(props.reflection.parent.name));
            }
            if (props.reflection) {
              if (props.reflection.url) {
                md.push(getLink(props.reflection.name, props.reflection.url));
              } else {
                md.push(backTicks(props.reflection.name));
              }
            }
          }
        }
        return md.length > 0 ? md.join('.') : props.name;
      } else {
        return escapeChars(props.toString());
      }
    }
  }
  return 'void';
};
