"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_helmet_1 = require("react-helmet");
const home_1 = __importDefault(require("./home/home"));
const blog_1 = __importDefault(require("./blog/blog"));
const notFound_1 = __importDefault(require("./notFound/notFound"));
class AppRouter extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_helmet_1.Helmet, null,
                react_1.default.createElement("title", null, "Fandanzle - Alex Brown"),
                react_1.default.createElement("meta", { name: "description", content: "Fandanzle - The personal website of Alex Brown @stump201 @fandanzle" }),
                react_1.default.createElement("meta", { name: "og:title", property: "og:title", content: "Fandanzle - The personal website of Alex Brown @stump201 @fandanzle" }),
                react_1.default.createElement("meta", { property: "og:type", content: "website" }),
                react_1.default.createElement("meta", { name: "robots", content: "index, follow" })),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: home_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/blog/", component: blog_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { component: notFound_1.default }))));
    }
}
exports.default = AppRouter;
//# sourceMappingURL=routes.js.map