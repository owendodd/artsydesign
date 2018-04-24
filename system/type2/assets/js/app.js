$('.nav').click(function() {
  $('.nav').removeClass('active');
  $(this).addClass('active');
  var family = $(this).data('target');
  $('.step').removeClass('sans serif display').addClass(family);
})

$('.style-weight').click(function(){
  $(this).toggleClass('active');
  $('.step').toggleClass('med');

})

$('.style-italic').click(function(){
  $(this).toggleClass('active');
  $('.step').toggleClass('ital');
})

$('.style-underline').click(function(){
  $('.nav').removeClass('active');
  $(this).addClass('active');
  $('.u').toggleClass('u1 u2');
})