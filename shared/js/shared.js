$("body").on("click", "#pagetop", function () {
    if (!$(this).hasClass("in-scroll")) {
      $(this).addClass("in-scroll");

      var $scrollDuration = $.inArray($(this).attr("data-duration"), ["slow", "normal", "fast"]) >= 0 || parseInt($(this).attr("data-duration")) > 0 ? $(this).attr("data-duration") : "slow";

      $("html, body").stop().animate({
        scrollTop: 0
      }, $scrollDuration, function () {
        $("#pagetop").removeClass("in-scroll");
      });
    }
  });
$(document).ready(function () {
  $(".mobile-nav a[href^='#']").on("click", function () {
    $(".toggle-button").removeClass('active')
    $('body').removeClass('menu-open');
    $('body').css('position', 'static');
    //$(window).scrollTop(offsetY);
  })
});

$(document).ready(function () {
	if ($('.nav-fixed[scroll-active]').length && $('.nav-fixed').attr('scroll-active') === "true")
	  $(document).on('scroll', onScroll)
	$(document).on('scroll', onScroll2)
	$('.nav-fixed a[href^="#"]').on('click', function () {
	  var e = $(this).attr('href')
	  var h = $('.nav-fixed').outerHeight()
	  var logo = $('.logo.sp').outerHeight()
	  var b = $(e).length ? $(e).offset().top : 0
	  $('html, body').animate({
		scrollTop: (b + 1 - h)
	  }, 1000)
	  if(window.matchMedia("(max-width: 768px)").matches) {
		$('html, body').animate({
			scrollTop: (b + 1 - logo*2)
		  }, 1000)
	  }
	  console.log(b, e)
	})
  });
function onScroll() {
  var scroll = $(window).scrollTop()
  var header = $('.nav-fixed').outerHeight()
  $('.nav-fixed a[href^="#"]').each(function () {
    var el = $(this).attr('href')
    var offset = $(el).length ? $(el).offset().top : 0
    if ((scroll + header + 1) >= offset && ($(el).outerHeight() + offset) > (scroll + header)) {
      $('.nav-fixed a').removeClass('active')
      $(this).addClass('active')
    }
  })
}

function onScroll2() {
  var scroll = $(window).scrollTop()
  //var header = $('.nav-fixed').outerHeight()
  $('.mobile-nav a[href^="#"]').each(function () {
    var el = $(this).attr('href')
    var offset = $(el).length ? $(el).offset().top : 0
    if ((scroll + 1) >= offset && ($(el).outerHeight() + offset) > (scroll)) {
      $('.mobile-nav a').removeClass('active')
      $(this).addClass('active')
    }
  })
}
