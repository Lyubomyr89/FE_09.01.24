$(document).ready(function () {
    // our-slide
    $('.our-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 400,
        arrows: true,
        // infinite: false,
        // centerMode: true,
        // centerPadding: '100px',
        dots: true,
        dotsClass: 'our-dots',
        // fade: true,
        pauseOnFocus: true,
    })
});