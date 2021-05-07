export const settings = {
  className: "season-list",
  dots: false,
  infinite: false,
  speed: 700,
  slidesToShow: 7,
  slidesToScroll: 4,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        centerPadding: "11px",
        slidesToShow: 3,
        slidesToScroll: 3,
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
