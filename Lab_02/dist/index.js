"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HelloAsync_1 = require("./HelloAsync");
const Resolve10_1 = require("./Resolve10");
const RandomNum_1 = require("./RandomNum");
// HelloAsync().then((message) => {
//     console.log(message)
// })
// Resolve10().then((num) => {
//     console.log(num)
// })
// WentWrong().catch ((err) => {
//     console.error(err.message)
// })
// RandomNum()
// .then((num) => {
//     console.log("Random number: ", num)
// })
// .catch((err) => {
//     console.error(err.message)
// })
// SimulateTask(10000).then((message) => {
//     console.log(message)
// })
// Promise.all([HelloAsync(), Resolve10(), RandomNum()])
// .then(([message, num, rNum]) => {
//     console.log(message);
//     console.log(num);
//     console.log(rNum);
// }) 
// .catch ((err) => {
//     console.error("One of the promises failed:", err.message)
// })
Promise.race([(0, HelloAsync_1.HelloAsync)(), (0, Resolve10_1.Resolve10)(), (0, RandomNum_1.RandomNum)()])
    .then((resolve) => {
    console.log("First: ", resolve);
})
    .catch((err) => {
    console.error("One of the promises failed:", err.message);
});
