import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OfferHome = () => {
  const settings_3 = {
    className: "slider variable-width",

    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 100,

    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="category sm:p-20 p-10">
        <div className="container m-auto slicker-width-btn">
          <Slider {...settings_3}>
            <div className="px-4">
              <div className="wrapper bg-white p-5 my-3 rounded-xl shadow-slate-998">
                <div className="imageClass">
                  <img
                    className="w-full cursor-pointer object-cover h-full rounded-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="wrapper bg-white p-5 my-3 rounded-xl shadow-slate-998">
                <div className="imageClass">
                  <img
                    className="w-full cursor-pointer object-cover h-full rounded-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="wrapper bg-white p-5 my-3 rounded-xl shadow-slate-998">
                <div className="imageClass">
                  <img
                    className="w-full cursor-pointer object-cover h-full rounded-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="wrapper bg-white p-5 my-3 rounded-xl shadow-slate-998">
                <div className="imageClass">
                  <img
                    className="w-full cursor-pointer object-cover h-full rounded-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="wrapper bg-white p-5 my-3 rounded-xl shadow-slate-998">
                <div className="imageClass">
                  <img
                    className="w-full cursor-pointer object-cover h-full rounded-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};
export default OfferHome;
