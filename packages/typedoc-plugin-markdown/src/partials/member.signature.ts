import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { codeBlock, heading } from '../support/els';
import { getReflectionHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function signatureMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  parentHeadingLevel?: number,
) {
  const md: string[] = [];

  /*if (signature.parent?.kindOf(ReflectionKind.Constructor)) {
    md.push(
      heading(
        getReflectionHeadingLevel(
          signature,
          context.getOption('groupBySymbols'),
        ),
        `new ${signature.parent?.name}()`,
      ),
    );
  }*/

  if (parentHeadingLevel) {
    md.push(signatureBody(context, signature, parentHeadingLevel));
  } else {
    md.push(signatureBody(context, signature));
  }

  return md.join('\n\n');
}

function signatureBody(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  parentHeadingLevel?: number,
) {
  const md: string[] = [];

  const headingLevel =
    (parentHeadingLevel
      ? parentHeadingLevel
      : getReflectionHeadingLevel(
          signature.parent,
          context.getOption('groupBySymbols'),
        )) + 1;

  if (signature.comment) {
    md.push(context.partials.comment(signature.comment, headingLevel));
  }

  md.push(heading(headingLevel, 'Signature'));

  md.push(codeBlock(context.partials.signatureTitle(signature)));

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection;

  if (signature.typeParameters?.length) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.partials.typeParameters(signature.typeParameters));
  }

  if (signature.parameters?.length) {
    md.push(heading(headingLevel, 'Parameters'));
    md.push(context.partials.parametersTable(signature.parameters));
  }

  if (signature.type) {
    md.push(heading(headingLevel, 'Returns'));
    md.push(context.partials.someType(signature.type, 'all'));

    if (signature.comment?.blockTags.length) {
      const tags = signature.comment.blockTags
        .filter((tag) => tag.tag === '@returns')
        .map((tag) => context.partials.commentParts(tag.content));
      md.push(tags.join('\n\n'));
    }

    if (typeDeclaration?.signatures) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(context.partials.signatureMember(signature, headingLevel));
      });
    }

    if (typeDeclaration?.children) {
      if (context.getOption('typeDeclarationStyle') === 'table') {
        md.push(
          context.partials.typeDeclarationTable(typeDeclaration.children),
        );
      } else {
        md.push(context.partials.typeDeclarationList(typeDeclaration.children));
      }
    }
    if (!parentHeadingLevel) {
      md.push(context.partials.sources(signature, headingLevel));
    }
  }

  return md.join('\n\n');
}
