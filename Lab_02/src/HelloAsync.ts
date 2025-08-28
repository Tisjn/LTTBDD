export function HelloAsync(): Promise<String> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Async")
        }, 2000);
    })
}