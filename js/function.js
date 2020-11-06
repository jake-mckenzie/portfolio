// Fade in

/*$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');},
      3000);
});
*/
$(document).ready(function(){
  $('.carousel').carousel();
  // Next slide
  $('.carousel').carousel('next');
  // Move next n times.
  $('.carousel').carousel('next', 3);
  // Previous slide
  $('.carousel').carousel('prev');
  // Move prev n times.
  $('.carousel').carousel('prev', 4);
  // Set to nth slide
  $('.carousel').carousel('set', 4);

  $('.carousel.carousel-slider').carousel({fullWidth: true});
});


// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// Scroll to element
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top -75
      }, 1000);
      return false;
    }
  }
});

var pContainerHeight = $('.section-1').height();

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if (wScroll <= pContainerHeight) {
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /3 +'%)'
    });
  }

/*
// Past Work
  if(wScroll > $('.grid-pics').offset().top - ($(window).height() / 1)) {
    $('.grid-pics figure').each(function(i){
      setTimeout(function(){
        $('.grid-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
  }*/
});
