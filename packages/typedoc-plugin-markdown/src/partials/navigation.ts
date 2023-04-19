import { ProjectReflection } from 'typedoc';
import { heading, link } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function navigation(
  context: MarkdownThemeRenderContext,
  project: ProjectReflection,
) {
  const md: any = [heading(2, 'Index')];

  const navigationItems: any = get(project)[0];

  navigationItems.children?.forEach((navigationItem) => {
    md.push(`${heading(3, link(navigationItem.title, 'README.md'))}`);
    if (navigationItem.children) {
      navigationItem.children.forEach((child) => {
        md.push(`${heading(4, child.title)}`);
        if (child.children) {
          const innerMd = child.children
            .map((innerChild) => {
              return '- ' + innerChild.title;
            })
            .join('\n');
          md.push(innerMd);
        }
      });
    }
  });
  return md.join('\n');
}

function get(parent) {
  const navigation = (parent?.groups || parent.children)?.reduce(
    (prev: any, current) => {
      prev.push({
        title: current.name || current.title,
        url: current.url || null,
        children: get(current),
      });
      return prev;
    },
    [],
  );
  //const navigation = get(parent);
  //console.log(navigation[0]);
  //console.log(navigation[0]?.children[12]?.children);
  //console.log(navigation[0]?.children[12]?.children[0].children);
  return navigation;
}
