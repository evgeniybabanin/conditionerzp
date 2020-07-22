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