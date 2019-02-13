(function () {  
    let btn = document.getElementById('play');
    let gallery = document.querySelector('#gallery');
    let availableQuantity = document.querySelector('#availableQuantity');
    let cardWrap = document.querySelector('#card-wrap'); 
    let sortSellect = document.querySelector('#sort'); 

    let itemsForGallery = [];        

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
    
    availableQuantity.innerHTML = getArrayLength(correctData);

    function showModal() {
        $('#myModal').modal();
    };

    function disabledAddButton() {       
        if (getArrayLength(correctData) === 0) {
            btn.style['background-color'] = 'gray';           
        } else {
            btn.style['background-color'] = '#337ab7';            
        }
    };   

    function getArrayLength(data) {
        return data.length;
    } 

    function bringItemToB() {
        if (!getArrayLength(correctData)) {
            showModal();
        } else {
            let item = correctData.shift();
            itemsForGallery.push(item);

            availableQuantity.innerHTML = getArrayLength(correctData);
            showItemsGallery(); 
        }   

        disabledAddButton();       
    };  

    function removeurrentItem(e) { 
        let id = +e.target.getAttribute('data-id');
        if (id) {            
            let elem = itemsForGallery.find(item => item.id === id);   
            itemsForGallery = itemsForGallery.filter(item => item.id !== id);  
            correctData.push(elem);             
        }      
        availableQuantity.innerHTML = getArrayLength(correctData);
        showItemsGallery();
        disabledAddButton();  
    }; 

    function getCorrectDate(date) {
       let tmp = new Date(date);
       return `${tmp.getFullYear()}/${tmp.getMonth()}/${tmp.getDate()} ${tmp.getHours()}:${tmp.getMinutes()}`;
    };

    function showItemsGallery() {
        let currnetRes = '';          
        itemsForGallery = sorting(itemsForGallery);
        itemsForGallery.forEach(item => {
            currnetRes += `
                <div class="col-sm-3 col-xs-6">
                    <div class="card">
                        <img src="${item.url}" alt="${item.name}" class="image">
                        <div class="info-wrapper">
                            <div class="text-muted">${item.name}</div>
                            <div class="text-muted top-padding">${item.description}</div>
                            <div class="text-muted">${getCorrectDate(item.date)}</div>
                        </div>
                        <button class="btn btn-primary" data-id="${item.id}">Удалить</button>
                    </div>
                </div>`;            
        });          
        gallery.innerHTML = currnetRes;
    }; 
    
    function sorting(arr) {
        let sortTypeValue = parseInt(sortSellect.value, 10); 
   
        switch (sortTypeValue) {            
            case 1:
                return arr.sort((a, b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0));
            case 2:
                return arr.sort((a, b) => b.date - a.date);
            case 3:
                return arr.sort((a, b) => a.date - b.date);
            case 0:         
                return arr.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));               
        }        
    }

    function sortListener() {
        showItemsGallery();
    };

    sortSellect.addEventListener('change', sortListener);
    cardWrap.addEventListener('click', removeurrentItem);
    btn.addEventListener("click", bringItemToB);
})();