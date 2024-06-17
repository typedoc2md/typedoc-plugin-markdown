import { isQuoted } from '@plugin/libs/utils';
import { OutputFileStrategy } from '@plugin/options/maps';
import { MarkdownTheme } from '@plugin/theme';
import { MarkdownRenderer, NavigationItem } from '@plugin/types';
import * as path from 'path';
import {
  DeclarationReflection,
  DocumentReflection,
  EntryPointStrategy,
  Options,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

let theme: MarkdownTheme;
let project: ProjectReflection;
let options: Options;
let packagesMeta: any;
let navigationOptions: any;
const navigation: NavigationItem[] = [];
let isPackages: boolean;

export function getNavigation(
  markdownTheme: MarkdownTheme,
  ProjectReflection: ProjectReflection,
) {
  theme = markdownTheme;
  project = ProjectReflection;

  options = theme.application.options;
  navigationOptions = options.getValue('navigationModel');
  packagesMeta = (theme.application.renderer as MarkdownRenderer).packagesMeta;
  isPackages =
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
}

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
      title: theme.application.internationalization.proxy.kind_plural_module(),
      path: projectChild.url,
      kind: projectChild.kind,
    });
  }
  const childGroups = getReflectionGroups(projectChild, outputFileStrategy);

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
      const isOnlyModules = project.children?.every(
        (child) => child.kind === ReflectionKind.Module,
      );
      if (isOnlyModules) {
        project.groups?.forEach((projectGroup) => {
          if (projectGroup.owningReflection.kind === ReflectionKind.Module) {
            const children = getGroupChildren(projectGroup);
            if (children?.length) {
              navigation.push(
                ...children.filter((child) => child.title !== entryModule),
              );
            }
          } else {
            navigation.push({
              title: projectGroup.title,
              children: projectGroup.children.map((child) => {
                return {
                  title: child.name,
                  kind: child.kind,
                  path: child.url,
                };
              }),
            });
          }
        });
      } else {
        project.groups?.forEach((projectGroup) => {
          const children = getGroupChildren(projectGroup);
          const indexModule = projectGroup.children.find(
            (child) => child.name === entryModule,
          );
          if (children?.length) {
            navigation.push({
              title: projectGroup.title,
              children: children.filter((child) => child.title !== entryModule),
            });
          }
          if (indexModule) {
            const children =
              indexModule instanceof DeclarationReflection
                ? getReflectionGroups(indexModule)
                : [];
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
      const children =
        child instanceof DeclarationReflection
          ? getReflectionGroups(child)
          : [];
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
      const mapping = theme.getTemplateMapping(child.kind, outputFileStrategy);
      if (Boolean(mapping)) {
        const children =
          child instanceof DeclarationReflection &&
          !navigationOptions.excludeCategories &&
          child.categories?.length
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
            : getReflectionGroups(child, outputFileStrategy);
        return processChildren(acc, child, children as NavigationItem[]);
      }
    }, []);
}

function getReflectionGroups(
  reflection: DeclarationReflection | DocumentReflection,
  outputFileStrategy?: OutputFileStrategy,
): NavigationItem[] | null {
  if (
    reflection instanceof DeclarationReflection &&
    reflection.groups?.some((group) => group.allChildrenHaveOwnDocument())
  ) {
    if (navigationOptions.excludeGroups) {
      return reflection.childrenIncludingDocuments
        ?.filter((child) => child.hasOwnDocument)
        .reduce((acc, child) => {
          const children = getReflectionGroups(child, outputFileStrategy);
          return processChildren(acc, child, children);
        }, []) as NavigationItem[];
    }

    const groupsWithoutDocs = reflection.groups?.filter(
      (group) =>
        group.title !== ReflectionKind.pluralString(ReflectionKind.Document),
    );

    const isModulesGroup =
      groupsWithoutDocs?.length &&
      groupsWithoutDocs[0].children.every(
        (child) => child.kind === ReflectionKind.Module,
      );

    if (isModulesGroup) {
      return getGroupChildren(groupsWithoutDocs[0], outputFileStrategy) || null;
    }

    return reflection.groups
      ?.map((group) => {
        const groupChildren = getGroupChildren(group, outputFileStrategy);
        if (groupChildren?.length) {
          if (group.owningReflection.kind === ReflectionKind.Document) {
            return groupChildren[0];
          }
          return {
            title: group.title,
            children: groupChildren,
          };
        }
        return null;
      })
      .filter((group) => Boolean(group)) as NavigationItem[];
  }
  return null;
}

function processChildren(
  acc: NavigationItem[],
  child: DeclarationReflection | DocumentReflection,
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
