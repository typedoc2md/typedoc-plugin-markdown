
export function ifContainsDefaultValues(parameters: any) {
  let hasDefaultValues = false;
  parameters.forEach((param: any) => {
    if (param.defaultValue) {
      hasDefaultValues = true;
      return;
    }
  });
  return hasDefaultValues;
}
