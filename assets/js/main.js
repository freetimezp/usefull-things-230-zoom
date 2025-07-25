$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    $(".zoom img").css({
        width: 100 + scroll / 5 + "%",
    });
});

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
