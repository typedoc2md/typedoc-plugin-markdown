import { Reflection } from 'typedoc';
import { getIdealBaseNameFlattened } from '../lib.js';
import { MemberRouter } from './member-router.js';

export class MemberFlatRouter extends MemberRouter {
  override getIdealBaseName(reflection: Reflection): string {
    return getIdealBaseNameFlattened(reflection);
  }
}
