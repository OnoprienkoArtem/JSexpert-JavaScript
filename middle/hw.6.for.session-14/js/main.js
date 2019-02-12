(function () {  
    let btn = document.getElementById('play');
    let gallery = document.querySelector('#gallery');
    let availableQuantity = document.querySelector('#availableQuantity');
    let cardWrap = document.querySelector('#card-wrap'); 
    let sortSellect = document.querySelector('#sort'); 

    const itemsForGallery = [];        

    // новый массив данных
    const newData = createCopy(data);
    function createCopy(array) {
        const newData = [];
        array.forEach(item => {
            newData.push({
                id: item.id,
                url: item.url,
                name: item.name,
                description: item.description,
                date: item.date
            })
        });
        return newData;
    };

    // подготовленный массив данных
    const correctData = newCorrectData(newData);
    function newCorrectData(arr) {
        return arr.map(item => {
            let itemName = item.name.toLowerCase();
            itemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);

            let itemUrl = `http://${item.url}`;

            let itemDescription = `${item.description.substr(0, 15)}...`;

            return {
                id: item.id,
                url: itemUrl,
                name: itemName,
                description: itemDescription,
                date: item.date
            };
        });
    };

    let lengthCorectData = correctData.length;
    availableQuantity.innerHTML = lengthCorectData;

    function showModal() {
        $('#myModal').modal();
    };

    function disabledAddButton() {       
        if (lengthCorectData === 0) {
            btn.style['background-color'] = 'gray';
            btn.removeEventListener('click', bringItemToB);
            btn.addEventListener('click', showModal);
        } else {
            btn.style['background-color'] = '#337ab7';
            btn.addEventListener("click", bringItemToB);
            btn.removeEventListener('click', showModal);
        }
    };    

    function bringItemToB() {
        let item = correctData.shift();  
        itemsForGallery.push(item);
        availableQuantity.innerHTML = --lengthCorectData;

        showItemsGallery();       
        disabledAddButton();         
    };  

    function removeurrentItem(e) {  
        if (e.target.id) {
            availableQuantity.innerHTML = ++lengthCorectData;
            let elem = itemsForGallery.filter(item => item.id == e.target.id);     

            itemsForGallery.forEach((item, i)=> {  
                if(item.id === elem[0].id) {         
                    itemsForGallery.splice(i, 1);
                };
            });

            correctData.push(elem[0]); 
        }      

        showItemsGallery();
        disabledAddButton();  
    }; 

    function getCorrectDate(date) {
       let tmp = new Date(date);
       return `${tmp.getFullYear()}/${tmp.getMonth()}/${tmp.getDate()} ${tmp.getHours()}:${tmp.getMinutes()}`;
    };

    function showItemsGallery() {
        let currnetRes = ''; 

        itemsForGallery.forEach(item => {
            let secondItemTemplate = `
                <div class="col-sm-3 col-xs-6">
                    <div class="card">
                        <img src="${item.url}" alt="${item.name}" class="image">
                        <div class="info-wrapper">
                            <div class="text-muted">${item.name}</div>
                            <div class="text-muted top-padding">${item.description}</div>
                            <div class="text-muted">${getCorrectDate(item.date)}</div>
                        </div>
                        <button class="btn btn-primary" id="${item.id}">Удалить</button>
                    </div>
                </div>`;
            currnetRes += secondItemTemplate;
        });          
        gallery.innerHTML = currnetRes;
    };
 
    
    function sorting() {
        let sortTypeValue = parseInt(sortSellect.value, 10);
   
        switch (sortTypeValue) {
            case 1:
                showItemsGallery(itemsForGallery.reverse());                
            case 2:
                return itemsForGallery.sort((a, b) => Number(b.date) - Number(a.date));
            case 3:
                return itemsForGallery.sort((a, b) => Number(a.date) - Number(b.date));
            case 0:
            default:
                showItemsGallery(itemsForGallery.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));               
        }        
    }

    sortSellect.addEventListener('change', sorting);    
    cardWrap.addEventListener('click', removeurrentItem);
    btn.addEventListener("click", bringItemToB);
})();