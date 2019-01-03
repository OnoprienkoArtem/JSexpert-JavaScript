(function(){
    

let btn = document.getElementById("play"),
    firstBlock = document.querySelector('#first-line'),
    secondBlock = document.querySelector('#second-line'),
    thirdBlock = document.querySelector('#third-line');

let item = {
    url: "http://desktopwallpapers.org.ua/mini/201507/40069.jpg",
	name: "CHEVROLET",
	description : "Lorem ipsum dolor sit amet",
	date : "2015/01/25 14:15"
};


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
    


    // console.log(data);

    let wayScheme = document.getElementById('type-selector').value;

    switch (Number(wayScheme)) {
        case 1: usingFIrstWay();
            break;        
        case 2: usingSecondWay();
            break;
        case 3: usingThirddWay();
            break;
        default: console.log('вы ничего не выбрали');
            break;
    }


    function usingFIrstWay() {
        console.log('первый!');
    }

    function usingSecondWay() {
        let currnetRes = String();
        newCorrectData.forEach(item => {
            let secondItemTemplate = `
                <div class="col-sm-3 col-xs-6">
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
    }

    function usingThirddWay() {
        console.log('третий!!!');
    }

    

 

    // сначала снимаете значение с селектбокса, document.getElementById("").value
    // определяете какой способ построения галлереи надо использовать, запускаете необходимую логику


 


          

    
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
    
    let resultHTML = replaceItemTemplate
    .replace(/\$name/gi, item.name)
    .replace("$url", item.url)
    .replace("$description", item.description)
    .replace("$date", item.date);
    
    // firstBlock.innerHTML = resultHTML;	

    
    // один из примеров как прятать блоки
    document.querySelector('.first-group').classList.add("hide");
    document.querySelector('.second-group').classList.add("show");
    document.querySelector('.third-group').classList.add("hide");


    
    // пример построения галлереи с помощю шаблонных строк
    // let secondItemTemplate = `<div class="col-sm-3 col-xs-6">\
    // <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
    // <div class="info-wrapper">\
    //     <div class="text-muted">${item.name}</div>\
    //     <div class="text-muted top-padding">${item.description}</div>\
    //     <div class="text-muted">${item.date}</div>\
    // </div>\
    // </div>`;
    //secondBlock.innerHTML = secondItemTemplate;	
    
}

btn.addEventListener("click", init);

})()