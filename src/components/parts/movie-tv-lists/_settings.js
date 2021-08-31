export const settings = {
  className: "position-relative this-thumbnail",
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 10,
  slidesToScroll: 5,
  autoplay: false,
  centerMode: false,
  lazyLoad: true,
  swipe: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        swipe: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        swipe: true,
        slidesToShow: 6,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        swipe: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: true,
      },
    },
    {
      breakpoint: 1441,
      settings: {
        swipe: false,
        slidesToShow: 8,
        slidesToScroll: 3,
      },
    },
  ],
};
