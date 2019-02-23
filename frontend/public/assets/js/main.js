(function($) {
  "use strict";

  /* Preloader */
  // var win = $(window);
  // win.on('load', function () {
  // 	$('.page-loader').delay(350).fadeOut('slow');
  // });

  // One Page Nav
  var top_offset = $(".header-area").height() - 100;
  $(".main-menu nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: top_offset
  });

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function() {
    var scroll = wind.scrollTop();
    if (scroll < 1) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  // menu toggle
  $(".navbar-toggle").on("click", function() {
    $(".navbar-nav").addClass("mobile_menu");
  });
  $(".navbar-nav li a").on("click", function() {
    $(".navbar-collapse").removeClass("show");
  });

  /* image-link */
  $(".image-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });
  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe"
  });

  /* brand-active */
  $(".brand-active").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  /* testimonial-active */
  $(".testimonial-active").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  /* testimonial-active */
  $(".screenshot-active").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /* testimonial-active */
  $(".screenshot-active-2").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  // scrollToTop
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="ti-angle-up"></i>', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // WOW active
  new WOW().init();
})(jQuery);
