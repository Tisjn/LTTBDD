export function RandomNum(): Promise<number> {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if(num > 0.2)resolve(num)
        else reject(new Error("Number is too low"))
    })
}