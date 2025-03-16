import { Reflection } from 'typedoc';
import { getIdealBaseNameFlattened } from '../lib.js';
import { ModuleRouter } from './module-router.js';

export class ModuleFlatRouter extends ModuleRouter {
  override getIdealBaseName(reflection: Reflection): string {
    return getIdealBaseNameFlattened(reflection);
  }
}
