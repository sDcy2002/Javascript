function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    // Logic
    console.log("Start!!");
    // Try take of await and compare
    await promiseTimeout(2000);
    console.log("Stop!!");
}

console.log("Before run");
run();
console.log('After run');
