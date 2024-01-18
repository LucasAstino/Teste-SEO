$(".slider__wrapper").slick({
    infinity: true,
    dots: true,
    autoplay: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><img class="arrow" src="/assets/arrow.svg"/></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img class="arrow" src="/assets/arrow.svg"/></button>`,
  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  });
  $('.team__btn').click(function(e){
      e.target.classList.add('active')
      $('.team__item').addClass('active')
  })