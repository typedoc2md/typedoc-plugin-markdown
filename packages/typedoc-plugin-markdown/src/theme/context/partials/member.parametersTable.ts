import { backTicks, htmlTable, table } from '@plugin/libs/markdown/index.js';
import { removeLineBreaks } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  i18n,
  ParameterReflection,
  ReflectionKind,
  ReflectionType,
} from 'typedoc';

export function parametersTable(
  this: MarkdownThemeContext,
  model: ParameterReflection[],
): string {
  const tableColumnsOptions = this.options.getValue('tableColumnSettings');
  const leftAlignHeadings = tableColumnsOptions.leftAlignHeaders;

  const parseParams = (current: any, acc: any) => {
    const shouldFlatten =
      current.type?.declaration?.kind === ReflectionKind.TypeLiteral &&
      current.type?.declaration?.children;
    return shouldFlatten
      ? [...acc, current, ...flattenParams(current)]
      : [...acc, current];
  };

  const flattenParams = (current: any) => {
    return current.type?.declaration?.children?.reduce(
      (acc: any, child: any) => {
        const childObj = {
          ...child,
          name: `${current.name}.${child.name}`,
        };
        return parseParams(childObj, acc);
      },
      [],
    );
  };

  const showDefaults =
    !tableColumnsOptions.hideDefaults && hasDefaultValues(model);

  const parsedParams = model.reduce(
    (acc: any, current: any) => parseParams(current, acc),
    [],
  );

  const hasComments = parsedParams.some((param) =>
    Boolean(getParameterComment(param)),
  );

  const headers = [
    ReflectionKind.singularString(ReflectionKind.Parameter),
    i18n.theme_type(),
  ];

  if (showDefaults) {
    headers.push(i18n.theme_default_value());
  }

  if (hasComments) {
    headers.push(i18n.theme_description());
  }

  const firstOptionalParamIndex = model.findIndex(
    (parameter) => parameter.flags.isOptional,
  );

  const rows: string[][] = [];

  parsedParams.forEach((parameter) => {
    const row: string[] = [];

    // A top-level parameter after the first optional one is itself optional,
    // and so is one with a default value (as in the signature title and list
    // format). Flattened members of an object parameter are copies, not in
    // `model`, and are optional only by their own flag.
    const index = model.indexOf(parameter);
    const isOptional =
      parameter.flags.isOptional ||
      Boolean(parameter.defaultValue) ||
      (firstOptionalParamIndex !== -1 && index > firstOptionalParamIndex);

    const rest = parameter.flags?.isRest ? '...' : '';

    const optional = isOptional ? '?' : '';

    row.push(`${rest}${backTicks(`${parameter.name}${optional}`)}`);

    if (parameter.type) {
      const displayType =
        parameter.type instanceof ReflectionType
          ? this.partials.reflectionType(parameter.type, {
              forceCollapse: true,
            })
          : this.partials.someType(parameter.type);
      row.push(removeLineBreaks(displayType));
    } else if (parameter.signatures?.length) {
      // A method member of an object parameter has no type of its own.
      row.push(
        removeLineBreaks(this.partials.functionType(parameter.signatures)),
      );
    }

    if (showDefaults) {
      row.push(backTicks(this.helpers.getParameterDefaultValue(parameter)));
    }

    if (hasComments) {
      const comment = getParameterComment(parameter);
      if (comment) {
        const comments = this.partials.comment(comment, {
          isTableColumn: true,
        });
        row.push(comments.length ? comments : '-');
      } else {
        row.push('-');
      }
    }
    rows.push(row);
  });

  return this.options.getValue('parametersFormat') == 'table'
    ? table(headers, rows, leftAlignHeadings)
    : htmlTable(headers, rows, leftAlignHeadings);
}

// A method member of an object parameter keeps its comment on the signature.
function getParameterComment(parameter: any) {
  return (
    parameter.comment ??
    parameter.signatures?.find((signature) => signature.comment)?.comment
  );
}

function hasDefaultValues(parameters: ParameterReflection[]) {
  const defaultValues = (parameters as ParameterReflection[]).map(
    (param) =>
      param.defaultValue !== '{}' &&
      param.defaultValue !== '...' &&
      !!param.defaultValue,
  );

  return !defaultValues.every((value) => !value);
}
