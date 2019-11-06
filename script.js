// Javascript for the ~pages~
// CS220

var courseAAFic = document.getElementById("headingOne");
var courseSFic = document.getElementById("headingTwo");
var coursePoetry = document.getElementById("headingThree");
var courseShakes = document.getElementById("headingFour");
var courseCalderwood = document.getElementById("headingFive");
var courseEDick = document.getElementById("headingSix");
var courseGlobalMA = document.getElementById("headingSeven");
var courseCritic1 = document.getElementById("headingEight");
var courseCritic2 = document.getElementById("headingNine");
var courseDarkEnlight = document.getElementById("headingTen");

//Popover Code
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});
$('.popover-dismiss').popover({
  trigger: 'focus'
})

//Drop down search code
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function alertFunc(){
  alert("Hello! You have successfully registered for:\n AMST 274 \nBISC 111 \nBISC 111-L01 \nAFR 211 \nCAMS 101")
  //if checkbox is checked, remove it.
  var boxes = document.getElementsByClassName('chk');
  var texts = document.getElementsByClassName('txt');

   for(i=0; i<boxes.length; i++ ){
       box = boxes[i];
       txt = texts[i];
       if(box.checked){
           box.parentNode.removeChild(box);
           txt.parentNode.removeChild(txt);
           i=i-1;
       }
   }
}

//show classes filters
function filterCourse(id) {

  if(id === 'headingFour'){ //Shakes class
    courseShakes.style.display='flex';
    courseAAFic.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseSFic.style.display = 'none';
    courseCalderwood.style.display = 'none';
    courseEDick.style.display = 'none';
    courseGlobalMA.style.display = 'none';
    courseCritic1.style.display = 'none';
    courseCritic2.style.display = 'none';
    courseDarkEnlight.style.display = 'none';
  }else if (id === 'headingFive'){ //300 Level Class
    courseCalderwood.style.display = 'flex';
    courseEDick.style.display = 'flex';
    courseGlobalMA.style.display = 'flex';
    courseShakes.style.display='none';
    courseAAFic.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseSFic.style.display = 'none';
    courseCritic1.style.display = 'none';
    courseCritic2.style.display = 'none';
    courseDarkEnlight.style.display = 'none';
  }else if (id === 'headingTwo'){ //Intro Class
    courseCritic1.style.display = 'flex';
    courseCritic2.style.display = 'flex';
    courseCalderwood.style.display = 'none';
    courseEDick.style.display = 'none';
    courseGlobalMA.style.display = 'none';
    courseShakes.style.display='none';
    courseAAFic.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseSFic.style.display = 'none';
    courseDarkEnlight.style.display = 'none';
  }else if (id ===''){
    courseShakes.style.display = 'none';
    courseAAFic.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseSFic.style.display = 'none';
    courseCalderwood.style.display = 'none';
    courseEDick.style.display = 'none';
    courseGlobalMA.style.display = 'none';
    courseCritic1.style.display = 'none';
    courseCritic2.style.display = 'none';
    courseDarkEnlight.style.display = 'none';
  }else if (id ==='headingThree'){//Non white class
    courseAAFic.style.display = 'flex';
    courseShakes.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseSFic.style.display = 'none';
    courseCalderwood.style.display = 'none';
    courseEDick.style.display = 'none';
    courseGlobalMA.style.display = 'none';
    courseCritic1.style.display = 'none';
    courseCritic2.style.display = 'none';
    courseDarkEnlight.style.display = 'none';
  }else if (id ==='headingSix'){ //Pre1800
    courseDarkEnlight.style.display = 'flex';
    courseGlobalMA.style.display = 'flex';
    courseAAFic.style.display = 'none';
    courseShakes.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseSFic.style.display = 'none';
    courseCalderwood.style.display = 'none';
    courseEDick.style.display = 'none';
    courseCritic1.style.display = 'none';
    courseCritic2.style.display = 'none';
  }else if (id ==='headingSeven'){ //Pre1900
    courseDarkEnlight.style.display = 'flex';
    courseSFic.style.display = 'flex';
    courseGlobalMA.style.display = 'flex';
    courseEDick.style.display = 'flex';
    courseAAFic.style.display = 'none';
    courseShakes.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseCalderwood.style.display = 'none';
    courseCritic1.style.display = 'none';
    courseCritic2.style.display = 'none';
  }else if(id ==='headingOne'){ //All courses
    courseCalderwood.style.display = 'flex';
    courseEDick.style.display = 'flex';
    courseGlobalMA.style.display = 'flex';
    courseShakes.style.display='flex';
    courseAAFic.style.display = 'flex';
    coursePoetry.style.display = 'flex';
    courseSFic.style.display = 'flex';
    courseCritic1.style.display = 'flex';
    courseCritic2.style.display = 'flex';
    courseDarkEnlight.style.display = 'flex';
  }
}
