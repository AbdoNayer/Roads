// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".spinner").delay(500).fadeOut(400, function() {
        document.documentElement.style.setProperty('--backRightIn', 'translateX(100%)')
        document.documentElement.style.setProperty('--backLefttIn', 'translateX(-100%)')
        $(".loader").fadeOut(1500);
    });
    $("body").css("overflow-y", "auto");

    if ($(window).width() < 767) {
        $("aside").addClass("in-aside");
        document.documentElement.style.setProperty('--aside-nav-width', '100px')
    }

});

$(document).ready(function () {

    // // ADD IMAGE
    $('.image-uploader').change(function (event){
        $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close"><i class="icon-trash text-white"></i></button></div>');
    });
    
    // REMOVE IMAGE
    $('.images-upload-block').on('click', '.close',function (){
        $(this).parents('.uploaded-block').remove();
    });

    // Scroll For Section
    $(document).on("click", ".down-in",function(e) {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 100
        }, 50);
        e.preventDefault();
    });

    // Click Open Nav In Mobile
    $(document).on("click", ".click-nav, .overlay",function() {
        $(".handle").toggleClass("closed");
        $(".nav-header").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("nav li").toggleClass("animSlideIn");
        $("body").toggleClass("overflow-hidden");
    });

    // Toggle Nav
    $(document).on("click", ".btn-fade-nav",function() {
        $("aside").toggleClass("in-aside");
        if ($("aside").hasClass('in-aside')) {
            document.documentElement.style.setProperty('--aside-nav-width', '100px')
        }else{
            document.documentElement.style.setProperty('--aside-nav-width', '250px')
        }
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

    // Scroll Fix Header
    $(window).scroll(function () {
        if ($(window).width() > 767) {
            if($(this).scrollTop() > 30){
                $('.header-home').addClass('header-fixed')
            }else{
                $('.header-home').removeClass('header-fixed')
            }
        }
    });

    // Upolad Files
    $('#file-upload').change(function() {
        var i = $(this).prev('label').clone();
        var file = $('#file-upload')[0].files[0].name;
        $(this).prev('label').text(file);
    });

    // Animation Page
    AOS.init();
    
});


