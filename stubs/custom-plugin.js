const { PageEvent } = require('typedoc');
const {
  FrontmatterEvent,
} = require('../packages/typedoc-plugin-markdown/dist');

module.exports = {
  load(app) {
    app.renderer.on(PageEvent.BEGIN, (page) => {});
  },
};
