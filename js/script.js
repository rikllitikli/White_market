$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

$('.btn_q').on('click', function(){
    $('.text_q').fadeToggle('slow');
    //or
    //$(this).next().fadeToggle('slow');
});
$('.btn_w').on('click', function(){
    $('.text_w').fadeToggle('slow');
    //or
    //$(this).next().fadeToggle('slow');
});
$('.btn_e').on('click', function(){
    $('.text_e').fadeToggle('slow');
    //or
    //$(this).next().fadeToggle('slow');
});
$('.btn_r').on('click', function(){
    $('.text_r').fadeToggle('slow');
    //or
    //$(this).next().fadeToggle('slow');
});
$('.btn_t').on('click', function(){
    $('.text_t').fadeToggle('slow');
    //or
    //$(this).next().fadeToggle('slow');
});
$('.btn_y').on('click', function(){
    $('.text_y').fadeToggle('slow');
    //or
    //$(this).next().fadeToggle('slow');
});
$('.btn_u').on('click', function(){
    $('.text_u').fadeToggle('slow');
    //or
    //$(this).next().fadeToggle('slow');
});
$('.btn_i').on('click', function(){
    $('.text_i').fadeToggle('slow');
    //or
    //$(this).next().fadeToggle('slow');
});
$('.btn_o').on('click', function(){
    $('.text_o').fadeToggle('slow');
    //or
    //$(this).next().fadeToggle('slow');
});