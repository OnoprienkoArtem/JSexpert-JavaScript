// 1. Из данного массива удалить значение «technics».Все остальное превратить в строку формата
// «foods, fruits…» преобразование в строку выполнить с помощью одного метода.

const goods = ['foods', 'fruits', 'technics', 'phones', 'computers'];

let desiredElem = goods.indexOf('technics');

console.log(desiredElem); // 2

goods.splice(desiredElem, 1);

console.log(goods); // ["foods", "fruits", "phones", "computers"]