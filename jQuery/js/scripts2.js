$(function(){
    // jQuery Chaining
    $('.para').delay(2000).slideDown().delay(2000).fadeOut();

    //instead of writing
    //$('.para').delay(2000);
    //$('.para').slideDown();
    //$('.para').delay(2000);
    //$('.para').fadeOut();

    // Show, Hide, Fade, Slide
    $('#show').click(function(){
        $('h3').show();
    });

    $('#hide').click(function(){
        $('h3').hide();
    });

    $('b').fadeIn(3000);

    $('h4').fadeOut(2000);

    $('h5').fadeTo(2000, 0.50, function(){
        alert('Hello');
    });

    $('h6').slideUp(2000);

    $('#slideToogle').click(function(){
        $('h1').slideToogle();
    });
});