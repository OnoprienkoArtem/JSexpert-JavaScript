(function(){    

let btn = document.getElementById("play"),
    firstBlock = document.querySelector('#first-line'),
    secondBlock = document.querySelector('#second-line'),
    thirdBlock = document.querySelector('#third-line');

const newData = [];

const createCopy = (array, newArray) => {
    array.forEach(item => {
        newArray.push({
            url: item.url,              
            name: item.name,
            description: item.description,
            date: item.date
        })
    })
};

createCopy(data, newData);

console.log(newData);


const newCorrectData = newData.map(item => {
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

console.log(newCorrectData);


function init() {   

    let amountImg = document.getElementById('line-selector').value;

    let galleryArray = [];

    switch (Number(amountImg)) {
        case 1: 
            galleryArray = newCorrectData.slice(0, 3);
            break;
        case 2: 
            galleryArray = newCorrectData.slice(0, 6);
            break;
        default: 
            galleryArray = newCorrectData;
    };


    let wayScheme = document.getElementById('type-selector').value;

    switch (Number(wayScheme)) {
        case 1: 
            usingFIrstWay();
            break;        
        case 2: 
            usingSecondWay();
            break;
        case 3: 
            usingThirddWay();
            break;
        default: 
            console.log('вы ничего не выбрали');        
    };

    


    function usingFIrstWay() {
        console.log('первый!');
    }

    function usingSecondWay() {
        document.querySelector('.second-group').classList.add("show");

        let currnetRes = String();        
        
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

    function usingThirddWay() {
        console.log('третий!!!');
    }

    

 
         

    
    // код ниже дан для справки, вам нужно будет использовать тот вариан который вы выбрали в селектбоксе
    // пример построения галлереи с помощю replace
    var replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
    <img src="$url" alt="$name" class="img-thumbnail">\
    <div class="info-wrapper">\
    <div class="text-muted">$name</div>\
    <div class="text-muted top-padding">$description</div>\
    <div class="text-muted">$date</div>\
    </div>\
    </div>';
    
    // let resultHTML = replaceItemTemplate
    // .replace(/\$name/gi, item.name)
    // .replace("$url", item.url)
    // .replace("$description", item.description)
    // .replace("$date", item.date);
    
    // firstBlock.innerHTML = resultHTML;	  

    
}

btn.addEventListener("click", init);

})()