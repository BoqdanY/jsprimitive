'use strict';

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

const check_age = obj => {
    for (let name in obj) {
        let age = obj[name].died - obj[name].born;
        console.log(`${name}: ${age}`)
    }
}

check_age(persons);