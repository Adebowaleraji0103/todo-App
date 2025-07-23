import { SwiperSlide } from "swiper/react";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SliderComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide><img src="/img1.jpg" alt="slide 1" /></SwiperSlide>
      <SwiperSlide><img src="/img2.jpg" alt="slide 2" /></SwiperSlide>
      <SwiperSlide><img src="/img3.jpg" alt="slide 3" /></SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;