$(function(){
    $('.menu-toggle').on('click', function(){
        $(".nav").toggleClass("mobile-nav");
        $(this).toggleClass("is-active");
    });
});
