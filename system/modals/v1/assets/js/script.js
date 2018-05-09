$('.home').click(function() {
  event.preventDefault();

  $('.modal-wrapper, .modal, .home, .header, .blur').addClass('open');
  console.log('hello');
 
})

$('.close').click(function() {
  event.preventDefault();

  $('.modal-wrapper, .modal, .home, .header, .blur').removeClass('open');
  stopPropagation();

})



$('.button').click (function() {
  event.preventDefault();

  $('.screen').toggleClass('hidden')
})