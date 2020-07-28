$(document).ready(function() {

$('.reviews__carousel_content').slick( {
    variableWidth: false,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
    ]
});

//modal

$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks').fadeOut('slow');
});

//validate

function validateForms (form) {
  $(form).validate({
      rules: {
          name: "required",
          phone: "required",
          email: {
              required: true,
              email: true
          }
      },
      messages: {
          name: "Введите ваше имя",
          phone: "Введите ваш телефон",
          email: {
            required: "Для связи с вами необходим корректный e-mail адрес",
            email: "Ваш email адрес должен быть в формате name@domain.com"
          }
        }
  });
};
validateForms('#consultation-form');
validateForms('#consultation form');

$('input[name=phone]').mask("+3 (999) 999-99-99");

//send mailer

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find('input').val('');
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
  });
  return false;
});

});