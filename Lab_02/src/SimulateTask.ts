export function SimulateTask(time: number): Promise<String>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done")
        }, time);
    })
}