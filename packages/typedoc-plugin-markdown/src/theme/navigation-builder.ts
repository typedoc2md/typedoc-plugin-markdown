import {
  DeclarationReflection,
  Options,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
} from 'typedoc';
import { NavigationItem } from '../theme/models';

export class NavigationBuilder {
  navigation: NavigationItem[] = [];

  constructor(public options: Options) {}

  getNavigation(project: ProjectReflection): NavigationItem[] {
    if (project.groups?.length) {
      project.groups?.forEach(() => {
        project.children?.forEach((child) => {
          this.navigation.push({
            title: child.name,
            url: child.url,
            children: this.getChildrenOrGroups(child) || [],
          });
        });
      });
    } else {
      project.children?.forEach((child) => {
        this.navigation.push({
          title: child.name,
          children: this.getChildrenOrGroups(child) || [],
        });
      });
    }
    return this.navigation;
  }

  getCategoryGroupChildren(group: ReflectionCategory) {
    return group.children
      ?.filter((child) => child.hasOwnDocument)
      .map((child) => {
        return {
          title: child.name,
          url: child.url,
          children: this.getChildrenOrGroups(child) || [],
        };
      });
  }

  getGroupChildren(group: ReflectionGroup) {
    if (group.categories) {
      return group.categories?.map((category) => {
        return {
          title: category.title,
          children: this.getCategoryGroupChildren(category) || [],
        };
      });
    }
    return group.children
      ?.filter((child) => child.hasOwnDocument)
      .map((child) => {
        return {
          title: child.name,
          url: child.url,
          children: this.getChildrenOrGroups(child) || [],
        };
      });
  }

  getChildrenOrGroups(reflection: DeclarationReflection) {
    if (
      reflection.groups?.some((group) => group.allChildrenHaveOwnDocument())
    ) {
      if (this.options.getValue('excludeGroups')) {
        return reflection.children
          ?.filter((child) => child.hasOwnDocument)
          .map((child) => {
            return {
              title: child.name,
              url: child.url,
              children: this.getChildrenOrGroups(child),
            };
          });
      }
      return reflection.groups?.map((group) => {
        return {
          title: group.title,
          children: this.getGroupChildren(group) || [],
        };
      });
    }
    return [];
  }
}
