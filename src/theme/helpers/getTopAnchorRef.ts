import { SourceReference } from 'typedoc/dist/lib/models/sources/file';
import { Options } from '../options';
import { compileTemplate, getAnchorRef } from '../utils';

export function getTopAnchorRef() {
  return getAnchorRef(Options.projectName);
}
