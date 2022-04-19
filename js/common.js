$(function () {
  $("#fullpage").fullpage({
    navigation: true,
    css3: true,
    // easingcss3: "cubic-bezier(0.535, 0.235, 0.980, -0.110)",

    // 섹션을 떠날때
    onLeave: function (origin, destination, direction) {
      let leavingSection = this;

       // sec2 (portfolio.hollys)
       if (origin.index === 0 && direction === "down") {
        $(".about-items .item .image").addClass("active");
        $(".about-items .item .profile").addClass("active");
        $(".about-items .item nav").addClass("active");
      }
      if (origin.index === 1 && direction === "up") {
        $(".about-items .item .image").removeClass("active");
        $(".about-items .item .profile").removeClass("active");
        $(".about-items .item nav").removeClass("active");
      }

       // sec3
      if (origin.index === 1 && direction === "down") {
        // $("").addClass("active");
        $(".count-box .count").addClass("active");
      }
      if (origin.index === 2 && direction === "up") {
        // $("").removeClass("active");
        $(".count-box .count").removeClass("active");
      }

      // sec4 (portfolio.hollys)
      if (origin.index === 2 && direction === "down") {
        $(".portfolio.hollys .inner .image").addClass("active");
        $(".portfolio.hollys .inner .desc").addClass("active");
      }
      if (origin.index === 3 && direction === "up") {
        $(".portfolio.hollys .inner .image").removeClass("active");
        $(".portfolio.hollys .inner .desc").removeClass("active");
      }

      // sec5 (portfolio.golden)
      if (origin.index === 3 && direction === "down") {
        $(".portfolio.golden .inner .image").addClass("active");
        $(".portfolio.golden .inner .desc").addClass("active");
      }
      if (origin.index === 4 && direction === "up") {
        $(".portfolio.golden .inner .image").removeClass("active");
        $(".portfolio.golden .inner .desc").removeClass("active");
      }

       // sec6 (clone)
      if (origin.index === 4 && direction === "down") {
        $(".clone-item").addClass("active");
      }
      if (origin.index === 5 && direction === "up") {
        $(".clone-item").removeClass("active");
      }
       // sec7 ()
      if (origin.index === 5 && direction === "down") {
        $(".sec7 .inner .image").addClass("active");
        $(".contact-items li").addClass("active");
        $(".sec7 .inner .desc h3").addClass("active");
        $(".sec7 .inner .desc h4").addClass("active");
        $(".contact .images img").addClass("active");
      }
      if (origin.index === 6 && direction === "up") {
        $(".sec7 .inner .image").removeClass("active");
        $(".contact-items li").removeClass("active");
        $(".sec7 .inner .desc h3").removeClass("active");
        $(".sec7 .inner .desc h4").removeClass("active");
        $(".contact .images img").removeClass("active");
      }
    },
  });
  $("#intro")
  .delay(2800)
  .fadeOut(800, function () {
    $("body").removeClass("before-load");
  });

  $(".menu-btn").click(function () {
    $(".menu-btn").toggleClass("active");
    $(".menu-box .menu").toggleClass("active");
  });

  // $(".contact-items .item.item01 img").click(function () {
  //   $(".contact-items .item.item01 img").toggleClass("active");
  // });
});
