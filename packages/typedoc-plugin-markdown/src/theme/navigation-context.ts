import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
  TypeDocOptions,
} from 'typedoc';
import { OutputFileStrategy } from '../options/maps';
import { NavigationItem } from '../theme/models';
import { MarkdownTheme } from './theme';

export class NavigationContext {
  navigation: NavigationItem[] = [];

  constructor(
    public theme: MarkdownTheme,
    public options: Partial<TypeDocOptions>,
  ) {}

  getNavigation(project: ProjectReflection): NavigationItem[] {
    const hasReadme = Boolean(project.readme);
    const containsOnlyModules = project?.children?.every(
      (child) => child.hasOwnDocument,
    );

    if (hasReadme) {
      if (
        !containsOnlyModules &&
        this.options.outputFileStrategy === OutputFileStrategy.Members &&
        this.options.entryPointStrategy !== EntryPointStrategy.Packages
      ) {
        this.navigation.push({
          title: 'Documentation',
          url: project.url,
        });
      }
    }

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
      if (
        (project.groups.length === 1 && !Boolean(entryModule)) ||
        (project.groups.length === 1 &&
          this.options.outputFileStrategy === OutputFileStrategy.Modules)
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
