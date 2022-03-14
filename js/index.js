$(document).ready(()=>{


// Menu effects
    $('.menu').children().each(function(index, element){ 
        //each() itera los objetos element == this aquí.
        $(element).css({
            'top': '-200px'
        });
        $(element).animate({
            top: '0'
        },2000 + (index*500));
    });
    if($(window).width() > 800){
        // Header effect
        const textHeader = $('header .text');
        textHeader.css({
            opacity: '0',
            marginTop: 0,
        });
        textHeader.animate({
            opacity: '1',
            marginTop: '-52px'
        },2000);
        //  Paralax effect
    };
// Scroll Menu Elements
    var aboutUs = $('#aboutUs').offset().top,
    menu = $('#menu').offset().top,
    galery = $('#galery').offset().top,
    location = $('#location').offset().top;

    $('#btnAbout').on('click', (e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: aboutUs - 100
        },500);
    });
    $('#btnMenu').on('click', (e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu + 580
        },1000);
    });
    $('#btnGalery').on('click', (e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galery
        },1500);
    });
    $('#btnLocation').on('click', (e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: location + 600
        },2000);
    });



});