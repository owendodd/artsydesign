$('.nav').click(function() {
  var family = $(this).data('target');
  $('.step').removeClass('sans serif display').addClass(family);
})