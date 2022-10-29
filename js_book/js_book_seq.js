'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7];

const inBeetwen = (a, b) => (x) => (+a <= x && x <= +b) ? true: false;
const inArray = (arg) => (x) => (x in arg) ? true: false;

const res = arr.filter(inBeetwen(3,7));
const res1 = arr.filter(inArray([1,3,4,10]));
//console.log(res);
console.log(res1);
