import { ParameterReflection } from 'typedoc';

export function getParameterDefaultValue(model: ParameterReflection) {
  return model.defaultValue && model.defaultValue !== '...'
    ? model.defaultValue
    : 'undefined';
}
