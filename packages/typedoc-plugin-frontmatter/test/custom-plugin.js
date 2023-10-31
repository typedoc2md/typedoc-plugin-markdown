"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const dist_1 = require("../dist");
function load(app) {
    app.renderer.on(dist_1.FrontmatterEvent.PREPARE_FRONTMATTER, (event) => {
        var _a;
        event.frontmatter = {
            title: (_a = event.page.model) === null || _a === void 0 ? void 0 : _a.name,
            ...event.frontmatter,
        };
    });
}
exports.load = load;
