!(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1500,
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);

// (function () {
// ========== Nav Toggle  toggle effects ==========
const burger = document.querySelector(".burger");
const navmenu = document.querySelector(".navbar-nav");
const burgerborder = document.querySelector(".burger");
const nalink = document.querySelectorAll(".nav-link");

// toggle nav
burger.addEventListener("click", () => {
  navmenu.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
  burgerborder.classList.toggle("burg");
});
for (var i = 0; i < nalink.length; i++) {
  (function (index) {
    nalink[index].addEventListener("click", function () {
      navmenu.classList.remove("nav-active");
      burger.classList.remove("toggle");
      burgerborder.classList.remove("burg");
    });
  })(i);
}

// ========== Navbar scroll effects ==========
window.onscroll = function () {
  myFunction();
};
var nav = document.getElementById("navie");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: { delay: 400 },
  speed: 1000,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
    shadow: false,
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".btn-head", {
  duration: 2.5,
  opacity: 1,
  scrollTrigger: {
    trigger: ".about",
    scrub: true,
  },
});

// gsap.from(".about", {
//     trigger: ".about",
//     opacity: 1,
//     duration: 1,
//     y: -50,
//     ease: "Power2.easeInOut",
//   });
// })();

// smooth scroll for links

//

// Detect if a link's href goes to the current page
// function getSamePageAnchor(link) {
//   if (
//     link.protocol !== window.location.protocol ||
//     link.host !== window.location.host ||
//     link.pathname !== window.location.pathname ||
//     link.search !== window.location.search
//   ) {
//     return false;
//   }

//   return link.hash;
// }
// Scroll to a given hash, preventing the event given if there is one
// function scrollToHash(hash, e) {
//   const elem = hash ? document.querySelector(hash) : false;
//   if (elem) {
//     if (e) e.preventDefault();
//     gsap.to(window, { scrollTo: elem, duration: 1, ease: Linear.easeNone });
//   }
// }
// If a link's href is within the current page, scroll to it instead
// document.querySelectorAll("a[href]").forEach((a) => {
//   a.addEventListener("click", (e) => {
//     scrollToHash(getSamePageAnchor(a), e);
//   });
// });

// Scroll to the element in the URL's hash on load
// scrollToHash(window.location.hash);

// gsap.from(".one", {
//   opacity: 0,
//   duration: 1.2,
//   y: -50,
//   // ease: "Power2.easeInOut",
//   stagger: 0.6,
// });
// gsap.registerPlugin(TextPlugin);
// gsap.to(".one", {
//   duration: 2,
//   text: {
//     value: "This is the new text",
//     delimiter: " ",
//   },
//   ease: "none",
// });
