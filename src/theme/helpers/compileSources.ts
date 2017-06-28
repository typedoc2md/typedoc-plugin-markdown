
import { ThemeService } from '../service';
import { compilePartial } from '../utils';

export function compileSources(sources: any) {

    const options = ThemeService.getOptions();

    let md = '';

    if (!options.mdHideSources) {

        md = compilePartial('member.sources.hbs', sources);

    }

    return md;
}
