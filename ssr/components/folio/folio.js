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
const styles = __importStar(require("./folio.css"));
const commonStyles = __importStar(require("../../style/common.css"));
const data_1 = require("../../common/data");
exports.Folio = () => (React.createElement("div", { className: classnames_1.default(commonStyles['Block']) },
    React.createElement("h2", null, "Portfolio"),
    data_1.folioPayload.map((item) => (React.createElement("div", { className: classnames_1.default(styles['Folio']) },
        React.createElement("section", { className: classnames_1.default(styles['Folio--Image']) },
            React.createElement("div", { className: classnames_1.default(styles['Folio--Overlay']) },
                React.createElement("div", { className: classnames_1.default(styles['Folio--Overlay--Header']) },
                    "// ",
                    item.title)),
            React.createElement("img", { src: item.image })))))));
exports.default = exports.Folio;
//# sourceMappingURL=folio.js.map