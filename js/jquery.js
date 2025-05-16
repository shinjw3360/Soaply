$(function () {
  //menu active
  $('.menu_icon').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.menu_icon i').attr('class', 'ri-close-large-fill');
      $('.mobile_menus').slideDown('fast');
    } else {
      $('.menu_icon i').attr('class', 'ri-menu-line');
      $('.mobile_menus').slideUp('fast');
    }
  });
});
