//Carousel
"use strict"
$(document).ready(function () {
    $('.item-wrapper').slick({
        slideToShow: 3,
        slideToScroll: 1,
        dots: true,
    });
    $('.slider-group').slick({
        slideToShow: 1,
        slideToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumb-slider',
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
    $('.thumb-slider').slick({
        vertical: true,
        slideToShow: 3,
        slideToScroll: 1,
        asNavFor: '.slider-group',
        focusOnSelect: true,
        verticalSwiping: true,
        infinite: false

    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        dots: false,
        navSpeed: 500,
        navElement: 'div',
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                loop: false,
                nav: true

            }
        }
    });

    $('.product-items').owlCarousel({
        margin: 20,

    })
});



