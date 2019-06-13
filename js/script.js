
$(document).ready(function(){
  $("#about").hover(function(){
    $(".sub-about").show();
    
  });

  $(".sub-about").mouseleave(function(){
    $(this).hide();
    });

});


