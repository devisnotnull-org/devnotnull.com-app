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
const styles = __importStar(require("../../style/common.css"));
const homeStyles = __importStar(require("./home.css"));
const about_1 = __importDefault(require("../../components/about/about"));
const contact_1 = __importDefault(require("../../components/contact/contact"));
const skillz_1 = __importDefault(require("../../components/skillz/skillz"));
const experiance_1 = __importDefault(require("../../components/experiance/experiance"));
const education_1 = __importDefault(require("../../components/education/education"));
const profile_1 = __importDefault(require("../../components/profile/profile"));
const folio_1 = __importDefault(require("../../components/folio/folio"));
class HomeView extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: styles['Container'] },
            react_1.default.createElement(profile_1.default, null),
            react_1.default.createElement("div", { className: homeStyles['Content'] },
                react_1.default.createElement("aside", { className: homeStyles['Description'] },
                    react_1.default.createElement(about_1.default, null),
                    react_1.default.createElement(experiance_1.default, null),
                    react_1.default.createElement(education_1.default, null),
                    react_1.default.createElement(folio_1.default, null)),
                react_1.default.createElement("aside", { className: homeStyles['Breakdown'] },
                    react_1.default.createElement(contact_1.default, null),
                    react_1.default.createElement(skillz_1.default, null)))));
    }
}
exports.HomeView = HomeView;
const mapStateToProps = (state) => ({});
exports.default = react_redux_1.connect(mapStateToProps, {})(HomeView);
//# sourceMappingURL=home.js.map