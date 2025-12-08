import { backTicks, htmlTable, table } from '@plugin/libs/markdown/index.js';
import { TypeDeclarationVisibility } from '@plugin/options/maps.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  i18n,
  ReflectionKind,
  ReflectionType,
} from 'typedoc';

export function typeDeclarationTable(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
  options: { kind?: ReflectionKind },
): string {
  const tableColumnsOptions = this.options.getValue('tableColumnSettings');
  const leftAlignHeadings = tableColumnsOptions.leftAlignHeaders;

  const isCompact =
    this.options.getValue('typeDeclarationVisibility') ===
    TypeDeclarationVisibility.Compact;

  const hasSources =
    !tableColumnsOptions.hideSources &&
    !this.options.getValue('disableSources');

  const headers: string[] = [];

  const declarations = isCompact
    ? model
    : this.helpers.getFlattenedDeclarations(model, {
        includeSignatures: true,
      });

  const hasDefaultValues = declarations.some(
    (declaration) =>
      Boolean(declaration.defaultValue) && declaration.defaultValue !== '...',
  );

  const hasComments = declarations.some((declaration) =>
    Boolean(declaration.comment),
  );

  headers.push(i18n.theme_name());

  headers.push(i18n.theme_type());

  if (hasDefaultValues) {
    headers.push(i18n.theme_default_value());
  }

  if (hasComments) {
    headers.push(i18n.theme_description());
  }

  if (hasSources) {
    headers.push(i18n.theme_defined_in());
  }

  const rows: string[][] = [];

  declarations.forEach((declaration: DeclarationReflection) => {
    const optional = declaration.flags.isOptional ? '?' : '';
    const isSignature =
      (declaration as any).type?.declaration?.signatures?.length ||
      declaration.signatures?.length;
    const row: string[] = [];

    const nameColumn: string[] = [];

    const anchor = this.router.hasUrl(declaration) ? this.router.getAnchor(declaration) : undefined
    if (anchor) {
      nameColumn.push(`<a id="${anchor}"></a>`);
    }

    const name =
      backTicks(`${declaration.name}${isSignature ? '()' : ''}${optional}`);

    nameColumn.push(name);

    row.push(nameColumn.join(' '));

    if (isCompact && declaration.type instanceof ReflectionType) {
      row.push(
        this.partials.reflectionType(declaration.type, {
          forceCollapse: isCompact,
        }),
      );
    } else {
      const type: string[] = [];
      const signatures = declaration.signatures;
      if (signatures?.length) {
        signatures.forEach((sig) => {
          type.push(
            `${this.partials.signatureParameters(sig.parameters || [])} => `,
          );
        });
        type.push(this.partials.someType(declaration.type));
      } else {
        type.push(this.partials.someType(declaration.type));
      }
      row.push(type.join(''));
    }

    if (hasDefaultValues) {
      row.push(
        !declaration.defaultValue || declaration.defaultValue === '...'
          ? '-'
          : backTicks(declaration.defaultValue),
      );
    }

    if (hasComments) {
      const commentsOut: string[] = [];
      if (declaration.comment) {
        commentsOut.push(
          this.partials.comment(declaration.comment, {
            isTableColumn: true,
          }),
        );
      }
      if (declaration.type && (declaration.type as any).declaration?.signatures?.length) {
        (declaration.type as any).declaration?.signatures.forEach((sig) => {
          if (sig.comment) {
            commentsOut.push(
              this.partials.comment(sig.comment, {
                isTableColumn: true,
              }),
            );
          }
        });
      }
      if (commentsOut.length) {
        row.push(commentsOut.join('\n\n'));
      } else {
        row.push('-');
      }
    }

    if (hasSources) {
      row.push(this.partials.sources(declaration, { hideLabel: true }));
    }

    rows.push(row);
  });

  return shouldDisplayHtmlTable(this, options.kind)
    ? htmlTable(headers, rows, leftAlignHeadings)
    : table(headers, rows, leftAlignHeadings);
}

function shouldDisplayHtmlTable(
  context: MarkdownThemeContext,
  kind?: ReflectionKind,
) {
  if (
    kind &&
    [
      ReflectionKind.CallSignature,
      ReflectionKind.Variable,
      ReflectionKind.TypeAlias,
    ].includes(kind) &&
    context.options.getValue('typeDeclarationFormat') == 'htmlTable'
  ) {
    return true;
  }

  if (
    kind === ReflectionKind.Property &&
    context.options.getValue('propertyMembersFormat') == 'htmlTable'
  ) {
    return true;
  }

  return false;
}
