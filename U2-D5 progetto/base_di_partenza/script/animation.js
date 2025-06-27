window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var changeBgColor = document.getElementById('changeBgColor');

  if (scrollPosition > 400) {
    changeBgColor.classList.add('scrolled');
  } else {
    changeBgColor.classList.remove('scrolled');
  }
});
