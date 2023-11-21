import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import modules
import { Autoplay } from "swiper/modules";

const imgs = [
  {
    imgUrl: "/src/assets/images/cama1.jpg",
  },
  {
    imgUrl: "/src/assets/images/cama2.jpg",
  },
  {
    imgUrl: "/src/assets/images/cama3.jpg",
  },
  {
    imgUrl: "/src/assets/images/cama4.jpg",
  },
  {
    imgUrl: "/src/assets/images/cama5.jpg",
  },
];

export const SliderHome = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 2000,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
              }}
              modules={{ Autoplay }}
              className="mySwiper"
            >
              {imgs.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="sponsor-item">
                    <div className="sponsor-thumb">
                      <img src={val.imgUrl} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
