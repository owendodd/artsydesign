$('.artist-link').click(function() {
  event.preventDefault();

  console.log('hi');

  var linkContent = $(this).data('target'),
      tip = $(linkContent);


  $(tip).toggleClass('show');

  console.log(linkContent);

  

});