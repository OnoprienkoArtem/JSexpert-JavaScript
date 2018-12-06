'use strict';

function isLeapYear(x) {
    if (typeof x === 'number') {
        x;
    } else {
        x = Number(x);
        x;
    }

    if (x % 100 === 0 && x % 400 !== 0) {
        x = 'невисокосные';
    } else if (x%4 === 0 && (x%400 === 0 || x%100 !== 0)) {
        x = 'високосные';
    } else {
        x = 'Error - year is not found';
    }

    return x;
}


console.log(isLeapYear(1600)); //високосные
console.log(isLeapYear(2000)); //високосные
console.log(isLeapYear(2100)); //невисокосные
console.log(isLeapYear(2012)); //високосные
console.log(isLeapYear());      //Error - year is not found

console.log(isLeapYear(1700)); //невисокосные
console.log(isLeapYear(1800)); //невисокосные
console.log(isLeapYear(1900)); //невисокосные

console.log(isLeapYear(2016)); //високосные
console.log(isLeapYear(2020)); //високосные

console.log(isLeapYear('sss2020')); //Error - year is not found