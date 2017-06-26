
import { Options } from '../options';
import { compilePartial } from '../utils';

export function compileSources(sources: any) {

    let md = '';

    if (!Options.mdHideSources) {

        md = compilePartial('member.sources.hbs', sources);

    }

    return md;
}
