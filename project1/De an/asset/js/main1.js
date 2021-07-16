(function ($) {
  "use strict";
  $(document).ready(function () {


    $('.widget-product-grid').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });
  })

  $(".action.delete").click(function removeCartItem(e) {
    e.preventDefault();
    $(this).parent().parent().parent().parent().parent().parent().parent().children().remove()

  });
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





