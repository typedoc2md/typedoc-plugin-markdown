import { Options } from '../options';
import { compileTemplate } from '../utils';

export function compileSources(sources: any) {

  return compileTemplate(
    `partials/member.sources.hbs`,
    Object.assign(Object.assign(sources, {
      isBitbucket: Options.markdownRepoHost === 'bitbucket',
      sourceRoot: Options.markdownRepoRoot,
    })));

}
