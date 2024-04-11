$(function() {
  $('#botao-mobile').on('click', function () {
      $('#menu-mobile').toggleClass("active");
      $('main').toggleClass("active");
      $('#botao-mobile').find("i").toggleClass("fa-solid fa-x");
  })
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
      $('.navbar').addClass('scroll');
    } else {
      $('.navbar').removeClass('scroll');
    }
  });

$(function() {
    let pathname = window.location.pathname;
    $('#nav-list li').removeClass('active'); 

// Adiciona a classe 'active' ao item correspondente
    switch (pathname) {
        case '/index.html':
            $('#home').addClass('active');
            break;
        case '/paginas/pagina-sobre-as-abelhas.html':
            $('#about').addClass('active');
            break;
        case '/paginas/pagina-como-ajudar.html':
            $('#help').addClass('active');
            break;
        case '/paginas/pagina-contato.html':
            $('#contact').addClass('active');
            break;
        default:
            $('#nav-list li').removeClass('active'); 
            break;
    }
});
  
  

$(document).ready(function() {
  let slides = $(".carousel-item");
  let dots = $(".carousel-indicator");

  let index = 1;
  showSlides(index);

  $('.voltar').click(function(event) {
      event.preventDefault();
      addSlides(-1);
  });

  $('.next-button').click(function() {
      addSlides(1);
  });

  dots.each(function(i) {
      $(this).click(function() {
          currentSlide(i + 1);
      });
  });

  function addSlides(n) {
      showSlides(index += n);
  }

  function currentSlide(n) {
      showSlides(index = n);
  }

  function showSlides(n) {
      if (n > slides.length) {
          index = 1;
      }

      if (n < 1) {
          index = slides.length;
      }

      slides.each(function(i) {
          $(this).css('display', 'none');
          $(dots[i]).removeClass("actived");
      });

      $(slides[index - 1]).css('display', 'flex');
      $(dots[index - 1]).toggleClass("actived");
  }
});
