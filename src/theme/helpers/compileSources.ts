import { Options } from '../options';
import { compileTemplate } from '../utils';

export function compileSources(sources: any) {

  return compileTemplate(
    `partials/member.sources.hbs`,
    Object.assign(Object.assign(sources, {
      isBitbucket: Options.markdownFlavour === 'bitbucket',
      sourceRoot: Options.markdownSourcefilePrefix,
    })));

}
