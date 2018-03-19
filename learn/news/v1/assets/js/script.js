$('.expand-button').click(function() {
        var parent_to_find = $(this).parent();
        var content_to_expand = $(parent_to_find).prev(".content")
        $(content_to_expand).addClass('expanded');
        $(this).fadeOut(0);

        $(  )

        event.preventDefault()
      });

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("day-head");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}