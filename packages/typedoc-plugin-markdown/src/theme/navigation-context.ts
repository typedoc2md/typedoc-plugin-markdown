import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
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
    this.buildNavigationFromProject(project);
    return this.navigation;
  }

  buildNavigationFromProject(
    project: ProjectReflection | DeclarationReflection,
  ) {
    if (project.groups?.length) {
      const entryModule = Boolean(
        project?.groups[0]?.children.find(
          (child) => child.name === this.options.entryModule,
        ),
      );
      const isOnlyModules = project.children?.every((child) =>
        child.kindOf(ReflectionKind.Module),
      );
      if (
        (project.groups.length === 1 && !Boolean(entryModule)) ||
        isOnlyModules
      ) {
        const children = this.getGroupChildren(project.groups[0]);
        if (children) {
          this.navigation.push(
            ...children.filter(
              (child) => child.title !== this.options.entryModule,
            ),
          );
        }
      } else {
        project.groups?.forEach((projectGroup) => {
          const children = this.getGroupChildren(projectGroup);
          const indexModule = projectGroup.children.find(
            (child) => child.name === this.options.entryModule,
          );
          if (children.length) {
            this.navigation.push({
              title: projectGroup.title,
              children: children.filter(
                (child) => child.title !== this.options.entryModule,
              ),
            });
          }
          if (indexModule) {
            const children = this.getChildrenOrGroups(indexModule);
            if (children) {
              this.navigation.push(...children);
            }
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

      const isModulesGroup = reflection.groups[0].children.every((child) =>
        child.kindOf(ReflectionKind.Module),
      );

      if (isModulesGroup) {
        return this.getGroupChildren(reflection.groups[0]) || null;
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
