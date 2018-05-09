$('.home').click(function() {
  event.preventDefault();

  $('.modal-wrapper, .modal, .home, .header, .blur').addClass('open');
 
})

$('.close').click(function() {
  event.preventDefault();

  $('.modal-wrapper, .modal, .home, .header, .blur').removeClass('open');
  stopPropagation();

})



$('.button').click (function() {

  $('.screen').toggleClass('hidden');
  $('.screen').toggleClass('off');

})