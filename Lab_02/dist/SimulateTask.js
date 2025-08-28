"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulateTask = SimulateTask;
function SimulateTask(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
