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
const styles = __importStar(require("./experiance.css"));
const data_1 = require("../../common/data");
exports.Experiance = () => (React.createElement("div", { className: classnames_1.default(commonStyles['Block']) },
    React.createElement("h2", null, "EXPERIENCE"),
    data_1.experiancePayload.map((item) => (React.createElement("section", { className: styles['Experiance'] },
        React.createElement("aside", { className: styles['Experiance--Year'] }, item.year),
        React.createElement("div", { className: styles['Experiance--Description'] },
            React.createElement("h3", null, item.company),
            React.createElement("h4", null, item.title),
            item.description.map((descriptiveItem) => React.createElement("p", null, descriptiveItem))))))));
exports.default = exports.Experiance;
//# sourceMappingURL=experiance.js.map