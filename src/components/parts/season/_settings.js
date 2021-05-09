export const settings = {
  className: "position-relative season-list",
  dots: false,
  infinite: false,
  speed: 700,
  slidesToShow: 7,
  slidesToScroll: 4,
  lazyLoad: true,
  swipe: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        swipe: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        swipe: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
        swipe: true,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        arrows: true,
        swipe: false,
      },
    },
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4,
        arrows: true,
        swipe: false,
      },
    },
  ],
};
