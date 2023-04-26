import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { blockQuoteBlock, codeBlock, heading } from '../support/els';
import { getReflectionHeadingLevel } from '../support/helpers';
import { escapeChars } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function declarationMember(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
  parentHeadingLevel?: number,
) {
  const md: string[] = [];
  if (parentHeadingLevel) {
    md.push(declarationBody(context, declaration, parentHeadingLevel));
  } else {
    md.push(declarationBody(context, declaration));
  }

  return md.join('\n\n');
}

function declarationBody(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
  parentHeadingLevel?: number,
) {
  const md: string[] = [];

  const headingLevel =
    (parentHeadingLevel
      ? parentHeadingLevel
      : getReflectionHeadingLevel(
          declaration,
          context.getOption('groupByKinds'),
        )) + 1;

  const typeDeclaration = (declaration.type as any)
    ?.declaration as DeclarationReflection;

  const isTypeLiteralProperty =
    declaration.kindOf(ReflectionKind.Property) &&
    declaration.parent?.kindOf(ReflectionKind.TypeLiteral);

  const titleSuffix = isTypeLiteralProperty
    ? ` - ${escapeChars(declaration.name)}`
    : '';

  if (context.getOption('indentifiersAsCodeBlocks')) {
    md.push(
      codeBlock(context.partials.declarationMemberIdentifier(declaration)),
    );
  } else {
    md.push(
      `${
        !parentHeadingLevel ? '>' : ''
      } ${context.partials.declarationMemberIdentifier(declaration)}`,
    );
  }

  if (declaration.comment) {
    md.push(context.partials.comment(declaration.comment, headingLevel));
  }

  if (!parentHeadingLevel && declaration.sources) {
    md.push(context.partials.sources(declaration));
  }

  if (declaration.typeParameters) {
    md.push(heading(headingLevel, `Type parameters${titleSuffix}`));
    md.push(context.partials.typeParametersTable(declaration.typeParameters));
  }

  if (typeDeclaration) {
    if (typeDeclaration?.indexSignature) {
      md.push(heading(headingLevel, `Index signature${titleSuffix}`));
      md.push(
        context.partials.indexSignatureTitle(typeDeclaration.indexSignature),
      );
    }

    md.push(heading(headingLevel, `Type declaration${titleSuffix}`));

    if (typeDeclaration?.signatures) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(context.partials.signatureMember(signature, headingLevel));
      });
    }

    if (typeDeclaration?.children?.length) {
      if (
        context.getOption('typeDeclarationFormat').toLowerCase() === 'table'
      ) {
        md.push(context.partials.propertiesTable(typeDeclaration.children));
      } else {
        md.push(
          blockQuoteBlock(
            context.partials.typeDeclarationMember(
              typeDeclaration.children,
              headingLevel,
            ),
          ),
        );
      }
    }
  }

  if (!parentHeadingLevel) {
    md.push(context.partials.inheritance(declaration, headingLevel));
  }
  return md.join('\n\n');
}
