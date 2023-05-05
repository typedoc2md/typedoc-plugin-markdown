import { NavigationItem } from 'typedoc-plugin-markdown';
import { SidebarOptions } from '../model';
import sidebarVitepress from './sidebar.vitepress';
import sidebarVuepress1 from './sidebar.vuepress1';
import sidebarVuepress2 from './sidebar.vuepress2';

export function getSidebar(
  navigation: NavigationItem[],
  basePath: string,
  options: SidebarOptions,
) {
  console.log(options.format);
  if (options.format === 'vuepress1') {
    return sidebarVuepress1(navigation, basePath);
  }
  if (options.format === 'vuepress2') {
    return sidebarVuepress2(navigation, basePath);
  }
  return sidebarVitepress(navigation, basePath);
}
