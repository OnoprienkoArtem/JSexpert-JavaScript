let result = document.getElementById('result');

for (let index = 0; index <= 15; index++) {
    let first = Math.floor((Math.random() * 6) + 1);
    let second = Math.floor((Math.random() * 6) + 1);
    let double = '';
    if (index === 8 || index === 13) {
        continue;
    }
    if (first === second) {
        double = `--- This is a double.Number ${first}`
    }
    
    result.innerHTML += `First dice: ${first}, Second dice: ${second} ${double} <br> `;
}