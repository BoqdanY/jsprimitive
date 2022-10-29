'use strict';

let obj = {
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
}


const methods = (obj) => {
    let keys = [];

    for (let method in obj) {
        if (typeof(obj[method]) == "function") {
            keys.push(method, obj[method].length);
        }
    }

    return keys;
}

console.log(methods(obj));