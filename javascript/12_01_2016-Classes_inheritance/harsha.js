(function(){

    function a(){
        this.name = 'Harsha Komalla';
        this.address = 'USA';
        this.number = 9999;
    }

    var b = new a();
    b.name = 'Komalla Harsha';
    b.address = 'India';
    b.isRegistered = function(){
        return true
    };

   console.log(a);
   console.log(b);

})();