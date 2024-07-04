"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPasswordValid = (password) => {
    return password.length < 8;
};
exports.default = isPasswordValid;
