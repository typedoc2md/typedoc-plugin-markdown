import { getPathWithoutExt } from '@plugin/libs/utils/index.js';
import {
  CategoryRouter as CoreCategoryRouter,
  GroupRouter as CoreGroupRouter,
  KindDirRouter as CoreKindDirRouter,
  KindRouter as CoreKindRouter,
  StructureDirRouter as CoreStructureDirRouter,
  StructureRouter as CoreStructureRouter,
  Options,
  RouterTarget,
} from 'typedoc';

/**
 * This decorator is used to amend the core routers to handle options of the plugin.
 */
function CoreRouter<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    private options = this.application.options as Options;
    private anchorPrefix = this.options.getValue('anchorPrefix');
    private mergeReadme = this.options.getValue('mergeReadme');
    private entryFileName = getPathWithoutExt(
      this.options.getValue('entryFileName'),
    );
    private modulesFileName = getPathWithoutExt(
      this.options.getValue('modulesFileName'),
    );
    /**
     * Expose the "fileExtension" option to the extension property.
     */
    protected extension = this.options.getValue('fileExtension');

    /**
     * Intercepts getFileName method to handle file options.
     * - Maps "index" baseName to "entryFileName".
     * - Maps "modules" baseName with "mergeReadme" to "entryFileName".
     * - Maps "modules" baseName to "modulesFileName".
     * - Otherwise, delegates to super.
     * -
     */
    protected getFileName(baseName: string): string {
      if (baseName === 'index') {
        return super.getFileName(this.entryFileName);
      }
      if (baseName === 'modules' && this.mergeReadme) {
        return `${this.entryFileName}${this.extension}`;
      }
      if (baseName === 'modules' && this.options.isSet('modulesFileName')) {
        return super.getFileName(this.modulesFileName);
      }
      return super.getFileName(baseName);
    }

    getAnchor(target: RouterTarget) {
      if (this.anchorPrefix) {
        return `${this.anchorPrefix}${super.getAnchor(target)}`;
      }
      return super.getAnchor(target);
    }
  };
}

@CoreRouter
export class KindRouter extends CoreKindRouter {}

@CoreRouter
export class KindDirRouter extends CoreKindDirRouter {}

@CoreRouter
export class StructureRouter extends CoreStructureRouter {}

@CoreRouter
export class StructureDirRouter extends CoreStructureDirRouter {}

@CoreRouter
export class GroupRouter extends CoreGroupRouter {}

@CoreRouter
export class CategoryRouter extends CoreCategoryRouter {}
