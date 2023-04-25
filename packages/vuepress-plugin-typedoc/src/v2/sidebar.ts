import { ProjectReflection } from 'typedoc';

export function getV2Sidebar(project: ProjectReflection, basePath: string) {
  return project.children?.map((child) => {
    return {
      text: child.name,
      link: `/${basePath}/${child.url}`,
      collapsible: true,
      children: child.groups?.map((group) => {
        return {
          text: group.title,
          children: group.children?.map((groupChild) => {
            return {
              text: groupChild.getAlias(),
              link: `/${basePath}/${groupChild.url}`,
            };
          }),
        };
      }),
    };
  });
}
