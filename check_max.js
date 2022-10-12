'use strict';

const max = (arg) => {
    let max = 0;

    for (let row of arg) {
        for (let col of row) {
            if (col > max) max = col
        }
    }

    return max;
}

const m = max([[1, 2, 3], [134, 5, 6], [7, 8, 9]]);
console.log(m);