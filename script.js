// Javascript for the ~pages~
// CS220

var courseAAFic = document.getElementById("headingOne");
var courseSFic = document.getElementById("headingTwo");
var coursePoetry = document.getElementById("headingThree");
var courseShakes = document.getElementById("headingFour");
var courseCalderwood = document.getElementById("headingFive");
var courseEDick = document.getElementById("headingSix");
var courseGlobalMA = document.getElementById("headingSeven");

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

  if(id === 'headingFour'){
    courseShakes.style.display='flex';
    courseAAFic.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseSFic.style.display = 'none';
    courseCalderwood.style.display = 'none';
    courseEDick.style.display = 'none';
    courseGlobalMA.style.display = 'none';
  }else if (id === 'headingFive'){
    courseCalderwood.style.display = 'flex';
    courseEDick.style.display = 'flex';
    courseGlobalMA.style.display = 'flex';
    courseShakes.style.display='none';
    courseAAFic.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseSFic.style.display = 'none';
  }else if (id ===''){
    courseShakes.style.display='none';
    courseAAFic.style.display = 'none';
    coursePoetry.style.display = 'none';
    courseSFic.style.display = 'none';
    courseCalderwood.style.display = 'none';
    courseEDick.style.display = 'none';
    courseGlobalMA.style.display = 'none';

    // var done = document.createElement("h1");
    // done.innerHTML = "You've finished this requirement!";
    // document.body.appendChild(done);

  }else {
    courseCalderwood.style.display = 'flex';
    courseEDick.style.display = 'flex';
    courseGlobalMA.style.display = 'flex';
    courseShakes.style.display='flex';
    courseAAFic.style.display = 'flex';
    coursePoetry.style.display = 'flex';
    courseSFic.style.display = 'flex';
  }
}
