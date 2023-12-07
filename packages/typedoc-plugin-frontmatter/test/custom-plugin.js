const { MarkdownPageEvent } = require('typedoc-plugin-markdown');

function load(app) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    page.frontmatter = {
      title: page.model.name,
      ...page.frontmatter,
    };
  });
}

exports.load = load;
