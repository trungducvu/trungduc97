//Carousel
(function ($) {
    "use strict";
    $(document).ready(function () {
        $('.owl-carousel-custom-1').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: true,
            navElement: 'div',
            navText: ["", ""],
            navSpeed: 800,
            owlsElement: 'div',
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,



        })



    });
    $(document).ready(function () {

        $('.product-type-list-1').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            dots: false,
            navSpeed: 500,
            navElement: 'div',
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                    nav: true,

                },
                481: {
                    items: 2,
                    nav: true,

                },
                768: {
                    items: 3,
                    nav: true,
                },
                992: {
                    items: 4,

                }
            }
        });

    });

    $(document).ready(function () {
        $(".product-items").owlCarousel({
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
                    nav: true,

                },
                481: {
                    items: 2,
                    nav: true,

                },
                768: {
                    items: 3,
                    nav: true,
                },
                992: {
                    items: 4,

                }
            }




        });
    })
    $(document).ready(function () {
        $(".cat-wrap-slider").owlCarousel({
            loop: true,
            margin: 50,
            responsiveClass: true,
            dots: false,
            navSpeed: 500,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navElement: 'div',
            navText: ["prev", "next"],
            responsive: {
                0: {
                    items: 3,

                },
                600: {
                    items: 3,
                    nav: false
                },
                767: {
                    items: 4,
                    nav: false
                },
                992: {
                    items: 4,
                    loop: true,
                    nav: true

                },
                1200: {
                    items: 6,
                    loop: true,
                    nav: true

                }
            }
        });
        $('.owl-carousel').find('.owl-nav').removeClass('disabled');
        $('.owl-carousel').on('changed.owl.carousel', function (event) {
            $(this).find('.owl-nav').removeClass('disabled');
        });

    })
    $(document).ready(function () {
        $('.filterproducts').slick({
            slideToShow: 1,
            slideToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.thumb-slider',


        });
        $('.thumb-slider').slick({
            sliderPerRow: 3,
            vertical: true,
            slideToShow: 3,
            slideToScroll: 3,
            asNavFor: '.filterproducts',

            verticalSwiping: true,
            infinite: false,
            prevArrow: '<div class="slick-prev">Previous</div>',
            nextArrow: '<div class="slick-next">Next</div>',
            infinite: true,

        });

    })
    /*Mobile nav toggle*/
    $(".mobile-menu").click(function (e) {
        e.stopPropagation();
        $('body').toggleClass('show-sidebar-nav')

    })
    $('body').click(function (e) {
        e.stopPropagation();
        if ($('body').hasClass('show-sidebar-nav')) {
            $('body').toggleClass('show-sidebar-nav')
        }


    })




})(jQuery);