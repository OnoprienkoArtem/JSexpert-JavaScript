(function (win) {
    var params = {
        states: {
            url: "/",
            template: "temlate.js"
        }
    };
 
    let first = second = third = 5;
    console.log(first, second, third);


    first = 'firsr-var',
    second = 'second-var',
    third = 'third-var';
    console.log(first, second, third); 


    var anotherOne;
    console.log(anotherOne);
    anotherOne = true;
    console.log(anotherOne);
    anotherOne = 123;
    console.log(anotherOne);
    anotherOne = 'string';
    console.log(anotherOne);
    anotherOne = null;
    console.log(anotherOne);
    console.log(typeof anotherOne);


    let js = 'JavaScript';
    var courses = 'courses';
    var space = " ";
    var result = `${js} ${courses}`; 
    var result1 = js + ' ' + courses;
    var result2 = js + space + courses;
    console.log(result);
    console.log(result1);
    console.log(result2);


    var num = 0;
    num++;
    num++;
    num++;
    var z = x = num; // var z = x = num;
    console.log(num);
    console.log(z);
    console.log(x);


    var numberOne = 1;
    console.log(numberOne, typeof numberOne);
    numberOne = String(numberOne);
    console.log(numberOne, typeof numberOne);
    numberOne = Boolean(numberOne);
    console.log(numberOne, typeof numberOne);
    numberOne = Number(numberOne);
    console.log(numberOne, typeof numberOne);


    function setStates(params) {
        if (win && !win.params) {
            win.params = params;
        }
    }
    setStates();

    console.log(params.states.template);

})(window);

