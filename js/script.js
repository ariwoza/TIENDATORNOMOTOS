
$(document).ready(function(){
    $('.cajaicono').click(function(){
       $('.ulmenu').toggleClass('show');
   });
}); 



$(document).ready(function(){
    
    $(".submenu").click(function(){
        $(this).children("ul").slideToggle();
    })
});

var x = window.matchMedia("(max-width: 700px)")

$(document).ready(function(){
$("ul").click(function(p){
    p.stopPropagation();
});
});



