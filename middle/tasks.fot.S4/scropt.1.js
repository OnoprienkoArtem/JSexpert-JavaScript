// 1. Создайте функцию, возвращающую слово« ворона» в правильной форме в 
// зависимости от переданого числа n.
// Например: На ветке сидит 1 ворона; На ветке сидит 4 вороны; На ветке сидит 26 ворон.

function getNumberOfBirds(n) {
    let phrase = 'На ветке сидит',
        crows = '';

    if (n === 1) {
        crows = 'ворона';
    } else if (n > 1 && n < 5 ) {
        crows = 'вороны';
    } else {
        crows = 'ворон';
    }

    return `${phrase} ${n} ${crows}`;
}


console.log(getNumberOfBirds(1)); // На ветке сидит 1 ворона
console.log(getNumberOfBirds(3)); // На ветке сидит 3 вороны
console.log(getNumberOfBirds(26)); // На ветке сидит 26 ворон