import React from 'react'
import BaseImg from '../assets/images/DezyIt-Home-Mockup.webp'
import LoginImg from '../assets/images/Login-DezyIt.webp'
import SecondImg from '../assets/images/Design Thinking Sprint - Centre3.webp'
import ThirdImg from '../assets/images/Useful Tips-Dezy It.webp'
import AppStore from '../assets/images/AppStore-DezyIt.webp'
import PlayStore from '../assets/images/GooglePlay-DezyIt.webp'
import Aos from 'aos'
import ImageSlider from './ImageSlider'

const imageArray = [BaseImg, LoginImg, SecondImg, ThirdImg]

function Home() {
    Aos.init({
        offset: 0,
        duration: 500,
        easing: 'ease-in',
        delay: 200
    })

    return (
        <section className="bg-hero md:bg-herolg bg-cover px-5 mt-[50px] md:mt-[79px] lg:max-h-[550px]">
            <div className="md:flex md:justify-between md:pt-10 max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
                <div className="py-6 flex-grow flex-shrink-0 md:pt-0 text-center md:text-left flex flex-col">
                    <div className="md:mb-16 lg:mb-20 md:mt-8 lg:mt-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl md:text-left font-semibold text-white py-4 md:mb-3 lg:mb-6">
                            Your personal<br /> Design Sprint Master!
                        </h2>
                        <span className="text-white text-opacity-90 tracking-wider md:text-lg font-light">
                            Time to innovate? let's Dezy it!
                        </span>
                    </div>
                    <div className="pb-8 hidden md:block text-left">
                        <h3 className="text-2xl text-white text-opacity-80 tracking-wide font-semibold pb-2">Download Now!</h3>
                        <span className="text-[rgb(48,43,112)] font-bold">And enjoy our Beta Version for free!</span>
                        <div className="pt-5">
                            <button id="playstore" className="mr-3">
                                <img src={PlayStore} alt="" className="bg-cover h-10 lg:h-11 w-auto" />
                            </button>
                            <button className="">
                                <img src={AppStore} alt="" className="bg-cover h-10 lg:h-11 w-auto" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pb-6 md:pb-10 px-5 md:px-0">
                    <ImageSlider imageArray={imageArray} />
                </div>
                <div className="pb-8 text-center md:hidden">
                    <h3 className="text-xl text-white text-opacity-80 tracking-wide font-light pb-2">Download Now!</h3>
                    <span className="text-[rgb(48,43,112)] font-bold">And enjoy our Beta Version for free!</span>
                    <div className="pt-5">
                        <button id="playstore" className=" mr-3">
                            <img src={PlayStore} alt="" className="bg-cover h-9 w-auto" />
                        </button>
                        <button className="">
                            <img src={AppStore} alt="" className="bg-cover h-9 w-auto" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
