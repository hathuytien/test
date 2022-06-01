$(document).ready(function () {
  // changeImgSourceSp()
  $('.toggle-button').click(function () {
    if ($('body').hasClass('menu-open')) {
      $(this).removeClass('active')
      $('body').removeClass('menu-open');
      $('body').css('position', 'static');
      $(window).scrollTop(offsetY);
      $('#fixed-sp').css('z-index', '100');
    } else {
      $(this).addClass('active')
      $('body').addClass('menu-open');
      $('#fixed-sp').css('z-index', '99');
      offsetY = window.pageYOffset;
      $('body').css({
        position: 'fixed',
        width: '100%',
        top: -offsetY + 'px'
      });
    }
    return false;
  });
});
var lastScrollTop = 0;

$(window).scroll(function () {
  var st = $(this).scrollTop();
  if (lastScrollTop != 0) {
    if (st < lastScrollTop) {
      $("#pagetop").addClass("visible");
      if (st < 10) {
        $("#pagetop").removeClass("visible");
      }
    } else {

      $("#pagetop").removeClass("visible");

    }
  }
  lastScrollTop = st;
});
