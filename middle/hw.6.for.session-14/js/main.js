(function () {


    const arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrB = [];    

    function bringItemToB() {
        let item = arrA.shift();
        arrB.push(item);
        console.log(item, arrA, arrB);
    }




    let btn = document.getElementById("play"),      
       

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


    function init() {  

        // методом шаблонных строк
        function usingSecondWay() { 
            let currnetRes = '';

            galleryArray.forEach(item => {
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

    btn.addEventListener("click", bringItemToB);
})();