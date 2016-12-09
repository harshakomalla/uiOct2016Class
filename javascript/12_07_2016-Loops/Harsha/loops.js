(function(){
    // loops
    // for loop statement
    for(var i = 0; i < 10; i++)
    {
        i = i + 2;
        console.log(i);
    }

    // do-while
    var j = 10;
    do{
        j = j - 1;
        console.log(j);
    }
    while(j > 3);

    // while
    var a = 10;
    while(a < 50)
    {
        a = a * 2;
        console.log(a);
    }

    //forEach
    var x = [10, 20, 30, 40, 50];
    x.forEach(function(value, index){
        console.log('index ='+ index +' , value ='+ value );
    });

    //conditions
    // if else
    var i = 1;
    if(i < 5){
        i++;
        console.log(i);
    }
    else{
        console.log(i);
    }

    //switch
    switch(x[4]){
        case 10: {
            console.log('10');
        }
        break;
        case 20: {
            console.log('20');
        }
        break;
        case 30: {
            console.log('30');
        }
        break;
         case 40: {
            console.log('40');
        }
        break;
        default: {
            console.log('50');
        }
    }

    // if else if else
    var k = 20;
    if(k < 5){
        k = k + 5;
        console.log(k);
    }
    else if(k < 10){
        k = k + 10;
        console.log(k);
    }
    else if(k < 15){
        k = k + 15;
        console.log(k);
    }
    else{
        k = k + 20;
        console.log(k);
    }

})();