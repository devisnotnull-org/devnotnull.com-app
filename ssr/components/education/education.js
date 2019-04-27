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
const styles = __importStar(require("./education.css"));
const educationPayload = [
    {
        'year': '2007 - 1010',
        'institute': 'Brighton University',
        'subject': 'FDSC Software engineering & networked system’s',
        'description': []
    },
    {
        'year': '2000 - 2007',
        'institute': 'The Howard Secondary',
        'subject': 'GCSE\'s & A-levels',
        'description': [
            '3 A-C A-Level',
            '17 A-C GCSE',
        ]
    },
];
exports.Education = () => (React.createElement("div", { className: classnames_1.default(commonStyles['Block']) },
    React.createElement("h2", null, "Education"),
    educationPayload.map((item) => (React.createElement("div", { className: styles['Education'] },
        React.createElement("div", { className: styles['Education--Year'] }, item.year),
        React.createElement("div", { className: styles['Education--Description'] },
            React.createElement("h3", null, item.institute),
            React.createElement("h4", null, item.subject),
            item.description.map((descriptiveItem) => (React.createElement("p", null, descriptiveItem)))))))));
exports.default = exports.Education;
//# sourceMappingURL=education.js.map