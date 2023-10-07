// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".spinner").delay(500).fadeOut(400, function() {
        document.documentElement.style.setProperty('--backRightIn', 'translateX(100%)')
        document.documentElement.style.setProperty('--backLefttIn', 'translateX(-100%)')
        $(".loader").fadeOut(1500);
    });
    $("body").css("overflow-y", "auto");

});

$(document).ready(function () {

    // Click Open Nav In Mobile
    $(document).on("click", ".click-nav, .overlay",function() {
        $(".handle").toggleClass("closed");
        $("nav").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("nav li").toggleClass("animSlideIn");
        $("body").toggleClass("overflow-hidden");
    });

    /// Show And Hide Password
    $(document).on("click", ".icon-eye",function() {
        $('.icon-eye').toggleClass("icon-eye-off");
        if ($('.input-password').attr("type") === "password") {
            $('.input-password').attr("type", "text");
        } else {
            $('.input-password').attr("type", "password");
        }
    });

    // Animation Page
    AOS.init();
    
});


