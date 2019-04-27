"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const react_router_dom_1 = require("react-router-dom");
const react_ga_1 = __importDefault(require("react-ga"));
const redux_saga_1 = __importDefault(require("redux-saga"));
// import TagManager from 'react-gtm-module'
const reducer_1 = __importDefault(require("./common/reducer"));
const routes_1 = __importDefault(require("./views/routes"));
require("./style/base.css");
const sagaMiddleware = redux_saga_1.default();
const store = redux_1.createStore(reducer_1.default, redux_1.applyMiddleware(sagaMiddleware));
react_ga_1.default.initialize('UA-136352816-1');
react_ga_1.default.event({
    category: 'ITEM',
    action: 'ACTION',
    label: 'LABEL'
});
const tagManagerArgs = {
    gtmId: 'GTM-000000'
};
// TagManager.initialize(tagManagerArgs)
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(routes_1.default, null))), document.getElementById('root'));
//# sourceMappingURL=client.js.map