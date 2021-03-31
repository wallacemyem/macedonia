// /*global $, alert, console, confirm*/

// $(function () {
//     "use strict";
//     //you can put magicStartLoop class in any element you want to start with it
  
//     //change magicStartLoop class every num of seconds
//     setInterval(function () {
//         //loop on every magicStartLoop in the page
//         $(".magicStartLoop").each(function () {
//             //after num of seconds make the first movement
//             $(this).addClass("hidden").removeClass("magicStartLoop");
//             //first movement
//             $(this).next().addClass("magicStartLoop").removeClass("hidden");
//             //check if the last element has magicStartLoop class to repeat the loop again
//             if ($(".sliderContainer").children().last().hasClass("magicStartLoop")) {
//                 setTimeout(function () {
//                     $(".sliderContainer").children().first().removeClass("hidden").addClass("magicStartLoop");
//                 }, 2000);//you must set this time as the same time for setInterval time
//             }
//         });
//     }, 2000);//you can change the time for silder from 2000 to any value you want
    
    
// });

    var cont=0;
function loopSlider(){
  var xx= setInterval(function(){
        switch(cont)
        {
        case 0:{
            $("#slider-1").fadeOut(400);
            $("#slider-2").delay(400).fadeIn(400);
            $("#sButton1").removeClass("bg-purple-800");
            $("#sButton2").addClass("bg-purple-800");
        cont=1;
        
        break;
        }
        case 1:
        {
        
            $("#slider-2").fadeOut(400);
            $("#slider-1").delay(400).fadeIn(400);
            $("#sButton2").removeClass("bg-purple-800");
            $("#sButton1").addClass("bg-purple-800");
           
        cont=0;
        
        break;
        }
        
        
        }},8000);

}

function reinitLoop(time){
clearInterval(xx);
setTimeout(loopSlider(),time);
}



function sliderButton1(){

    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton1").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=0
    
    }
    
    function sliderButton2(){
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-purple-800");
    $("#sButton2").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=1
    
    }

    $(window).ready(function(){
        $("#slider-2").hide();
        $("#sButton1").addClass("bg-purple-800");
        

        loopSlider();
     
        
    
    
    
    
    });
