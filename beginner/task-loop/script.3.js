let elemResult = document.getElementById('result');

for (let i = 100; i >= 0; i--) {
    if (i % 10 === 0) {
        if (i === 90 || i === 70 || i === 30) {
            continue
        }        
        elemResult.innerHTML += `Число: <b>${i}</b><br>`;            
    }
}

