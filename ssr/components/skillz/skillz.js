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
const styles = __importStar(require("./skillz.css"));
const commonStyles = __importStar(require("../../style/common.css"));
exports.SkillzValue = ({ values }) => (React.createElement("div", null, values.map((item) => {
    return React.createElement("span", { className: styles['Skill--Badge'] }, item);
})));
const skillzPayload = [
    {
        "key": "Javascript",
        "values": ['ES6', 'Node.js', 'Typescript', 'React', 'Angular', 'Microservices', 'Webpack', 'ExtJs', 'JQuery']
    },
    {
        "key": "Java",
        "values": ['Spring', 'Vert.X', "Microservices", "Custom Frameworks"]
    },
    {
        "key": "Misc",
        "values": ['Security', 'OAuth 1/2', "SAML", "Docker", "General design Principles"]
    },
    {
        "key": "Python",
        "values": ['Flask', 'TurboGears', 'System Intergration', 'Python 2 & 3']
    },
    {
        "key": "Devops/System",
        "values": ['Unix', 'Bash', 'AWS', 'GCloud', 'Azure', 'Kubernetes']
    },
    {
        "key": "PHP",
        "values": ['Custom Frameworks', 'Zend', 'Laravel']
    }
];
exports.Skillz = () => (React.createElement("div", { className: classnames_1.default(commonStyles['Block']) },
    React.createElement("h2", null, "Skills"),
    skillzPayload.map((item, i) => {
        return (React.createElement("div", { className: styles['Item--Skills'] },
            React.createElement("div", { className: styles['Skill'] }, item.key),
            React.createElement(exports.SkillzValue, { values: item.values })));
    })));
exports.default = exports.Skillz;
//# sourceMappingURL=skillz.js.map