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
const commonStyles = __importStar(require("../../style/common.css"));
const styles = __importStar(require("./contact.css"));
// Replace with network call and saga
const data_1 = require("../../common/data");
exports.Contact = () => (React.createElement("div", { className: classnames_1.default(commonStyles['Block']) },
    React.createElement("h2", null, "Contact"),
    data_1.contactDetails.map(item => (React.createElement("div", { className: classnames_1.default(styles['ContactItem']) },
        React.createElement("div", { className: classnames_1.default(styles['ContactItem--Title']) },
            item.isLink &&
                React.createElement("a", { href: item.link }, item.text),
            !item.isLink && React.createElement("span", null, item.text)))))));
exports.default = exports.Contact;
//# sourceMappingURL=contact.js.map