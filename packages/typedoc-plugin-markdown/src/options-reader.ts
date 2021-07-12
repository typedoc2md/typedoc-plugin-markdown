import * as path from 'path';

import { Options, OptionsReader } from 'typedoc';
import { Logger } from 'typedoc/dist/lib/utils';

export class CustomOptionsReader implements OptionsReader {
  priority = 900;

  name = 'custom-options';

  read(container: Options, logger: Logger) {
    const options = this.getOptionsFile(
      path.resolve(path.join(container.getValue('theme'), 'options.js')),
    );
    if (options) {
      Object.entries(options).forEach(([key, value]) => {
        container.setValue(key, value);
      });
    }
  }

  getOptionsFile(optionsFile: string) {
    try {
      return require(optionsFile).default;
    } catch (e) {
      return null;
    }
  }
}
