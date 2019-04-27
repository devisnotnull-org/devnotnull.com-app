"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const home_1 = __importDefault(require("./home/home"));
const blog_1 = __importDefault(require("./blog/blog"));
const notFound_1 = __importDefault(require("./notFound/notFound"));
class AppRouter extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: home_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/blog/", component: blog_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { component: notFound_1.default })));
    }
}
exports.default = AppRouter;
//# sourceMappingURL=routes.js.map