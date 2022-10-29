'use strict';

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        const number = i;// delete if you want to break down this cod
        let shooter = function() {
            console.log( number );
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[9]()