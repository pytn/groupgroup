// Javascript for the ~pages~
// CS220

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
  alert("Hello! You have successfully registered for:\n AMST 274 \nBISC 111 \nBISC 111-L01 \nAFR 211 \nYou were NOT registered for CAMS 101. If you want to be register for another course, please select one from your saved course list or browse other courses!")
  //if checkbox is checked, remove it.
  var boxes = document.getElementsByClassName('chk');
  //var texts = document.getElementsByClassName('txt');
   for(var i = 0; i<boxes.length; i++){
       box = boxes[i];
       //txt = texts[i];
       if(box.checked){
           box.parentNode.removeChild(box);
           //txt.parentNode.removeChild(txt);
       }
   }
}
