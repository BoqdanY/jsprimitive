'use strict';

const partial = (fn, x) => (...args) => {
    console.log(`x = ${x}`);
    console.log(`args = ${args}`);
    return fn(x, ...args)
};

const sum = (...args) => {
    let res = 0;
    for (let i of args) {
        res += i;
    }
    return res;
}

const f1 = partial(sum, 3);
console.log('' + f1);
const f2 = partial(f1, 4);
console.log('' + f2);
const f3 = f2(2);

console.log(f3);