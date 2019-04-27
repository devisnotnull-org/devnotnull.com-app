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
const data_1 = require("../../data");
const commonStyles = __importStar(require("../../style/common.css"));
exports.About = () => (React.createElement("div", { className: classnames_1.default(commonStyles['Block']) },
    React.createElement("h2", null, "About me"),
    React.createElement("div", null, data_1.aboutPayload.map(item => React.createElement("p", null, item)))));
exports.default = exports.About;
//# sourceMappingURL=about.js.map