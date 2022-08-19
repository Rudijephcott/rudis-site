document.addEventListener("keyup", function (e) {
  if (e.keyCode === 71) {
    document.querySelector(".grid-overlay").classList.toggle("show");
  }
});

$(document).ready(function() {
  $('.nav-bar a').click(function(event) {
    let targetElement = $(this.hash);
    if (targetElement.length) {
    event.preventDefault();
    let targetCalc = targetElement.offset().top - 50;
    $('html, body').animate({
      scrollTop: targetCalc
    }, 1000);
  }});

});