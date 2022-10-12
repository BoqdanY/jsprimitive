'use strict';

//default fot
const sum_a = (...args) => {
    let res = 0;

    for (let i = 0; i < args.length; i++) {
        res += args[i];
    }

    return res;
}

//for..of
const sum_b = (...args) => {
    let res = 0;

    for (let item of args) {
        res += item;
    }

    return res;
};

//while
const sum_c = (...args) => {
    let res = 0;
    let i = 0;

    while (i < args.length) {
        res += args[i];
        i++;
    }

    return res;
};


//do while
const sum_d = (...args) => {
    let res = 0;
    let i = 0;

    do {
        res += args[i];
        i++;
    }while (i < args.length);

    return res;
};

//reduce
const sum_e = (...args) => args.reduce((res, x) => (res + x), 0);



console.log(sum_a(2, 10, 4));
console.log(sum_b(2, 10, 4));
console.log(sum_c(2, 10, 4));
console.log(sum_d(2, 10, 4));
console.log(sum_e(2, 10, 4));