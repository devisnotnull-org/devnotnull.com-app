"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_ROOT = 'https://api.fandanzle.co.uk/';
exports.fetchPosts = () => axios_1.default.get(`${API_ROOT}posts/`);
//# sourceMappingURL=blog.js.map