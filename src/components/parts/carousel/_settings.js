export const settings = {
  className: "position-relative this-carousel",
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  centerPadding: "40px",
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        centerPadding: "11px",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        centerPadding: "28px",
        arrows: false,
      },
    },
  ],
};
