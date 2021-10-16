import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([EffectFade, Autoplay])

function ImageSlider({ imageArray = [], shift = true, className }) {
    return (
        <Swiper
            effect={'fade'}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
            loop
            className={`max-w-[290px] md:max-w-sm mx-auto ${shift ? 'md:left-7' : 'md:left-0'}`}
        >
            {
                imageArray.map(item => {
                    return (
                        <SwiperSlide className="mx-auto">
                            <img src={item} className={`w-full max-w-[290px] ${className ? className : 'lg:min-w-[345px] '} mx-auto`} alt="" />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default ImageSlider
