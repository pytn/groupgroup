// Javascript for the ~pages~
// CS220

//Major names
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

//DR Names
var course1 = document.getElementById("headingOne2"); //LL
var course2= document.getElementById("headingTwo2"); //EC and SBA
var course3 = document.getElementById("headingThree2"); //LL
var course4 = document.getElementById("headingFour2"); //HS and LL
var course5= document.getElementById("headingFive2"); //HS and SBA
var course6 = document.getElementById("headingSix2"); //LAB, MM, NPS
var course7 = document.getElementById("headingSeven2"); //LAB, MM, NPS
var course8 = document.getElementById("headingEight2"); //QRF and NPS
var course9 = document.getElementById("headingNine2"); //QRB
var course10 = document.getElementById("headingTen2"); //ARS
var course11 = document.getElementById("headingEleven2"); //REP and ARS

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
  //if checkbox is checked, remove it.
  var classString ='\n';
  var boxes = document.getElementsByClassName('chk');
  var texts = document.getElementsByClassName('txt');

   for(i=0; i<boxes.length; i++ ){
       box = boxes[i];
       txt = texts[i];
       if(box.checked){
         classString= classString + txt.innerHTML + '\n';
           box.parentNode.removeChild(box);
           txt.parentNode.removeChild(txt);
           i=i-1;
       }
   }
   alert("Hello! You have successfully registered for:" + classString);
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

function filterDR(id) {

  if(id === 'one'){ //SBA
    course1.style.display = 'none';
    course2.style.display = 'flex';
    course3.style.display = 'none';
    course4.style.display = 'none';
    course5.style.display = 'flex';
    course6.style.display = 'none';
    course7.style.display = 'none';
    course8.style.display = 'none';
    course9.style.display = 'none';
    course10.style.display = 'none';
    course11.style.display = 'none';
  }else if (id === 'two'){ //LL
    course1.style.display = 'flex';
    course2.style.display = 'none';
    course3.style.display = 'flex';
    course4.style.display = 'flex';
    course5.style.display = 'none';
    course6.style.display = 'none';
    course7.style.display = 'none';
    course8.style.display = 'none';
    course9.style.display = 'none';
    course10.style.display = 'none';
    course11.style.display = 'none';
  }else if (id === 'three'){ //QRB
    course1.style.display = 'none';
    course2.style.display = 'none';
    course3.style.display = 'none';
    course4.style.display = 'none';
    course5.style.display = 'none';
    course6.style.display = 'none';
    course7.style.display = 'none';
    course8.style.display = 'none';
    course9.style.display = 'flex';
    course10.style.display = 'none';
    course11.style.display = 'none';
  }else if (id ==='four'){ //ARS
    course1.style.display = 'none';
    course2.style.display = 'none';
    course3.style.display = 'none';
    course4.style.display = 'none';
    course5.style.display = 'none';
    course6.style.display = 'none';
    course7.style.display = 'none';
    course8.style.display = 'none';
    course9.style.display = 'none';
    course10.style.display = 'none';
    course11.style.display = 'flex';
  }else if (id ==='five'){ //HS
    course1.style.display = 'none';
    course2.style.display = 'none';
    course3.style.display = 'none';
    course4.style.display = 'flex';
    course5.style.display = 'flex';
    course6.style.display = 'none';
    course7.style.display = 'none';
    course8.style.display = 'none';
    course9.style.display = 'none';
    course10.style.display = 'none';
    course11.style.display = 'none';
  }else if (id ==='six'){ //REL
    course1.style.display = 'none';
    course2.style.display = 'none';
    course3.style.display = 'none';
    course4.style.display = 'none';
    course5.style.display = 'none';
    course6.style.display = 'none';
    course7.style.display = 'none';
    course8.style.display = 'none';
    course9.style.display = 'none';
    course10.style.display = 'none';
    course11.style.display = 'flex';
  }else if (id ==='seven'){ //MM
    course1.style.display = 'none';
    course2.style.display = 'none';
    course3.style.display = 'none';
    course4.style.display = 'none';
    course5.style.display = 'none';
    course6.style.display = 'flex';
    course7.style.display = 'flex';
    course8.style.display = 'none';
    course9.style.display = 'none';
    course10.style.display = 'none';
    course11.style.display = 'none';
  }else if(id ==='eight'){ //EC
    course1.style.display = 'none';
    course2.style.display = 'flex';
    course3.style.display = 'none';
    course4.style.display = 'none';
    course5.style.display = 'none';
    course6.style.display = 'none';
    course7.style.display = 'none';
    course8.style.display = 'none';
    course9.style.display = 'none';
    course10.style.display = 'none';
    course11.style.display = 'none';
  }else if(id ==='nine'){ //QRF
    course1.style.display = 'none';
    course2.style.display = 'none';
    course3.style.display = 'none';
    course4.style.display = 'none';
    course5.style.display = 'none';
    course6.style.display = 'none';
    course7.style.display = 'none';
    course8.style.display = 'flex';
    course9.style.display = 'none';
    course10.style.display = 'none';
    course11.style.display = 'none';
  }else if(id ==='ten'){ //LAB
    course1.style.display='flex';
    course2.style.display='flex';
    course3.style.display = 'none';
    course4.style.display = 'none';
    course5.style.display = 'none';
    course6.style.display = 'flex';
    course7.style.display = 'flex';
    course8.style.display = 'none';
    course9.style.display = 'none';
    course10.style.display = 'none';
    course11.style.display = 'none';
  }
}
