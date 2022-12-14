const MarkdownTheme = require('typedoc-plugin-markdown/dist/theme');

class CustomMarkdownTheme extends MarkdownTheme.default {
  constructor(renderer, basePath) {
    super(renderer, basePath);
  }
  get navigationEnabled() {
    return true;
  }
  get hideReflectionTitle() {
    return true;
  }
}

exports.default = CustomMarkdownTheme;
