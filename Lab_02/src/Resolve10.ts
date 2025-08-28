export function Resolve10(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10)
        }, 10000);
    })
}