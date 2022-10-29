'use strict';

//first
function camelize(str) {
    return str
        .split('-')
        .map(item => item[0].toUpperCase() + item.slice(1))
        .join('');
}


//second
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}


//third
function filterRangeInPlace(arr, a, b) {
    arr.splice(0, a);
    arr.splice(b-a+1, arr.length);
}

//fourth
//arr.sort((a, b) => b - a);


//fifth
function copySorted(arr) {
    const arr_sorted = arr.slice()
    return arr_sorted.sort();
}

//sixth
function Calculator() {
    this.operation = [
        {name: '+', do: (a, b) => a + b},
        {name: '-', do: (a, b) => a - b},
    ];

    this.calculate = (str) => {
        for (const item of this.operation) {
            const splitted = str.split(' ');
            if (splitted[1] == item.name) {
                return item.do(Number(splitted[0]), Number(splitted[splitted.length - 1]));
            }
        }
    }

    this.addMethod = (name, func) => {
        this.operation.push({name: name, do: func});
    }
}


//seventh
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

//bad variant
// let names = arr => {
//     const res = [];

//     for (const item of arr) {
//         res.push(item.name);
//     }

//     return res;
// }

//better variant
// let names = users.map( item => item.name );


//eighth
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let userMapped = users.map(item => ({fullname: item.name + ' ' + item.surname, id: item.id}));


//nineth
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1: -1);
// }

// sortByAge(arr);


