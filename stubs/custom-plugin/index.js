"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const dist_1 = require("../../packages/typedoc-plugin-markdown/dist");
function load(app) {
    app.renderer.defineTheme('custom-theme', CustomTheme);
}
exports.load = load;
class CustomTheme extends dist_1.MarkdownTheme {
    getRenderContext(pageEvent) {
        return new ThemeRenderContext(pageEvent, this.application.options);
    }
}
class ThemeRenderContext extends dist_1.MarkdownThemeRenderContext {
    constructor() {
        super(...arguments);
        this.header = () => {
            return 'CUSTOM_PAGE_HEADER';
        };
        this.footer = () => {
            return 'CUSTOM FOOTER HERE';
        };
    }
}
