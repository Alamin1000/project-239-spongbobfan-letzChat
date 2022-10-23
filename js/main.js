(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  // design-slider
  $('.design-slider-active').owlCarousel({
    loop:true,
    margin:18,
    responsiveClass:true,
    autoWidth:true,
    center:true,
    nav:true,
    dots:false,
    navText: ['<i class="fal fa-chevron-left"></i>','<i class="fal fa-chevron-right"></i>'],
    responsive:{
        0:{
          
        },
        600:{
          
        },
        1000:{
          
        }
    }
  });
  // joined-client-slider
  $('.joined-client-slider-active').owlCarousel({
    loop:true,
    margin:28,
    responsiveClass:true,
    autoWidth:true,
    center:true,
    nav:true,
    dots:false,
    navText: ['<i class="fal fa-chevron-left"></i>','<i class="fal fa-chevron-right"></i>'],
    responsive:{
        0:{
          
        },
        600:{
          
        },
        1000:{
          
        }
    }
  });
  // testimonial-slider
  $('.testimonial-slider-active').owlCarousel({
    loop:true,
    margin:18,
    responsiveClass:true,
    items:1,
    center:true,
    nav:true,
    dots:false,
    navText: ['<i class="fal fa-chevron-left"></i>','<i class="fal fa-chevron-right"></i>'],
  });
  // fe-slider
  $('.fe-slider-active').owlCarousel({
    loop:true,
    margin:18,
    responsiveClass:true,
    items:1,
    center:true,
    nav:true,
    dots:true,
    // animateOut: 'fadeOut',
    navText: ['<i class="fal fa-chevron-left"></i>','<i class="fal fa-chevron-right"></i>'],
  });

       

})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });

  
  // preloader
  $("#preloader").fadeOut(500);

})











