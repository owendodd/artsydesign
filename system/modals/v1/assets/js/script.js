$('.home').click(function() {
  event.preventDefault();

  $('.modal-wrapper, .modal, .home, .header, .blur').addClass('open');
 
})

$('.close').click(function() {
  event.preventDefault();

  $('.modal-wrapper, .modal, .home, .header, .blur').removeClass('open');
  stopPropagation();

})



// $('.button').click (function() {

//   $('.screen').toggleClass('hidden');

// })

$('.modal').css({ 'height': $('.modal').outerHeight() });

    $('.button').click(function() {
      var target          = $(this).data('target'),
          modal_height    = 180,
          $current_screen = $('.screen.show');
          next_target     = find_next_screen(target);
          
      $current_screen.removeClass('show');
      $(target).addClass('show');
      modal_height = modal_height + $(target).outerHeight();
      $('.modal').css({ 'height': modal_height });
      $('.button').data('target', next_target);
    });

    function find_next_screen(target) {
      var total_screens    = $('.screen').length,
          current_position = $(target).index() + 1,
          next_position    = current_position == total_screens ? 1 : current_position + 1,
          next_target      = '.screen-' + next_position;
      
      return next_target;
    }