(function(window){
    window.makeAPICall = function(){
        var http = new XMLHttpRequest();
        http.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
        http.onreadystatechange = function(){
            if(this.readystate == 4){
                switch(this.status){
                    case 200:{
                        window.document.getElementByClass('newText').innerHTML = response.id;
                    }
                    break;
                    case 300:{
                        window.document.getElementByClass('newText').innerHTML = this.responseText;
                    }
                    break;
                    case 400:{
                        window.document.getElementByClass('newText').innerHTML = this.responseText;
                    }
                    break;
                    case 500:{
                        window.document.getElementByClass('newText').innerHTML = this.responseText;
                    }
                    break;

                }
            }
        };
        http.send();
    };

})(window);