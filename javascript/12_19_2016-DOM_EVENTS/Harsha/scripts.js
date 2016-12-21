(function(window){
    // Using onclick Event - occurs when clicked on an element
    var i = 0;
    window.myFunction = function(){
        console.log(i);
        i++;
    };
    // Using oncontextmenu Event - occurs when the user right-clicks on an element to open a context menu
    window.myFunc = function(){
        alert("Hello World!!");
    };
    // Using onfocus Event - occurs when an element gets focus
    window.myFocus = function(){
        document.getElementById("name").style.background = "green";
    };
     window.focusEvent = function(){
            document.getElementById("pass").style.background = "yellow";
    };
    // Using onblur Event - occurs when an element loses focus
    window.myBlur = function() {
        var x = document.getElementById("name");
        x.value = x.value.toUpperCase();
    };
    // Using onsubmit Event - occurs when a form is submitted
    window.mySubmit = function(){
        alert("The form was submitted");
    };

})(window);