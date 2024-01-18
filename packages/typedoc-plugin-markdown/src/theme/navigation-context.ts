import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
  Renderer,
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
    public renderer: Renderer,
  ) {}

  getNavigation(project: ProjectReflection): NavigationItem[] {
    const isPackages =
      this.options.entryPointStrategy === EntryPointStrategy.Packages;

    if (isPackages) {
      if (Object.keys((this.renderer as any).packages)?.length === 1) {
        this.buildNavigationFromProject(project);
      } else {
        project.children?.forEach((projectChild) => {
          this.buildNavigationFromPackage(projectChild);
        });
      }
    } else {
      this.buildNavigationFromProject(project);
    }

    return this.navigation;
  }

  buildNavigationFromPackage(projectChild: DeclarationReflection) {
    const entryFileName = this.options.entryFileName as string;
    const preservePackageReadme =
      Boolean(projectChild.readme) && !this.options.mergeReadme;

    const packageMeta = (this.renderer as any).packages[projectChild.name];

    const outputFileStrategy =
      packageMeta?.outputFileStrategy || this.options.outputFileStrategy;

    const projectChildUrl = preservePackageReadme
      ? `${path.dirname(projectChild.url as string)}/${entryFileName}`
      : projectChild.url;

    const isModulesGroup =
      projectChild?.groups &&
      projectChild?.groups[0].children.every((child) =>
        child.kindOf(ReflectionKind.Module),
      );

    const children: NavigationItem[] = [];

    if (preservePackageReadme && !isModulesGroup) {
      children.push({
        title: this.theme.getTextContent('label.globals'),
        url: projectChild.url,
      });
    }
    const childGroups = this.getChildrenOrGroups(
      projectChild,
      outputFileStrategy,
    );

    if (childGroups) {
      children.push(...childGroups);
    }

    this.navigation.push({
      title: projectChild.name,
      children,
      ...(projectChildUrl && { url: projectChildUrl }),
    });
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

  getGroupChildren(
    group: ReflectionGroup,
    outputFileStrategy?: OutputFileStrategy,
  ) {
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
        const mapping = this.theme.getTemplateMapping(
          child.kind,
          outputFileStrategy,
        );

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
            : this.getChildrenOrGroups(child, outputFileStrategy);
          return {
            title: child.name,
            url: child.url,
            ...(children && { children }),
          };
        }
      });
  }

  getChildrenOrGroups(
    reflection: DeclarationReflection,
    outputFileStrategy?: OutputFileStrategy,
  ) {
    if (
      reflection.groups?.some((group) => group.allChildrenHaveOwnDocument())
    ) {
      if (this.options.excludeGroups) {
        return reflection.children
          ?.filter((child) => child.hasOwnDocument)
          .map((child) => {
            const children = this.getChildrenOrGroups(
              child,
              outputFileStrategy,
            );
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
        return (
          this.getGroupChildren(reflection.groups[0], outputFileStrategy) ||
          null
        );
      }

      return reflection.groups
        ?.map((group) => {
          const groupChildren = this.getGroupChildren(
            group,
            outputFileStrategy,
          );
          return groupChildren.length
            ? {
                title: group.title,
                children: groupChildren || null,
              }
            : null;
        })
        .filter((group) => Boolean(group));
    }
    return null;
  }
}
