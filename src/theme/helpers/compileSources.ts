
import { Options } from '../options';
import { compileTemplate } from '../utils';

export function compileSources(sources: any) {

    let md: hbs.SafeString = '';

    if (!Options.mdHideSources) {

        md = compileTemplate('partials/member.sources.hbs', sources);

    }

    return md;
}
