"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const API_URL = 'http://colormind.io/api/';
const generate = async (input = [], model = 'default') => {
    validateInput(input);
    const response = await axios_1.default.post(API_URL, { model, input: padWith(input).map(hexToDec) });
    return response
        .data
        .result
        .map((rgb) => rgb.map((x) => x.toString(16)).join(''))
        .map((str) => `#${str}`);
};
const padWith = (arr, len = 5, elem = 'N') => {
    for (let i = 0; i < len; i++) {
        if (!arr[i]) {
            arr.push(elem);
        }
    }
    return arr;
};
const hexToDec = (hex) => {
    if (hex === 'N') {
        return 'N';
    }
    return [parseInt(hex.substr(1, 2), 16), parseInt(hex.substr(3, 2), 16), parseInt(hex.substr(5, 2), 16)];
};
const validateInput = (input) => {
    if (!input || input.length > 5) {
        throw new Error('Input array cannot be undefined, null or longer than 5 strings.');
    }
    input.forEach((inp) => {
        if (inp !== 'N' && !inp.match(/^#([a-f]|\d){6}$/)) {
            throw new Error('Input colors have to be of format "#a1a1a1"');
        }
    });
};
exports.default = generate;
//# sourceMappingURL=index.js.map