
$( document ).ready(function() {

$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $(".navbar").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").removeClass("active");
    }
});

});

var SlideUp = {
    distance: '30px',
    origin: 'bottom',
    opacity: 0,
    reset: false,
    delay: 100,
    easing: 'ease-in'
};

ScrollReveal().reveal('.sr-noreset', SlideUp);

