$(function () {

  $('.user-nav__btn-menu').unbind('click').on('click', function() {
    $('.user-nav__menu-item-add').toggleClass('user-nav__menu-item-add--hidden');
  });

  $('.menu__list-item--dropdown').hover(function() {
    $(this).find('.menu__dropdown-list').addClass('menu__dropdown-list--active');
  }, function() {
    $(this).find('.menu__dropdown-list').removeClass('menu__dropdown-list--active');
  });

  $('.cover__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
  });

});