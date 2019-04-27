"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cheerio_1 = require("cheerio");
const port = 3000;
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, '../build/static')));
app.get('/', (req, res) => {
    const finalPath = path_1.default.join(__dirname, '../build/index.html');
    const openHtml = fs_1.default.readFileSync(finalPath);
    const loadItem = cheerio_1.load(openHtml.toString());
    console.log("-------------------------------------");
    console.log("-------------------------------------");
    console.log("-------------------------------------");
    console.log(openHtml.toString());
    res.end(openHtml.toString());
});
app.listen(port, () => console.log('Example app listening on port 3000!'));
//# sourceMappingURL=server.js.map