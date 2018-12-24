var btn = document.getElementById("play");

function transform() {  

   const printResultToConsole = (message, input) => console.log(message, input);

   printResultToConsole('original array => ', data);


// 1. С помощью функции splice необходимо вырезать 6 - й элемент массива. Массив должен стать короче на один элемент.
   const cutSixElement = array => array.splice(5, 1);

   cutSixElement(data); 

  


  

}


btn.addEventListener("click", transform);