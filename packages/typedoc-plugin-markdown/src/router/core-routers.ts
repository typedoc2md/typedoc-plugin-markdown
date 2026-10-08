import { getPathWithoutExt } from '@plugin/libs/utils/index.js';
import {
  CategoryRouter as CoreCategoryRouter,
  GroupRouter as CoreGroupRouter,
  KindRouter as CoreKindRouter,
  StructureRouter as CoreStructureRouter,
  Options,
  PageDefinition,
  Reflection,
  ReflectionKind,
} from 'typedoc';
import { getAnchorName } from './anchor-name.js';

/**
 * The core routers of TypeDoc are decorated to handle file options of the plugin.
 */

@CoreRouter
export class KindRouter extends CoreKindRouter {}

// KindRouter is already decorated with CoreRouter; decorating again would apply
// its amendments (such as anchorPrefix) twice.
@CoreDirRouter
export class KindDirRouter extends KindRouter {}

@CoreRouter
export class StructureRouter extends CoreStructureRouter {}

@CoreDirRouter
export class StructureDirRouter extends StructureRouter {}

@CoreRouter
export class GroupRouter extends CoreGroupRouter {}

@CoreRouter
export class CategoryRouter extends CoreCategoryRouter {}

/**
 * This decorator is used to amend the core routers to handle options of the plugin.
 */
function CoreRouter<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    private options = this.application.options as Options;
    private anchorPrefix = this.options.getValue('anchorPrefix') ?? '';
    private mergeReadme = this.options.getValue('mergeReadme');
    private entryFileName = getPathWithoutExt(
      this.options.getValue('entryFileName'),
    );
    private modulesFileName = getPathWithoutExt(
      this.options.getValue('modulesFileName'),
    );

    /**
     * Set "includeHierarchySummary" option to false as default.
     */
    protected includeHierarchySummary =
      this.options.isSet('includeHierarchySummary') &&
      this.options.getValue('includeHierarchySummary');

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
    /**
     * A copy of the BaseRouter implementation, amended to slug constructors
     * from their heading and to prefix the anchor with "anchorPrefix". The
     * BaseRouter stores the result as both the anchor and the full URL
     * fragment, so same-page and cross-page links agree.
     */
    protected createAnchor(target: Reflection, pageTarget: Reflection): string {
      const parts = [getAnchorName(target)];
      let refl = target;
      while (refl.parent && refl.parent !== pageTarget) {
        refl = refl.parent;
        if (
          !refl.kindOf(
            ReflectionKind.TypeLiteral | ReflectionKind.FunctionOrMethod,
          )
        ) {
          parts.unshift(refl.name);
        }
      }
      return `${this.anchorPrefix}${this.getSlugger(pageTarget).slug(parts.join('.'))}`;
    }
  };
}

function CoreDirRouter<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    private indexName = getPathWithoutExt(
      (this.application.options as Options).getValue('entryFileName'),
    );
    buildChildPages(reflection: Reflection, outPages: PageDefinition[]): void {
      this.extension = `/${this.indexName}${this.application.options.getValue(
        'fileExtension',
      )}`;
      return super.buildChildPages(reflection, outPages);
    }
  };
}
