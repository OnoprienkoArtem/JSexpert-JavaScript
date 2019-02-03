(function () {

    let btn = document.getElementById("play"),      
        secondBlock = document.querySelector('#second-line'),     
        firstGroup = document.querySelector('.first-group'),
        secondGroup = document.querySelector('.second-group'),
        thirdGroup = document.querySelector('.third-group'),
        forthGroup = document.querySelector('.forth-group');


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
        firstGroup.classList.remove("show");
        secondGroup.classList.remove("show");
        thirdGroup.classList.remove("show");
        forthGroup.classList.remove("show");

        let amountImg = document.getElementById('line-selector').value;

        let galleryArray = [];

        switch (Number(amountImg)) {
            case 1:
                galleryArray = correctData.slice(0, 3);
                break;
            case 2:
                galleryArray = correctData.slice(0, 6);
                break;
            default:
                galleryArray = correctData;
        };




       

        // методом шаблонных строк
        function usingSecondWay() {
            document.querySelector('.second-group').classList.add("show");

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

    btn.addEventListener("click", init);
})();