$(document).ready(function () {
  $("#fullpage").fullpage({
    anchors: [
      "section-intro",
      "products",
      "services",
      "clients",
      "technology",
      "about-us",
      "contact",
    ],
    menu: ".main-menu",
    autoScrolling: true,
    scrollOverflow: true,
    scrollHorizontally: true,
    scrollBar: false,
    navigation: false,
    showActiveTooltip: false,
    controlArrows: false,
    scrollHorizontally: true,
    keyboardScrolling: false,
    animateAnchor: true,
    scrollHorizontallyKey: "YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==",
  });
  $(".your-class").slick({
    infinite: true,
    arrows: true,
    draggable: false,
    autoScrolling: true,
    scrollBar: true,
    dragAndMove: true,
  });
  $(".slider_about").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "linear",
    speed: 2000,
  });
  $(".slider_about1").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    centerPadding: "0px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slider-services").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    centerPadding: "0px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slider-clients").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    // swipe: false,
    centerPadding: "0px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slider-team").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    swipe: false,
    centerPadding: "0px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slider-1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-2",
    autoScrolling: true,
    fade: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slider-2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    asNavFor: ".slider-1",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // setTimeout(function () {
  //   if ($("body").hasClass("fp-viewing-section-intro")) {
  //     fullpage_api.setAllowScrolling(false);
  //     $(".section-intro").removeClass("active-block");
  //     $("body").removeClass("active-block");
  //   } else {
  //     fullpage_api.setAllowScrolling(true);
  //     $(".section-intro").addClass("active-block");
  //     $("body").addClass("active-block");
  //   }
  // }, 200);

  // $(".block-intro_1 .button-power").click(function () {
  //   $(".section-intro").addClass("active-block");
  //   $("body").addClass("active-block");
  //   fullpage_api.setAllowScrolling(true);
  //   fullpage_api.setKeyboardScrolling(true);
  // });

  // $(".modal").on("show.bs.modal", function (event) {
  //   fullpage_api.setAllowScrolling(false);
  //   fullpage_api.setKeyboardScrolling(false);
  // });
  // $(".modal").on("hidden.bs.modal", function (e) {
  //   fullpage_api.setAllowScrolling(true);
  //   fullpage_api.setKeyboardScrolling(true);
  //   s;
  // });

  // $(".button-menu").click(function () {
  //   $("body").toggleClass("mobile-menu");
  // });
  // $(".close").click(function () {
  //   $("body").removeClass("mobile-menu");
  // });
  // $(".menu_item").click(function () {
  //   $("body").removeClass("mobile-menu");
  // });

  // $(".technology_circle").each(function () {
  //   var $container = $(this);
  //   $(".technology_circle .circle_text .text_itm:first").addClass("active");
  //   $(".technology_circle .circle_text_mobile .text_itm:first").addClass("active");
  //   $container.find("[data-id]").hover(
  //     function () {
  //       var id = $(this).data("id");
  //       $(".technology_circle .circle_text .text_itm:first").removeClass("active");
  //       $(".technology_circle .circle_text_mobile .text_itm:first").removeClass("active");
  //       $container.find(".project-list").addClass("active");
  //       $container.find(".text_itm").removeClass("active");
  //       $container.find(".project-list .circle").removeClass("active");
  //       $container.find("[data-id='" + id + "']").addClass("active");
  //       if ($(window).width() <= 767) {
  //         setTimeout(function () {
  //           $container.find(".project-list").removeClass("active");
  //         }, 200);
  //       }
  //     },
  //     function () {
  //       $container.find(".project-list").removeClass("active");
  //     }
  // );
  // });
});
