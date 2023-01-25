import { DeclarationReflection, PageEvent, Reflection } from 'typedoc';
import { MarkdownThemeRenderContext } from 'typedoc-plugin-markdown';
import { SidebarOptions } from './types';

export class DocusaurusThemeRenderContext extends MarkdownThemeRenderContext {
  baseFrontmatterVars = (page: PageEvent<Reflection>) => {
    const sidebarPosition = parseFloat(
      this.getSidebarPosition(
        page as PageEvent<DeclarationReflection>,
      ) as string,
    );
    const sidebarLabel = this.getSidebarLabel(
      page as PageEvent<DeclarationReflection>,
    ) as string;

    return {
      ...this.getBaseFrontmatterVars(page),
      ...((this.options.getValue('sidebar') as SidebarOptions).autoConfiguration
        ? {
            ...(sidebarLabel && { sidebar_label: sidebarLabel }),
            ...(sidebarPosition && {
              sidebar_position: sidebarPosition,
            }),
          }
        : {}),
    };
  };

  getSidebarLabel(page: PageEvent<DeclarationReflection>) {
    if (page.url === this.options.getValue('entryDocument')) {
      return (this.options.getValue('sidebar') as SidebarOptions).indexLabel;
    }
    return null;
  }

  getSidebarPosition(page: PageEvent<DeclarationReflection>) {
    if (page.url === this.options.getValue('entryDocument')) {
      return page.url === page.project.url ? '0.5' : '0';
    }
    if (page.url === this.globalsFile) {
      return '0.5';
    }
    if (page.model.getFullName().split('.').length === 1) {
      return '0';
    }
    return null;
  }
}
