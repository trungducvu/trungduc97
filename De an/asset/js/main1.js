(function ($) {
    "use strict";
    $(document).ready(function () {

        $('.widget-product-grid').slick({
            slideToScroll: 4,
            slideToShow: 4,
            nav: true,
            dots: true,
            infinite: true,
        });
    })


})(jQuery);


/**/

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.gallery-product-photo_horizontal img');
const opacity = 0.4;

imgs.forEach(img =>
    img.addEventListener('click', imgClick));

function imgClick(e) {
    imgs.forEach(img => (img.style.opacity = 1));

    current.src = e.target.src;
    e.target.style.opacity = opacity;

}

/**/
const tabNav = document.querySelectorAll('.tab-nav .tabs-title');
const tabContent = document.querySelector('.tabs-content .tabs-tabs-content');

tabNav.forEach(tab => tab.addEventListener('click', tabClick));


function tabClick(e) {
    e.preventDefault();
    tabContent.classList.toggle('mgz-active')

    tabContent.nextElementSibling.classList.toggle('mgz-active');




}


