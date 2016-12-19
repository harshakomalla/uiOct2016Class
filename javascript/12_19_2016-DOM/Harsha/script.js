(function(){
    //Accessing an element using its id
    var a = document.getElementById('main-heading');
    console.log(a);

    var b = document.getElementById('main-footer');
    console.log(b);

    //Accessing an element using its class name
    var c = document.getElementsByClassName('name');
    console.log(c);

    //To access a particular element from the elements of same class name
    var d = document.getElementsByClassName('name')[1];
    console.log(d);

    //Accessing an element using tag name
    var e = document.getElementsByTagName('b');
    console.log(e);

    //To access the first element
     var f = document.querySelector('[custom-class="Harsha"]');
     console.log(f);

    // To access all the elements
    var g = document.querySelectorAll('[custom-class="Harsha"]');
    console.log(g);

})();