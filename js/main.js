$(document).ready(function(){


    $( ".hamburger" ).click(function() {
        $( this ).toggleClass( "is-active" );
        $('.side-menu').toggleClass("open");
        $('#no-scroll').toggleClass("visible");
        $('body').toggleClass("visible");
        $('.menu .nav-item a').delay(300).toggleClass("visible");
      });

      $( "#no-scroll" ).click(function() {
        $( this ).toggleClass( "visible" );
        $('.hamburger').toggleClass( "is-active" );
        $('.side-menu').toggleClass("open");
        $('body').toggleClass("visible");
      });

      $( ".nav-item" ).click(function() {
        $( '#no-scroll' ).toggleClass( "visible" );
        $('.hamburger').toggleClass( "is-active" );
        $('.side-menu').toggleClass("open");
        $('body').toggleClass("visible");
      });

      

      $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;
    
        $("body, html").animate({
            scrollTop: position
        } ,500, 'swing');
    });


    ScrollReveal({ distance: '60px' });
    ScrollReveal().reveal('.scrollreveal', { delay: 100, reset: true, duration: 750, origin:'bottom', mobile:false, easing:'ease-out' });
    ScrollReveal().reveal('.scrollreveal-noreset', { delay: 100, reset: false, duration: 750, origin:'bottom', mobile:false, easing:'ease-out' });
    ScrollReveal().reveal('.scrollreveal-list', { delay: 100, reset: false, duration: 750, origin:'bottom', easing:'ease-out', mobile:false, interval: 100 });

  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-default");
      var $gold = $(".brand-img");
      var $hamburger = $('.hamburger');
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $gold.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $hamburger.toggleClass('scrolled',$(this).scrollTop() > $nav.height());
    });
  });
