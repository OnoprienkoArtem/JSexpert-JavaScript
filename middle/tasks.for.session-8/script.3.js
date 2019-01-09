// 3. Напишите функцию, которая возвращает расширение файла.
// Например, getExt(«/home/user/project/script.js») вернет “js”. Функция должна принимать строку

function getExt(string) {
    let res = string.split('.');
    return res[res.length - 1];
}

console.log(getExt('/home/user/project/script.js')); // js
console.log(getExt('/home/user/project/script.html')); // html
console.log(getExt('/home/user/project/script.json')); // json