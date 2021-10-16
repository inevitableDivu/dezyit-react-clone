import React from 'react'
import Blog1 from '../assets/images/f5b934_4ac1f88e94ba4d96bb3d31095dd64804_mv2.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import SWiperCore, { Pagination, Navigation } from 'swiper'

SWiperCore.use([Pagination, Navigation])

export default function Blog() {
    return (
        <div className="bg-blog bg-cover py-10 px-6">
            <div className="pb-6">
                <h2 className="text-white font-semibold text-3xl text-center">Our Blogs</h2>
            </div>
            <div className="max-w-6xl mx-auto lg:flex justify-center">
                <Swiper
                    slidesPerColumn={3}
                    slidesPerColumnFill={3}
                    spaceBetween={30}
                    className="max-w-[960px] mx-auto flex flex-col-reverse"
                    pagination={{
                        type: 'fraction',
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            slidesPerColumn: 1,
                            pagination: {
                                type: 'bullets',
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return `<span class='${className} mt-1'>${index + 1}</span>`
                                }
                            }
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            slidesPerColumn: 1,
                            pagination: {
                                type: 'bullets',
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return `<span class='${className} mt-1'>${index + 1}</span>`
                                }
                            }
                        },
                    }}
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
                            return (
                                <SwiperSlide key={item} className="h-[fit-content]">
                                    <div className="bg-white max-w-[280px] lg:max-w-[290px] mx-auto">
                                        <div className="">
                                            <img src={Blog1} alt="" />
                                        </div>
                                        <div className="px-6 py-10">
                                            <span className="text-gray-600 text-sm opacity-70 font-thin flex">Apr 7 <li className="ml-3">3min</li></span>
                                            <h3 className="text-2xl font-light mt-5">5 Must-know Skills to Help You Design Better</h3>
                                            <p className="line-clamp-3 mt-3 font-light">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aliquid rem reiciendis aut quos omnis laborum perspiciatis illo doloremque sapiente nostrum culpa voluptate, suscipit optio perferendis. Sapiente dolorum facilis assumenda laborum, atque consectetur labore quibusdam aliquid cumque est ipsum, obcaecati nesciunt? Ea natus magni voluptate pariatur numquam explicabo voluptatem eligendi.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}