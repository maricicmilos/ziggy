$(document).ready(function () {
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    var navOffSet = $("#main-nav").offset().top + 420;
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        if (scrollPos >= navOffSet) {
            $("#main-nav").css({
                'position': 'fixed',
                'opacity': '0.85'
            });
        } else {
            $("#main-nav").css({
                'position': 'absolute',
                'opacity': '0.70'
            });
        }
    })
    $("#main-navbar li a").on("click", function () {
        var elemId = $(this).attr("href");
        $("body, html").animate({
            scrollTop: $(elemId).offset().top - 96
        }, 800);
    })
});
