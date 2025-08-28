"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloAsync = HelloAsync;
function HelloAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
