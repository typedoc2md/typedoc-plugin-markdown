/**
 * Displaying parameters table headers
 * @param parameters
 */
export function getParametersTableHeaders(parameters: any) {
  let hasDefaultValues = false;
  parameters.forEach((param: any) => {
    if (param.defaultValue) {
      hasDefaultValues = true;
      return;
    }
  });
  let headers;
  if (hasDefaultValues) {
    headers = ['Param', 'Type', 'Default value', 'Description'];
  } else {
    headers = ['Param', 'Type', 'Description'];
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
