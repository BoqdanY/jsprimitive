'use strict';

const curry = (fn, arr = [], len = 0) => (...args) => {
  if (arr.length === 0){
    len = fn.length;
  }
//  console.log(arr);
//  arr = arr.concat(args);
   const arrAll = arr.concat(args); //good


  if (len > arrAll.length) { //arrAll.length good not arr.length
    return curry(
      ((fn, ...args1) => (...args2) => (
          fn(...args1.concat(args2))
      ))(fn, ...args), arrAll, len // arrAll not arr
    )
  }else {
//    console.log(arr);
    return fn(...args);
  }
};


const sum4 = (a, b, c, d) => (a + b + c + d);
const f = curry(sum4);
const y1 = sum4(1, 2, 3, 4);
// const y2 = f(1, 2, 3, 4);
const y3 = f(6)(7)(8)(9);
//console.log('' + f);
const y4 = f(1, 2)(3)(4);
const y5 = f(1)(2)(3)(4);
const y6 = f(1)(2, 3, 4);
const y7 = f(1)(2)(3, 4);
const y8 = f(1, 2)(3, 4);
console.log(y1, y3, y4, y5, y6, y7, y8);

