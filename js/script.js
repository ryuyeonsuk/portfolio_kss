$(function() {
    $('.gnb').on('mouseover focusin', function() {
        $('.bgGnb').fadeIn();
        $('.gnb > ul > li').children('ul').fadeIn()
    })
    $('.bgGnb').on('mouseleave', function() {
        $(this).fadeOut(100);
        //('.gnb .sub').fadeOut(100)
        $('.gnb > ul > li').children('ul').fadeOut(100)

    })
});