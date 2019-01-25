var btn = document.getElementById("play");

function transform() {  


   function printResultToConsole(message, input) {
      console.log(message, input);
   }   

   printResultToConsole('original array => ', data);




// 1. С помощью функции splice необходимо вырезать 6 - й элемент массива. Массив должен стать короче на один элемент.
   function cutSixElement(array) {
      return array.splice(5, 1);
   }

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

   const newArrayForMap = newArr.map(item => {
// 5. Для поля Name: с помощью функций работы со стрингами делаете первую букву большой, остальные маленькие(ДЖИП - > Джип)
      let itemName = item.name.toLowerCase();
      itemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);   

// 6. Для поля url: добавить перед ним« http: //»
      let itemUrl = `http://${item.url}`;

// 7. Для поля Description: с помощью функций работы со стрингами делаете обрезание до 15 символов.
// После добавляем многоточие(…) Остальное отбрасываете.
      let itemDescription = `${item.description.substr(0, 15)}...`;

// 8. Для поля date: создать объект даты из заданных миллисекунд и потом отобразить в виде« 2015 / 07 / 02 14: 15»
      const getDateObject = date => {
         let tmp = new Date(date);
         return `${tmp.getFullYear()}/${tmp.getMonth()}/${tmp.getDate()} ${tmp.getHours()}:${tmp.getMinutes()}`;
      };

// 9*. Более предпочтительно работать с датой с помощью библиотеки moment.js
      const getDateMoment = date => {
         let tmp = moment(date);       
         return `${tmp.year()}/${tmp.month()}/${tmp.date()} ${tmp.hour()}:${tmp.minute()}`;
      };

// 10. Для поля params: из значений ключей сформировать строку типа «true => 80».
      const concatTwoValue = (valueonw, valueTwo) => `${valueonw} => ${valueTwo}`;   

// 11. Создать новое поле isVisible. Переложить в это поле значение поля params.status.

      return {
         name: itemName,
         url: itemUrl,
         description: itemDescription,
         dateObject: getDateObject(item.date),
         dateMonent: getDateMoment(item.date),
         params: concatTwoValue(item.params.status, item.params.progress),
         isVisible: item.params.status
      }      
   });  
  
   printResultToConsole('map => ', newArrayForMap);


   const newArrayFromFilter = newArrayForMap.filter((item) => item.isVisible === true);

   printResultToConsole('filter => ', newArrayFromFilter); 
}


btn.addEventListener("click", transform);