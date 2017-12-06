console.log(`quiz.js connected`); 


var score = 0;
var total = 6;
var point = 1;
var highest = total * point;

function init(){
    sessionStorage.setItem(`a1`,`b`);
    sessionStorage.setItem(`a2`,`a`);
    sessionStorage.setItem(`a3`,`d`);
    sessionStorage.setItem(`a4`,`b`);
    sessionStorage.setItem(`a5`,`c`);
    sessionStorage.setItem(`a6`,`b`);
}


$(document).ready(function(){
   $(`.questionForm`).hide();

   $(`#q1`).show();

   $(`#q1 #submit`).click(function(){
    $(`.questionForm`).hide();
    $(`#q2`).fadeIn(300);
    return false;
   });

   $(`#q2 #submit`).click(function(){
    $(`.questionForm`).hide();
    $(`#q3`).fadeIn(300);
    return false;
   });

   $(`#q3 #submit`).click(function(){
    $(`.questionForm`).hide();
    $(`#q4`).fadeIn(300);
    return false;
   });

   $(`#q4 #submit`).click(function(){
    $(`.questionForm`).hide();
    $(`#q5`).fadeIn(300);
    return false;
   });

   $(`#q5 #submit`).click(function(){
    $(`.questionForm`).hide();
    $(`#q6`).fadeIn(300);
    return false;
   });

   $(`#q6 #submit`).click(function(){
    $(`.questionForm`).hide();
    $(`#results`).fadeIn(300);
    return false;
   });


});


window.addEventListener(`load`,init,false);