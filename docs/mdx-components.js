import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
import { EventsTable } from './components/events-table';
import { Link } from './components/link';
import { OptionLink } from './components/option-link';
import { PackageVersion } from './components/package-version';
import { PropsTable } from './components/props-table';

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    PackageVersion,
    OptionLink,
    PropsTable,
    EventsTable,
    Link,
  };
}
