$(function() {
  $('#botao-mobile').on('click', function () {
      $('#menu-mobile').toggleClass("active");
      $('#botao-mobile').find("i").toggleClass("fa-solid fa-x");
  })
});
