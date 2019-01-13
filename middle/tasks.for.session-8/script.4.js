// 4. Напишите функцию, которая удаляет дубликаты из массива.
// Например, входной массив: [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6], 
// массив который возвращает функция[1, 2, 4, 5, 7, 8, 3, 6]

const arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

function removeDuplicates(arr) {
    var i = 0,
        current,
        length = arr.length,
        unique = [];
    for (; i < length; i++) {
        current = arr[i];
        if (!~unique.indexOf(current)) {
            unique.push(current);
        }
    }
    return unique;
};

console.log(removeDuplicates(arr));

