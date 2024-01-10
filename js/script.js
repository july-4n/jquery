const burger = $('.header__burger');
const headerNav = $('.header__navigation');
const closeNav = $('.navigation__close');

burger.on('click', function () {
  headerNav.animate({
    left: 0,
  }, 500, function () {
    closeNav.animate({
      opacity: 1,
    }, 300)
  });
});

closeNav.on('click', function () {
  closeNav.animate({
    opacity: 1,
  }, 300, function () {
    headerNav.animate({
      left: '-400px',
    }, 500)
  });
});
