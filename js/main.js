$(document).ready(function() {
  $('.hamburger').click(function () {
    $(this).toggleClass('open');
  });

  $('.hamburger').click(function () {
    $('.main').toggleClass('open');
  });
  
  $('.hamburger').click(function () {
    $('.header-sp-nav').toggleClass('open');
  });
  
  $('.hamburger').click(function () {
    $('.h-logo').toggleClass('open');
  });

  $('.hamburger').click(function () {
    $('.header-sp').toggleClass('open');
  });
  
});


jQuery(function ($) {
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});