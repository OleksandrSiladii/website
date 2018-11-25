$(document).ready(function () {

  var loader = $('#loader');


  var popup = $('.popup');
  var popupBackdrop = $('.popup-backdrop');
  var popupClose = $('.popup-close');

  var menuBtn = $('.menuBtn');

  menuBtn.click(function () {
    $(this).toggleClass('open');
    popup.toggleClass('open');

  });

// Modal -----------------------------------
  popupBackdrop.click(function () {
    popup.removeClass('open');
  });

  popupClose.click(function () {
    popup.removeClass('open');
  });
});

