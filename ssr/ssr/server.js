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
const express_1 = __importDefault(require("express"));
const React = __importStar(require("react"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cheerio_1 = require("cheerio");
const server_1 = __importDefault(require("react-dom/server"));
const react_redux_1 = require("react-redux");
const routes_1 = __importDefault(require("../containers/routes"));
const redux_1 = require("redux");
const react_router_dom_1 = require("react-router-dom");
const reducer_1 = __importDefault(require("../common/reducer"));
const redux_saga_1 = __importDefault(require("redux-saga"));
const home_1 = require("../containers/home/home");
const port = 3000;
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, '../build/static')));
app.get('/', (req, res) => {
    const sagaMiddleware = redux_saga_1.default();
    const store = redux_1.createStore(reducer_1.default, redux_1.applyMiddleware(sagaMiddleware));
    const item = (React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.StaticRouter, null,
            React.createElement(routes_1.default, null))));
    JSON.stringify(store.getState());
    const string = server_1.default.renderToString(React.createElement(home_1.HomeView, null));
    const finalPath = path_1.default.join(__dirname, '../../public/index.html');
    const openHtml = fs_1.default.readFileSync(finalPath);
    const loadItem = cheerio_1.load(openHtml.toString());
    console.log('-------------------------------------');
    console.log('-------------------------------------');
    console.log('-------------------------------------');
    console.log(string);
    res.end(string);
});
app.listen(port, () => console.log('Example app listening on port 3000!'));
//# sourceMappingURL=server.js.map