/* =========================================
                Start: Preloader
============================================ */
$(window).on("load", function() {
  // makes sure that whole site is loaded
  $("#status").fadeOut();
  $("#preloader")
    .delay(350)
    .fadeOut("slow");
});
/* =========================================
                End: Preloader 
============================================ */

/* =========================================
                Start: Team
============================================ */
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      }
    }
  });
});
/* =========================================
                End: Team
============================================ */

/* =========================================
                Start: Progress Bars
============================================ */
$(function() {
  $("#progress-elements").waypoint(
    function() {
      $(".progress-bar").each(function() {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%"
          },
          2000
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view"
    }
  );
});
/* =========================================
                End: Progress Bars
============================================ */

/* =========================================
               Start: Responsive Tabs
============================================ */
$(function() {
  $("#services-tabs").responsiveTabs({
    animation: "slide"
  });
});
/* =========================================
               End: Responsive Tabs
============================================ */

/* =========================================
               Start: Portfolio
============================================ */
$(window).on("load", function() {
  // Initialize Isotope
  $("#isotope-container").isotope({});
  // filter items on button click
  $("#isotope-filters").on("click", "button", function() {
    // get filter value
    var filterValue = $(this).attr("data-filter");
    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });
    // active button
    $("#isotope-filters")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });
});
/* =========================================
               End: Portfolio
============================================ */

/* =========================================
               Start: Magnifier
============================================ */
$(function() {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
/* =========================================
               End: Magnifier
============================================ */

/* =========================================
               Start: Testimonials
============================================ */
$(function() {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ]
  });
});
/* =========================================
               End: Testimonials
============================================ */

/* =========================================
              Start: Stats
============================================ */
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});
/* =========================================
              End: Stats
============================================ */

/* =========================================
              Start: Clients 
============================================ */
$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      480: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 6
      }
    }
  });
});
/* =========================================
              End: Clients
============================================ */

/* =========================================
             Start: Google Map
============================================ */
$(window).on("load", function() {
  // Map Variables
  var addressString = "230 Broadway, NY, New York 10007, USA";
  var myLatlng = {
    lat: 40.712685,
    lng: -74.00592
  };
  // 1. Render Map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatlng
  });
  // 2. Add Marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click To See Address"
  });
  // 3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });
  // Show info window when user clicks marker
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
  // 4. Resize Function
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
});
/* =========================================
              End: Google Map
============================================ */

/* =========================================
                Start: Animation
============================================ */
// animate on scroll
$(function() {
  new WOW().init();
});
// home animation on page load
$(window).on("load", function() {
  $("#").addClass("animated fadeInDown");
  $("#").addClass("animated fadeInLeft");
  $("#").addClass("animated zoomIn");
  $("#").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});
/* =========================================
                End: Animation
============================================ */

/* =========================================
                Start: Owl Carousel
============================================ */
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  mouseDrag: false,
  autoplay: true,
  animateOut: "slideOutUp",
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    }
  }
});
/* =========================================
                End: Owl Carousel
============================================ */

/* =========================================
              Start: Navigation
============================================ */
// Smooth Scrolling
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();

    // get section id like #about, #servcies, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64
      },
      1500,
      "easeInOutExpo"
    );
  });
});
/* =========================================
              End:Navigation
============================================ */

/* =========================================
              Start : Go-To-Top
============================================ */
var html, body, scrollToTopButton;
window.onload = function() {
  html = document.documentElement;
  body = document.body;
  scrollToTopButton = document.getElementById("scrollToTopButton");
};
function scrollToTop(totalTime, easingPower) {
  //console.log("here");
  var timeInterval = 1; //in ms
  var scrollTop = Math.round(body.scrollTop || html.scrollTop);
  //var by=- scrollTop;
  var timeLeft = totalTime;
  var scrollByPixel = setInterval(function() {
    var percentSpent = (totalTime - timeLeft) / totalTime;
    if (timeLeft >= 0) {
      var newScrollTop = scrollTop * (1 - easeInOut(percentSpent, easingPower));
      body.scrollTop = newScrollTop;
      html.scrollTop = newScrollTop;
      //console.log(easeInOut(percentSpent,easingPower));
      timeLeft--;
    } else {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      //window.location.hash = hash;
    }
  }, timeInterval);
}
function easeInOut(t, power) {
  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, power);
  } else {
    return 0.5 * (2 - Math.pow(2 * (1 - t), power));
  }
}
window.onscroll = controlScrollToTopButton;
function controlScrollToTopButton() {
  var windowInnerHeight = 2 * window.innerHeight;
  if (
    body.scrollTop > windowInnerHeight ||
    html.scrollTop > windowInnerHeight
  ) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
}
/* =========================================
              End : Go-To-Top
============================================ */
