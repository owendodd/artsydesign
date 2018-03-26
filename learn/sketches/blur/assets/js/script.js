$(document).scroll(function(event) {

  if(window.pageYOffset>600) {
    $('img').addClass("blur");
    $('.modal').css("opacity", "1");
  } else {
    $('img').removeClass("blur");
    $('.modal').css("opacity", "0");
  }

})