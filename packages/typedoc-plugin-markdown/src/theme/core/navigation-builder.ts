import { MarkdownRenderer } from '@plugin/app/application';
import { isQuoted } from '@plugin/libs/utils';
import { OutputFileStrategy, PLURAL_KIND_KEY_MAP } from '@plugin/options';
import { MarkdownTheme, NavigationItem } from '@plugin/theme';
import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

export function buildNavigation(
  theme: MarkdownTheme,
  project: ProjectReflection,
) {
  const options = theme.application.options;
  const navigationOptions = options.getValue('navigationModel');

  const navigation: NavigationItem[] = [];

  const packagesMeta = (theme.application.renderer as MarkdownRenderer)
    .packagesMeta;

  const isPackages =
    options.getValue('entryPointStrategy') === EntryPointStrategy.Packages;

  if (isPackages) {
    if (Object.keys(packagesMeta)?.length === 1) {
      buildNavigationFromProject(project);
    } else {
      project.children?.forEach((projectChild) => {
        buildNavigationFromPackage(projectChild);
      });
    }
  } else {
    buildNavigationFromProject(project);
  }

  return navigation;

  function buildNavigationFromPackage(projectChild: DeclarationReflection) {
    const fileExtension = options.getValue('fileExtension');

    const entryFileName = `${path.parse(options.getValue('entryFileName')).name}${fileExtension}`;

    const preservePackageReadme =
      Boolean(projectChild.readme) && !options.getValue('mergeReadme');

    const packageOptions = packagesMeta[projectChild.name]?.options;

    const outputFileStrategy = packageOptions?.isSet('outputFileStrategy')
      ? packageOptions.getValue('outputFileStrategy')
      : options.getValue('outputFileStrategy');

    const entryModule = packageOptions?.isSet('entryModule')
      ? packageOptions.getValue('entryModule')
      : options.getValue('entryModule');

    const projectChildUrl = preservePackageReadme
      ? `${path.dirname(projectChild.url as string)}/${entryFileName}`
      : projectChild.url;

    const isModulesGroup =
      projectChild?.groups &&
      projectChild?.groups[0].children.every(
        (child) => child.kind === ReflectionKind.Module,
      );

    const children: NavigationItem[] = [];

    if (
      preservePackageReadme &&
      !isModulesGroup &&
      outputFileStrategy === OutputFileStrategy.Modules
    ) {
      children.push({
        title: theme.textContentMappings['label.globals'] as string,
        path: projectChild.url,
        kind: projectChild.kind,
      });
    }
    const childGroups = getChildrenOrGroups(projectChild, outputFileStrategy);

    if (childGroups) {
      children.push(
        ...childGroups.filter((child) => child.title !== entryModule),
      );
    }

    navigation.push({
      title: projectChild.name,
      kind: projectChild.kind,
      children,
      ...(projectChildUrl && { path: projectChildUrl }),
    });
  }

  function buildNavigationFromProject(
    project: ProjectReflection | DeclarationReflection,
  ) {
    const entryModule = options.getValue('entryModule');

    if (!navigationOptions.excludeCategories && project.categories?.length) {
      navigation.push(
        ...project.categories.map((category) => {
          return {
            title: category.title,
            children: getCategoryGroupChildren(category),
          };
        }),
      );
    } else {
      if (project.groups?.length) {
        const isEntryModule = Boolean(
          project?.groups[0]?.children.find(
            (child) => child.name === entryModule,
          ),
        );
        const isOnlyModules = project.children?.every(
          (child) => child.kind === ReflectionKind.Module,
        );
        if (
          (project.groups.length === 1 && !Boolean(isEntryModule)) ||
          isOnlyModules
        ) {
          const children = getGroupChildren(project.groups[0]);
          if (children?.length) {
            navigation.push(
              ...children.filter((child) => child.title !== entryModule),
            );
          }
        } else {
          project.groups?.forEach((projectGroup) => {
            const children = getGroupChildren(projectGroup);
            const indexModule = projectGroup.children.find(
              (child) => child.name === entryModule,
            );
            if (children?.length) {
              navigation.push({
                title:
                  theme.textContentMappings[
                    PLURAL_KIND_KEY_MAP[projectGroup.title]
                  ] || projectGroup.title,
                children: children.filter(
                  (child) => child.title !== entryModule,
                ),
              });
            }
            if (indexModule) {
              const children = getChildrenOrGroups(indexModule);
              if (children) {
                navigation.push(...children);
              }
            }
          });
        }
      }
    }
  }

  function getCategoryGroupChildren(group: ReflectionCategory) {
    return group.children
      ?.filter((child) => child.hasOwnDocument)
      .map((child) => {
        const children = getChildrenOrGroups(child);
        return {
          title: child.name,
          kind: child.kind,
          url: child.url,
          ...(children && { children }),
        };
      });
  }

  function getGroupChildren(
    group: ReflectionGroup,
    outputFileStrategy?: OutputFileStrategy,
  ) {
    if (!navigationOptions.excludeCategories && group?.categories?.length) {
      return group.categories?.map((category) => {
        return {
          title: category.title,
          children: getCategoryGroupChildren(category),
        };
      });
    }

    return group.children
      ?.filter((child) => child.hasOwnDocument)
      .reduce((acc: NavigationItem[], child) => {
        const mapping = theme.getTemplateMapping(
          child.kind,
          outputFileStrategy,
        );
        if (Boolean(mapping)) {
          const children =
            !navigationOptions.excludeCategories && child.categories?.length
              ? child.categories
                  ?.map((category) => {
                    const catChildren = getCategoryGroupChildren(category);
                    return catChildren.length
                      ? {
                          title: category.title,
                          children: catChildren,
                        }
                      : null;
                  })
                  .filter((cat) => Boolean(cat))
              : getChildrenOrGroups(child, outputFileStrategy);
          return processChildren(acc, child, children as NavigationItem[]);
        }
      }, []);
  }

  function getChildrenOrGroups(
    reflection: DeclarationReflection,
    outputFileStrategy?: OutputFileStrategy,
  ): NavigationItem[] | null {
    if (
      reflection.groups?.some((group) => group.allChildrenHaveOwnDocument())
    ) {
      if (navigationOptions.excludeGroups) {
        return reflection.children
          ?.filter((child) => child.hasOwnDocument)
          .reduce((acc, child) => {
            const children = getChildrenOrGroups(child, outputFileStrategy);
            return processChildren(acc, child, children);
          }, []) as NavigationItem[];
      }

      const isModulesGroup = reflection.groups[0].children.every(
        (child) => child.kind === ReflectionKind.Module,
      );

      if (isModulesGroup) {
        return (
          getGroupChildren(reflection.groups[0], outputFileStrategy) || null
        );
      }

      return reflection.groups
        ?.map((group) => {
          const groupChildren = getGroupChildren(group, outputFileStrategy);
          return groupChildren?.length
            ? {
                title:
                  theme.textContentMappings[PLURAL_KIND_KEY_MAP[group.title]] ||
                  group.title,
                children: groupChildren || null,
              }
            : null;
        })
        .filter((group) => Boolean(group)) as NavigationItem[];
    }
    return null;
  }

  function processChildren(
    acc: NavigationItem[],
    child: DeclarationReflection,
    children: NavigationItem[] | null,
  ) {
    if (!isQuoted(child.name) && !navigationOptions.excludeFolders) {
      const titleParts = child.name.split('/');
      if (!child.name.startsWith('@') && titleParts.length > 1) {
        let currentLevel = acc;
        let currentItem: NavigationItem;
        for (let i = 0; i < titleParts.length - 1; i++) {
          currentItem = currentLevel?.find(
            (item: NavigationItem) => item.title === titleParts[i],
          ) as NavigationItem;
          if (!currentItem) {
            currentItem = {
              title: titleParts[i],
              children: [],
            };
            currentLevel.push(currentItem);
          }
          if (currentItem) {
            currentLevel = currentItem.children || [];
          }
        }

        currentLevel.push({
          title: titleParts[titleParts.length - 1],
          kind: child.kind,
          path: child.url,
          ...(children && { children }),
        });

        return acc;
      }
    }

    acc.push({
      title: child.name,
      kind: child.kind,
      path: child.url,
      ...(children && { children }),
    });

    return acc;
  }
}
