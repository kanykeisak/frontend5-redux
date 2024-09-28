import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCards, EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function SwiperComponent({swiperImages}) {
    return (
        <>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Navigation, Pagination]}
                className="mySwiper"
            >
                {swiperImages.map(item =>
                    <SwiperSlide >
                        <img src={item.url} alt='' />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}