'use strict';

function generateKey(length, characters) {
    const base = characters.length;
    let res = "";

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * base + 1);
        res += characters[index];
    }

    return res;
}

console.log(generateKey(44, 'abcdefg'));