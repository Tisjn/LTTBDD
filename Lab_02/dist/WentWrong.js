"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WentWrong = WentWrong;
function WentWrong() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
