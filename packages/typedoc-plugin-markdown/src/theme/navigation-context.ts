import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
  TypeDocOptions,
} from 'typedoc';
import { NavigationItem } from '../theme/models';
import { MarkdownTheme } from './theme';

export class NavigationContext {
  navigation: NavigationItem[] = [];

  constructor(
    public theme: MarkdownTheme,
    public options: Partial<TypeDocOptions>,
  ) {}

  getNavigation(project: ProjectReflection): NavigationItem[] {
    const entryFileName = this.options.entryFileName as string;
    const hasReadme = !this.options.readme?.endsWith('none');

    if (hasReadme) {
      this.navigation.push({
        title: 'README',
        url: entryFileName,
      });
      this.navigation.push({
        title: 'API',
        url: project.url,
      });
    } else {
      this.navigation.push({
        title: 'API',
        url: entryFileName,
      });
    }

    this.buildNavigationFromProject(project);

    return this.navigation;
  }

  buildNavigationFromProject(
    project: ProjectReflection | DeclarationReflection,
  ) {
    if (project.groups?.length) {
      if (project.groups.length === 1) {
        const children = this.getGroupChildren(project.groups[0]);
        if (children) {
          this.navigation.push(...children);
        }
      } else {
        project.groups?.forEach((projectGroup) => {
          const children = this.getGroupChildren(projectGroup);
          if (children.length) {
            this.navigation.push({
              title: projectGroup.title,
              children,
            });
          }
        });
      }
    } else {
      project.children?.forEach((child) => {
        this.navigation.push({
          title: child.name,
          children: this.getChildrenOrGroups(child) || [],
          ...(child.url && { url: child.url }),
        });
      });
    }
  }

  getCategoryGroupChildren(group: ReflectionCategory) {
    return group.children
      ?.filter((child) => child.hasOwnDocument)
      .map((child) => {
        const children = this.getChildrenOrGroups(child);
        return {
          title: child.name,
          url: child.url,
          ...(children && { children }),
        };
      });
  }

  getGroupChildren(group: ReflectionGroup) {
    if (group?.categories?.length) {
      return group.categories?.map((category) => {
        return {
          title: category.title,
          children: this.getCategoryGroupChildren(category),
        };
      });
    }
    return group.children
      ?.filter((child) => child.hasOwnDocument)
      .map((child) => {
        const mapping = this.theme.getTemplateMapping(child.kind);
        if (Boolean(mapping)) {
          const children = child.categories?.length
            ? child.categories
                ?.map((category) => {
                  const catChildren = this.getCategoryGroupChildren(category);
                  return catChildren.length
                    ? {
                        title: category.title,
                        children: catChildren,
                      }
                    : null;
                })
                .filter((cat) => Boolean(cat))
            : this.getChildrenOrGroups(child);
          return {
            title: child.name,
            url: child.url,
            ...(children && { children }),
          };
        }
      });
  }

  getChildrenOrGroups(reflection: DeclarationReflection) {
    if (
      reflection.groups?.some((group) => group.allChildrenHaveOwnDocument())
    ) {
      if (this.options.excludeGroups) {
        return reflection.children
          ?.filter((child) => child.hasOwnDocument)
          .map((child) => {
            const children = this.getChildrenOrGroups(child);
            return {
              title: child.name,
              url: child.url,
              ...(children && { children }),
            };
          });
      }
      return reflection.groups
        ?.map((group) => {
          const groupChildren = this.getGroupChildren(group);
          return groupChildren.length
            ? {
                title: group.title,
                children: this.getGroupChildren(group) || null,
              }
            : null;
        })
        .filter((group) => Boolean(group));
    }
    return null;
  }
}
