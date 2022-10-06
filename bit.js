'use strict';

function doIt(ip = "127.0.0.1") {
    let sum = 0;
    let res = ip.split('.');
    res = res.map(Number);
    
    res[0] = res[0] << 8 << 8 << 8;
    res[1] = res[1] << 8 << 8;
    res[2] = res[2] << 8;

    for (let item in res) {
        sum += res[item];
    }
    
    return sum;
}

console.log(doIt());