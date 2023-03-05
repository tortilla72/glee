$(function () {

  $('.user-nav__btn-menu').unbind('click').on('click', function() {
    $('.user-nav__menu-item-add').toggleClass('user-nav__menu-item-add--hidden');
    return false;
  });

  $('.menu__list-btn').unbind('click').on('click', function(){
    $(this).next().toggleClass('menu__dropdown-list--active');
  });
});
