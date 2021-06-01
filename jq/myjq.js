
// 21861077오진환


$(document).ready(function ()
{$('.hovercon').css('background-color','#111111cc');

    $('.ho').hover(function(){
        $('.hovercon').css('background-color','#11111100').animate(500);
    }, function() {
        $('.hovercon').css('background-color','#111111cc');
    });
});
