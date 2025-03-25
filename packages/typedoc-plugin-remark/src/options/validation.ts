import { KIND_TO_STRING } from './constants.js';

const VALID_KINDS = ['Readme', 'Index', ...Array.from(KIND_TO_STRING.values())];

export function validateRemarkPlugins(value: any): string[] {
  const errors: string[] = [];
  if (!Array.isArray(value)) {
    errors.push(`remarkPlugins must be an array.`);
    return errors;
  }
  value.forEach((item, index) => {
    const label = `remarkPlugins[${index}]`;
    if (typeof item === 'string') return;
    if (Array.isArray(item)) {
      if (typeof item[0] !== 'string') {
        errors.push(`${label}[0] must be a plugin string.`);
      }
      return;
    }
    if (typeof item === 'object' && item !== null) {
      const { applyTo, plugins } = item;
      if (applyTo !== '*' && !Array.isArray(applyTo)) {
        errors.push(
          `${label}.applyTo must be "*" or an array of valid page kinds.`,
        );
      } else if (Array.isArray(applyTo)) {
        const invalidKinds = applyTo.filter((k) => !VALID_KINDS.includes(k));
        if (invalidKinds.length > 0) {
          errors.push(
            `${label}.applyTo contains invalid kind(s): ${invalidKinds.join(', ')}`,
          );
        }
      }
      if (!Array.isArray(plugins)) {
        errors.push(`${label}.plugins must be an array.`);
      } else {
        plugins.forEach((plugin, j) => {
          const pluginLabel = `${label}.plugins[${j}]`;
          if (typeof plugin === 'string') return;
          if (Array.isArray(plugin)) {
            if (typeof plugin[0] !== 'string') {
              errors.push(`${pluginLabel}[0] must be a plugin string.`);
            }
          } else {
            errors.push(
              `${pluginLabel} must be a string or [string, options] tuple.`,
            );
          }
        });
      }
      return;
    }
    errors.push(
      `${label} must be a string, [string, options], or { applyTo, plugins } object.`,
    );
  });

  return errors;
}
