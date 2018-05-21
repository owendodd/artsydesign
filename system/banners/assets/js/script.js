$('.open').click(function(){
  $('.banner').addClass('open');
})

$('.close').click(function(){
  $( '.banner' ).addClass('off');
  setTimeout(function(){
    $( '.banner' ).removeClass('open');
  }, 250);
  setTimeout(function(){
    $( '.banner' ).removeClass('off');
  }, 500);
})

$('.black').click(function(){
  $( '.banner' ).toggleClass('black');
  $(this).toggleClass('open');
})

$('.green').click(function(){
  $( '.banner' ).toggleClass('green');
  $(this).toggleClass('open');
})

$('.yellow').click(function(){
  $( '.banner' ).toggleClass('yellow');
  $(this).toggleClass('open');
})

$('.red').click(function(){
  $( '.banner' ).toggleClass('red');
  $(this).toggleClass('open');
})

$('.purple').click(function(){
  $( '.banner' ).toggleClass('purple');
  $(this).toggleClass('open');
})