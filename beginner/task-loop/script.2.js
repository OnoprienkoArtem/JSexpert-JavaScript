for (var a = 1; a <= 15; a++) {
    if (a % 2 === 0) {
        console.log(`Число ${a}. Четное`);
    } else {
        console.log(`Число ${a}. Нечетное`);
    }    
}

let b = 1;
while (b <= 15) {
    if (b % 2 === 0) {
        console.log(`Число ${b}. Четное`);
    } else {
        console.log(`Число ${b}. Нечетное`);
    }
    b++;
}

let c = 1;
do {
    if (c % 2 === 0) {
        console.log(`Число ${c}. Четное`);
    } else {
        console.log(`Число ${c}. Нечетное`);
    }
    c++;
} while (c <= 15);