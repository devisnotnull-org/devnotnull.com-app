"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const api = __importStar(require("../fetch/blog"));
function* fetchBlogSaga() {
    // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
    // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
    const userData = yield effects_1.call(api.fetchPosts);
    // Instructing middleware to dispatch corresponding action.
    yield effects_1.put({
        type: 'FETCH_USER_SUCCESS',
        userData
    });
}
//# sourceMappingURL=blog.js.map