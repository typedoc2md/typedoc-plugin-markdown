import { getFilePathWithoutExtension } from '@plugin/libs/utils/index.js';
import {
  CategoryRouter as CoreCategoryRouter,
  GroupRouter as CoreGroupRouter,
  KindDirRouter as CoreKindDirRouter,
  KindRouter as CoreKindRouter,
  StructureDirRouter as CoreStructureDirRouter,
  StructureRouter as CoreStructureRouter,
  Options,
} from 'typedoc';

/**
 * This decorator is used to amend the core routers to handle file options of the plugin.
 */
function CoreRouter<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    /**
     * Expose the "fileExtension" option to the extension property.
     */
    protected extension = (this.application.options as Options).getValue(
      'fileExtension',
    );

    /**
     * Intercepts getFileName method to handle file options.
     * - Maps "index" baseName to "entryFileName".
     * - Maps "modules" baseName with "mergeReadme" to "entryFileName".
     * - Maps "modules" baseName to "modulesFileName".
     * - Otherwise, delegates to super.
     * -
     */
    protected getFileName(baseName: string): string {
      const options = this.application.options as Options;
      const entryFileName = getFilePathWithoutExtension(
        options.getValue('entryFileName'),
      );
      if (baseName === 'index') {
        return super.getFileName(entryFileName);
      }
      if (baseName === 'modules' && options.getValue('mergeReadme')) {
        return `${entryFileName}${this.extension}`;
      }
      if (baseName === 'modules' && options.isSet('modulesFileName')) {
        return super.getFileName(
          getFilePathWithoutExtension(options.getValue('modulesFileName')),
        );
      }
      return super.getFileName(baseName);
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
