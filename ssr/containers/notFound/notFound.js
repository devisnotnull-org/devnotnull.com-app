"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const classnames_1 = __importDefault(require("classnames"));
const styles = __importStar(require("../../style/common.css"));
class NotFoundView extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: classnames_1.default(styles['Align--Center'], styles['Container--Large']) },
            react_1.default.createElement("h1", null, "Not found view")));
    }
}
exports.NotFoundView = NotFoundView;
const mapStateToProps = (state) => ({});
exports.default = react_redux_1.connect(mapStateToProps, {})(NotFoundView);
//# sourceMappingURL=notFound.js.map