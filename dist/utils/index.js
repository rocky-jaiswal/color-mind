"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padWith = (arr, len = 5, elem = 'N') => {
    for (let i = 0; i < len; i++) {
        if (!arr[i]) {
            arr.push(elem);
        }
    }
    return arr;
};
exports.hexToDec = (hex) => {
    if (hex === 'N') {
        return 'N';
    }
    return [parseInt(hex.substr(1, 2), 16), parseInt(hex.substr(3, 2), 16), parseInt(hex.substr(5, 2), 16)];
};
exports.validateInput = (input) => {
    if (!input || input.length > 5) {
        throw new Error('Input array cannot be undefined, null or longer than 5 strings.');
    }
    input.forEach((inp) => {
        if (inp !== 'N' && !inp.match(/^#([a-f]|\d){6}$/)) {
            throw new Error('Input colors have to be of format "#a1a1a1"');
        }
    });
};
//# sourceMappingURL=index.js.map