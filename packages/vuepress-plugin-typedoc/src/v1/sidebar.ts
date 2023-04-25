import { ProjectReflection } from 'typedoc';

export function getV1Sidebar(project: ProjectReflection, basePath: string) {
  const getUrlKey = (url: string) => {
    return url.replace('.md', '');
  };
  return project.children?.map((child) => {
    return {
      title: child.name,
      path: `/${basePath}/${getUrlKey(child.url as string)}`,
      children: child.groups?.map((group) => {
        return {
          title: group.title,
          sidebarDepth: 0,
          children: group.children?.map((groupChild) => {
            return [
              `/${basePath}/${getUrlKey(groupChild.url as string)}`,
              groupChild.getAlias(),
            ];
          }),
        };
      }),
    };
  });
}
