// Javascript for the ~pages~
// CS220

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});
$('.popover-dismiss').popover({
  trigger: 'focus'
})
