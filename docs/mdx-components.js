import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
import { OptionLink } from './components/option-link';
import { PackageVersion } from './components/package-version';

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    PackageVersion,
    OptionLink,
  };
}
