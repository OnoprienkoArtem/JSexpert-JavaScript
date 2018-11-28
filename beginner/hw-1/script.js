(function (win) {
    var params = {
        states: {
            url: "/",
            template: "temlate.js"
        }
    };

    var first = 'firsr-var';
    var second = 'second-var';
    var third = 'third-var';
    console.log(first, second, third);  


    var anotherOne;
    console.log(anotherOne);
    var boolean = true;
    console.log(boolean);
    var number = 123;
    console.log(number);
    var string = 'string';
    console.log(string);
    var nullvar = null;
    console.log(nullvar);
    console.log(typeof nullvar);


    let js = 'JavaScript';
    var courses = 'courses';
    var result = `${js} ${courses}`;
    console.log(result);


    var num = 0;
    num += 3; 
    var z = num, x = num; // var z = x = num;
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

