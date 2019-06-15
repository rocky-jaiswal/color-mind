"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const utils_1 = require("./utils");
const API_URL = 'http://colormind.io/api/';
const generate = async (input = [], model = 'default') => {
    utils_1.validateInput(input);
    const response = await axios_1.default.post(API_URL, { model, input: utils_1.padWith(input).map(utils_1.hexToDec) });
    return response
        .data
        .result
        .map((rgb) => rgb.map((x) => x.toString(16)).join(''))
        .map((str) => `#${str}`);
};
exports.default = generate;
//# sourceMappingURL=index.js.map