var btn = document.getElementById("play");

function transform() {  

   const printResultToConsole = (message, input) => console.log(message, input);

   printResultToConsole('original array => ', data);


// 1. С помощью функции splice необходимо вырезать 6 - й элемент массива. Массив должен стать короче на один элемент.
   const cutSixElement = array => array.splice(5, 1);

   cutSixElement(data); 

   printResultToConsole('without sixth element => ', data);


// 2. Используйте функцию forEach. Внутри цикла создайте новый массив объектов.
// В процессе создания нового массива объектов, избавьтесь от ключа id.
// То есть в вашем новом массиве не должно быть id в каждом конкретном объекте.

   const newArr = [];

   const createCopy = (array, newArray) => {
      array.forEach(item => {
         newArray.push({
            name: item.name,
            description: item.description,
            url: item.url,
            params: item.params,
            date: item.date
         })
      })
   };

   createCopy(data, newArr);

   printResultToConsole('forEach => ', newArr);

// 3. По новому массиву объектов, полученному с помощью функции forEach пройдитесь методом map()
// 4. На каждой итерации цикла мы получаем один объект из массива объектов.
// Берем этот объект и преобразоваем его поля по следующим правилам.   


  

}


btn.addEventListener("click", transform);