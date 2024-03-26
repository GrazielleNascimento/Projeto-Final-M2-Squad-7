$(function(){
    $("#navbar").load("../navbar/navbar.html"); 
  });

$(function() {
    $('#botao-mobile').on('click', function () {
       $('#menu-mobile').toggleClass("active");
       $('#menu-mobile').find("i").toggleClass("fa-x");
    })
});


