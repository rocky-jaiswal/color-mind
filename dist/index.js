"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const API_URL = 'http://colormind.io/api/';
const generate = async (input = [], model = 'default') => {
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
generate(['#cccccc']).then(console.log);
exports.default = generate;
//# sourceMappingURL=index.js.map