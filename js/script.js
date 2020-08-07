$('.sl').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="slick-prev"><img class="sqeure" src="icons/fa-angle-left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img class="sqeure" src="icons/fa-angle-right.png"></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
        },{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        
        }
      }]
});

$('ul.menu a[href^="#"').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top
      }, 500);
      $('ul.menu a[href^="#"').css({
         'color': '#ffffff'
      });
      $(this).css({
         'color': '#555555'
      });
      return false;
   });


 $(document).ready(function() {
   $('.portfolio_button[filter]').click(function(){
       if($(this).attr('filter')=='all') {
         if($(this).attr('val')=='off') {
            $('.portfolio_button[filter]').attr('val','off');
            $(this).attr('val','on');
            $('.portfolio_button[filter]').removeClass('focused');
            $(this).addClass('focused')
            $('.filter > div').show(300);
         }
       } else
       if($(this).attr('val')=='off') {
          $('.portfolio_button[filter]').attr('val','off');
          $(this).attr('val','on');
          $('.portfolio_button[filter]').removeClass('focused')
          $(this).addClass('focused')
          $('.filter > div').hide(300);
          var filter = $(this).attr('filter');
          $('.filter > div[filter='+filter+']').show(300);
        }
    })
 })

 $('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

$(window).scroll(function () {
  if ($(this).scrollTop() != 0)
     $('#toTop').fadeIn();
  else
     $('#toTop').fadeOut();
});
$('#toTop').click(function () {
  $('body,html').animate({
     scrollTop: 0
  }, 800);
});

$('.menu-icon').click(function () {
  $('nav').slideToggle(500);
  $('ul.menu').css({
     'display': 'flex',
     'flex-direction': 'column'
  });
  if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
     $(this).html('<i class="fas fa-times"></i>');
  } else {
     $(this).html('<i class="fas fa-bars"></i>');
  }
});
