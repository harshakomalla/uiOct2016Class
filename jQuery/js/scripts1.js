$(function(){

    // jQuery Event Methods
    $('h1').click(function(){
        $(this).hide(1000);
    });

    $('#newTest').click(function(){
        $(this).css("color","green");
    });

    $("input").focus(function(){
        $(this).css("color", "brown");
    });

    $("input").blur(function(){
        $(this).css("color", "green");
    });
    // Selectors
    $('h2, h3').css('border','solid 1px red');

    $('div:contains("CSS")').css('border','solid 2px green');

    $('p:even').css('border','solid 5px pink');
});