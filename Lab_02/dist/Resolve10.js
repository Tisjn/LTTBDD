"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolve10 = Resolve10;
function Resolve10() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 10000);
    });
}
