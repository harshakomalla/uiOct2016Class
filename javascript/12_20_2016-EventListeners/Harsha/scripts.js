(function(window){
    // addEventListener() - attaches an event handler to the specified element
    var events = window.document.getElementById("myEvent");
    events.addEventListener("click", function(event){
        alert("Hello!!");
    }, false);



})(window);