"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typesafe_actions_1 = require("typesafe-actions");
const blog_1 = require("../types/blog");
exports.fetchRequest = () => typesafe_actions_1.action(blog_1.BlogActionTypes.FETCH_REQUEST);
exports.fetchSuccess = (data) => typesafe_actions_1.action(blog_1.BlogActionTypes.FETCH_SUCCESS, data);
exports.fetchError = (message) => typesafe_actions_1.action(blog_1.BlogActionTypes.FETCH_ERROR, message);
exports.fetchSingularRequest = (id) => typesafe_actions_1.action(blog_1.BlogActionTypes.FETCH_REQUEST);
//# sourceMappingURL=blog.js.map