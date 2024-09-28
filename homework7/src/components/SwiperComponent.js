import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SwiperComponent({ images }) {
    return (
        <Swiper slidesPerView={1} className="mySwiper">
            {images.map((url, index) => (
                <SwiperSlide key={index}>
                    <img src={url} alt="slider" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
