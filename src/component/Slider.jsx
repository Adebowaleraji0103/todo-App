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
      <SwiperSlide><img src="/Bag.png" alt="slide 1" /></SwiperSlide>
      <SwiperSlide><img src="/belt.png" alt="slide 2" /></SwiperSlide>
      <SwiperSlide><img src="/canvass.png" alt="slide 3" /></SwiperSlide>
      <SwiperSlide><img src="/Hat.png" alt="slide 3" /></SwiperSlide>
      
    </Swiper>
  );
};

export default SliderComponent;