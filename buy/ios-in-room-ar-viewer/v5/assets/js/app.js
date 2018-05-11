initialize_step_one();

$('.button').click(function() {
  var target = $(this).data('target'),
      parent = $(this).parent(),
      step   = $(this).data('step');

  $(parent).addClass('complete');
  $('.screen').removeClass('show');
  $(target).addClass('show');
  $('h2').html(step);
  
  if ($(this).hasClass('done')) {
    $('.modal').removeClass('show');
    $('.button.reset').addClass('show');
  } else if ($(this).hasClass('reset')) {
    $('.step-state img').toggleClass('show');
    $('.modal').addClass('show');
    $(this).removeClass('show');
    $('.screen').removeClass('complete');
    initialize_step_one();
  }
});

setTimeout(function() { 
  $('.modal').addClass('show');
}, 1000);

function initialize_step_one() {
  setTimeout(function() {
    $('.step-state img').toggleClass('show');
    setTimeout(function () {
      $('.button.hidden').click();
    }, 700);
  }, 4000);
}