// 2. Преобразовать текущую дату и время в понятный человеку формат: 08:05 01/01/2018. 
// Используя шаблонные строки.

let currentDate = new Date();
console.log(currentDate);



function formattingDay(date) {
    return (date < 10) ? '0' + date : date;
}

let specificFormatOfTime = `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getDate()}/${formattingDay(currentDate.getMonth() + 1)}/${currentDate.getFullYear()}`;

console.log(specificFormatOfTime);