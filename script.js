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
