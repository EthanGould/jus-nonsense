$(document).ready(function(){
  $(".bottom").on("click", fadeColor)
  $(".col-2").on("click", backgroundMix)
});

var fadeColor = function(){
  $(".small-bottom").toggle( "highlight" );
}

var backgroundMix = function(){
  $(".col-2").toggleClass('turnup')
}
