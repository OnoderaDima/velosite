$(document).ready(function(){ 
    
    /* Карточка велосипеда */
    $('div.bike-card > div.bike-picture').mouseenter(function(){ 
        $(this).children('div.bike-picture-zoom').stop().fadeIn('fast');
    });

    $('div.bike-card > div.bike-picture').mouseleave(function(){ 
        $(this).children('div.bike-picture-zoom').stop().fadeOut('fast');         
    });
});