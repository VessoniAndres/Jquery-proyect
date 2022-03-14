$(document).ready(()=>{
    $(window).scroll(function(){
        var windowWidth = $(window).width();
 
        if (windowWidth > 800) {
          var scroll = $(window).scrollTop();
            $('header .text').css({
                'transform' : 'translate(0px , '+ scroll / 4 +'%)'
            });
            $('.aboutUs article').css({
                'transform' : 'translate(0px , -'+ scroll / 5.5 +'%)'
            });
        }; 
     });
     $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('header .text').css({
                'transform' : 'translate(0px , 0px)'
            });
            $('.aboutUs article').css({
                'transform' : 'translate(0px , 0px)'
            });
        };
     });
});