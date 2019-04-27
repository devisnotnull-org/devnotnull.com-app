"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles = __importStar(require("./header.css"));
exports.Header = ({ classes }) => (React.createElement("div", { className: classnames_1.default([
        styles.Header,
        classes
    ]) },
    React.createElement("div", null,
        React.createElement("b", null,
            React.createElement("a", { href: "/" }, "About Me"))),
    React.createElement("div", null,
        React.createElement("b", null,
            React.createElement("a", { href: "/blog" }, "Blog")))));
exports.default = exports.Header;
//# sourceMappingURL=header.js.map