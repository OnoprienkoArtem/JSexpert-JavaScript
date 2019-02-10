(function () {  
    let btn = document.getElementById('play');
    let secondBlock = document.querySelector('#second-line');    
    let availableQuantity = document.querySelector('#availableQuantity');

    
  
    // новый массив данных
    const newData = createCopy(data);
    function createCopy(array) {
        const newData = [];
        array.forEach(item => {
            newData.push({
                url: item.url,
                name: item.name,
                description: item.description,
                date: item.date
            })
        });
        return newData;
    };

    // подготовленный массив 
    const correctData = newCorrectData(newData);
    function newCorrectData(arr) {
        return arr.map(item => {
            let itemName = item.name.toLowerCase();
            itemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);

            let itemUrl = `http://${item.url}`;

            let itemDescription = `${item.description.substr(0, 15)}...`;

            const getDateObject = date => {
                let tmp = new Date(date);
                return `${tmp.getFullYear()}/${tmp.getMonth()}/${tmp.getDate()} ${tmp.getHours()}:${tmp.getMinutes()}`;
            };

            return {
                url: itemUrl,
                name: itemName,
                description: itemDescription,
                date: getDateObject(item.date)
            };
        });
    }



    
    const itemsOfGallery = [];    
  
    availableQuantity.innerHTML = correctData.length;
   

    function bringItemToB() {
        let item = correctData.shift();
        itemsOfGallery.push(item);
        availableQuantity.innerHTML = (correctData.length + 1) - 1;
        showItemsGallery();
    };       

         

    if (correctData.length === 0) {
        btn.style['background-color'] = 'gray';
        btn.removeEventListener('click', init);
        btn.addEventListener('click', () => $('#myModal').modal());
    }

  

    // методом шаблонных строк
    function showItemsGallery() {
            let currnetRes = '';

        itemsOfGallery.forEach(item => {
            let secondItemTemplate = `
                <div class="col-sm-3 col-xs-6 card" id="card">
                    <img src="${item.url}" alt="${item.name}" class="img-thumbnail">
                    <div class="info-wrapper">
                        <div class="text-muted">${item.name}</div>
                        <div class="text-muted top-padding">${item.description}</div>
                        <div class="text-muted">${item.date}</div>
                    </div>
                    <button class="btn btn-primary" id="${item.name}">Удалить</button>
                </div>`;
            currnetRes += secondItemTemplate;
        });
        secondBlock.innerHTML = currnetRes;
    };



        // let lineWrap = document.querySelector('#card');
        // lineWrap.addEventListener('click', removeurrentItem);


   


    

    btn.addEventListener("click", bringItemToB);




})();