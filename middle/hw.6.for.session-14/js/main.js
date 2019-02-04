(function () {   


    let btn = document.getElementById("play");
    let secondBlock = document.querySelector('#second-line');

    let availableQuantity = document.querySelector('#availableQuantity');


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



    
    const arrB = [];  
    

    let restItems = correctData.length;
    availableQuantity.innerHTML = restItems;

    function init() { 

        function message() {
            console.log("дальнейшее добавление невозможно");
        }

        (function bringItemToB() {
            let item = correctData.shift();
            arrB.push(item);            
        })();

        restItems = correctData.length;

        availableQuantity.innerHTML = restItems;
        console.log(restItems);

     

        if (restItems === 0) {
            btn.style['background-color'] = 'gray';
            btn.removeEventListener("click", init);
            btn.addEventListener("click", message);
        }

       

        // методом шаблонных строк
        function usingSecondWay() { 
            let currnetRes = '';

            arrB.forEach(item => {
                let secondItemTemplate = `
                    <div class="col-sm-3 col-xs-6 card">
                        <img src="${item.url}" alt="${item.name}" class="img-thumbnail">
                        <div class="info-wrapper">
                            <div class="text-muted">${item.name}</div>
                            <div class="text-muted top-padding">${item.description}</div>
                            <div class="text-muted">${item.date}</div>
                        </div>
                    </div>`;
                currnetRes += secondItemTemplate;
            });
            secondBlock.innerHTML = currnetRes;
        };

        usingSecondWay();
    }

    btn.addEventListener("click", init);
})();