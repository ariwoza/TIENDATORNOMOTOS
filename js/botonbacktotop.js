$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });
    
    $('#topBtn').click(function(){
        $('html ,body').animate({scrollTop : 400},800);
    });
});