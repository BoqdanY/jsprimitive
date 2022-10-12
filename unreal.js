'use strict';


// const ucFirst = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst(""));


// function checkSpam(str) {
//     return (str.toLowerCase().includes("viagra")) ? true : false;
// }

// console.log(checkSpam("fd"));

// const truncate = function(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength) + "...";
//     }

//     return str
// }

// console.log(truncate("fruit", 1))

// function extractCurrencyValue(str) {
//     let res = '';

//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(+str[i])) {
//             res += str[i]; 
//         }
//     }

//     return +res;
// }

// console.log(extractCurrencyValue("23ffd123"));

// let aa = "daun";

// const a = {
//     [aa]: 123,
// };

// console.log(a.daun);

// const person = {
//     name: 'Taras',
//     age: '33',
//     city: 'Kiev',
// };

// let a = JSON.stringify(person)

// console.dir(a);

// console.log(JSON.parse(a));

// const a = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
// ];

// a.forEach(row => {
//     row.forEach(column => {
//         console.log(column);
//     });
//     console.log('\n');
// });


'use strict';

const range = {
  start: 1,
  end: 10,
  [Symbol.iterator]() {
    let value = this.start;
    return {
      next: () => ({
        value,
        done: value++ === this.end + 1
      })
    };
  }
};

console.dir({
  range,
  names: Object.getOwnPropertyNames(range),
  symbols: Object.getOwnPropertySymbols(range),
});

for (const number of range) {
  console.log(number);
}

const sum = (prev, cur) => prev + cur;
const sumIterable = (...iterable) => iterable.reduce(sum);

const sumRange = sumIterable(...range);
console.log('sumRange:', sumRange);