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
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000,
  // });

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
    slideShadows:false,
    shadow:false
  },
});

// smooth scroll for links

gsap.registerPlugin(ScrollToPlugin);

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

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: [
          "#1abc9c",
          "#9b59b6",
          "#2c3e50",
          "#3498db",
          "#e74c3c",
          "#ecf0f1",
          "#f1c40f",
          "#ffffff",
          "#000000",
        ],
      },
      shape: {
        type: ["circle", "triangle", "star", "polygon", "edge"],
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 4,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: false,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);
