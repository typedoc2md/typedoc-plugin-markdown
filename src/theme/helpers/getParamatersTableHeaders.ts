/**
 * Displaying parameters table headers
 * @param parameters
 */
export function getParametersTableHeaders(parameters: any) {

  let headers = ['Param', 'Type', 'Default value', 'Description'];

  const hasDefaultValues = parameters.find((param: any) => {
    return param.defaultValue;
  });

  const hasComments = parameters.find((param: any) => {
    return param.comment;
  });

  if (!hasDefaultValues) {
    headers = headers.filter((header) => {
      return header !== 'Default value';
    });
  } else {
    parameters.forEach((param: any) => {
      param.defaultValue = param.defaultValue ? param.defaultValue : '-';
    });
  }

  if (!hasComments) {
    headers = headers.filter((header) => {
      return header !== 'Description';
    });
  }

  let md = '|';
  headers.forEach((header) => {
    md += ` ${header} |`;
  });
  md += '\n';
  md += '|';
  headers.forEach(() => {
    md += ` ------ |`;
  });
  return md;
}
