import { ParameterReflection } from 'typedoc';

export function getParameterDefaultValue(parameter: ParameterReflection) {
  return parameter.defaultValue && parameter.defaultValue !== '...'
    ? parameter.defaultValue
    : 'undefined';
}
