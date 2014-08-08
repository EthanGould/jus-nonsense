$(document).ready(function(){
  $(".bottom").on("click", fadeColor)

});

var fadeColor = function(){
  $(".small-bottom").toggle( "highlight" );
}
