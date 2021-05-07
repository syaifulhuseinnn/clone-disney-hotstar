export const settings = {
  className: "position-relative episode-list",
  dots: false,
  infinite: false,
  speed: 700,
  slidesToShow: 7,
  slidesToScroll: 4,
  swipe: false,
  lazyLoad: true,
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
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        arrows: true,
      },
    },
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4,
        arrows: true,
      },
    },
  ],
};
