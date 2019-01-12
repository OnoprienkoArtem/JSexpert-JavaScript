// 2. Преобразовать текущую дату и время в понятный человеку формат: 08:05 01/01/2018. 
// Используя шаблонные строки.

let currentDate = new Date();
console.log(currentDate);



let specificFormatOfTime = `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

console.log(specificFormatOfTime);