$(document).ready(function () {

  var loader = $('#loader');
  
  // var sendForm = $('#sendForm');


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

  // sendForm.on('click', function () {
  //   $.ajax({
  //     type: 'POST',
  //     url: "https://formspree.io/infro11@ukr.net",
  //     data: formData,
  //     success: function (res) {
  //       if (res.success) {
  //         stateMessage('success', res.msg);
  //       } else {
  //         stateMessage('error', res.msg);
  //       }
  //     },
  //     error: function (res) {
  //       stateMessage('error', res.statusText);
  //     },
  //     complete: function () {
  //
  //     }
  //   });
  // })
});

