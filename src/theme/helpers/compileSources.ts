import { SourceReference } from 'typedoc/dist/lib/models/sources/file';
import { Options } from '../options';
import { compileTemplate } from '../utils';

export function compileSources(sources: SourceReference[]) {

  return compileTemplate(
    `partials/member.sources.hbs`,
    Object.assign(Object.assign(sources, {
      isBitbucket: Options.markdownFlavour === 'bitbucket',
      sourceRoot: Options.markdownSourcefilePrefix,
    })));

}
