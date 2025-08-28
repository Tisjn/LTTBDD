import { HelloAsync} from "./HelloAsync";
import { Resolve10 } from "./Resolve10";
import { WentWrong } from "./WentWrong";
import { RandomNum } from "./RandomNum";
import { SimulateTask } from "./SimulateTask";

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

Promise.race([HelloAsync(), Resolve10(), RandomNum()])
.then((resolve) => {
    console.log("First: ", resolve)
}) 
.catch ((err) => {
    console.error("One of the promises failed:", err.message)
})
