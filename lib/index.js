let myPromise = new Promise((accept, reject) => {
    let order = 2;
    if (order < 10) {
        accept('i can make pizza');
    }
    else {
        reject(`sorry i cannt`);
    }
});
myPromise.then((accept) => {
    console.log(accept);
}, (reject) => {
    console.log(reject);
});
export {};
