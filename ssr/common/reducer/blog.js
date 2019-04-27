"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("../types/blog");
const initialState = {
    data: [],
    errors: undefined,
    loading: false
};
exports.blog = (state = initialState, action) => {
    switch (action.type) {
        case blog_1.BlogActionTypes.FETCH_REQUEST: {
            return Object.assign({}, state, { loading: true });
        }
        case blog_1.BlogActionTypes.FETCH_SUCCESS: {
            return Object.assign({}, state, { loading: false, data: action.payload });
        }
        case blog_1.BlogActionTypes.FETCH_ERROR: {
            return Object.assign({}, state, { loading: false, errors: action.payload });
        }
        default: {
            return state;
        }
    }
};
exports.default = exports.blog;
//# sourceMappingURL=blog.js.map