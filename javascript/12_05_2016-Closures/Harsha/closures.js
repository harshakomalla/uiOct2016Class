(function(){
    // "total" class
   function total(){

    // value is taken as alias for this keyword
     var value = this;

     // first initializing the values to zero
      value.addition = 0;
      value.substract = 0;
      value.product = 0;
      value.dividend = 0;

    // "mathematics" class inside "total" class
    // "mathematics" class has two arguements 'x' and 'y'
     function mathematics(x, y){

        // output is taken as alias for this keyword
        var output = this;

        // different properties of 'mathematics' class
        output.sum = x + y;

        output.difference = x - y;

        output.multiplication = x * y;

        output.division = x / y;

     }

    // inheriting the class mathematics and passing the values as x = 6 and y = 3
     var result = new mathematics(6, 3);

    // the four properties of "total" class storing the result
     value.addition = result.sum;
     value.substract = result.difference;
     value.product = result.multiplication;
     value.dividend = result.division;

   }

    // inheriting the class total
   var finaloutput = new total();
   // to display the result
    console.log(finaloutput);

})();
