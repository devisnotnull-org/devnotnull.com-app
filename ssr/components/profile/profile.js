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
const styles = __importStar(require("./profile.css"));
const commonStyles = __importStar(require("../../style/common.css"));
exports.Profile = () => (React.createElement("div", { className: classnames_1.default(styles['Header']) },
    React.createElement("div", { className: classnames_1.default(commonStyles['Block']) },
        React.createElement("div", { className: classnames_1.default(styles['Header--Photo']) },
            React.createElement("img", { src: "//media.fandanzle.co.uk/avatar.png", alt: "avatar" })),
        React.createElement("div", { className: classnames_1.default(styles['Text--Header']) },
            React.createElement("h1", null, "My name is Alex and im a developer"),
            React.createElement("div", null, "With a passion for web development, security, networking and microservices.")))));
exports.default = exports.Profile;
//# sourceMappingURL=profile.js.map