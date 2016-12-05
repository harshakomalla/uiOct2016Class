(function(){
    //  number primitive data type
    var x = 8;
    var y = 12354657586969;
    var z = 3845.35473;

    console.log(x);
    console.log(y);
    console.log(z);

    //  string primitive data type
    var firstName = 'Harsha';
    var lastName = 'K';
    var address = 'MO, USA';

    console.log(firstName);
    console.log(lastName);
    console.log(address);


    //  boolean primitive data type
    var  isRegisteredUser= true;
    var isItLoggedIn = false;

    console.log(isRegisteredUser);
    console.log(isItLoggedIn);


    //  null primitive data type
    var a = null;

    console.log(a);


    //  undefined primitive data type
    var r = undefined;

    console.log(r);

    // object data type
    var A = {
        firstName: 'Harsha',
        isRegistered: false,
        isLoggedIn: true,
        rollNumber: 11,
        B: {
            lastName: 'Komalla',
            rollNumber: 5,
            C: {
                fullName: 'Harsha Komalla',
                rollNumber: 1
            }
        }
    };

    var B = {
        firstName: 'John',
        rollNumber: 2
    };

    A.B.rollNumber = 33;
    B.rollNumber = 60;

    console.log(A);
    console.log(B)


    function multiply(X, Y){
    var result = X * Y;

            return result;
        };

        // calling a function
        var output = multiply(5, 2);

        console.log(output);
})();