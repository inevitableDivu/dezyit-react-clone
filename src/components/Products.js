import React from 'react'
import BaseImg from '../assets/images/DezyIt-Home-Mockup.webp'
import SecondImg from '../assets/images/Design Thinking Sprint - Centre4.webp'
import ThirdImg from '../assets/images/Design Thinking Sprint - Centre3.webp'
import AppStore from '../assets/images/AppStore-DezyIt.webp'
import PlayStore from '../assets/images/GooglePlay-DezyIt.webp'
import ImageSlider from './ImageSlider'

const imageArray = [BaseImg, SecondImg, ThirdImg]

function Products() {
    return (
        <section className="bg-product md:bg-productlg bg-cover px-5 mt-10">
            <div className="py-10 md:py-16">
                <h2 className="text-3xl font-bold text-center text-white py-3 md:pb-6">
                    Our Products
                </h2>
                <p className="text-white font-extralight text-center tracking-wide max-w-xl mx-auto">
                    Dezy It, is your personal design sprint master. It is your design thinking guide and companion to help you facilitate design sprints, to innovate, pivot and improve on the user experience of your product.
                </p>
            </div>
            <div className="px-5">
                <ImageSlider shift={false} imageArray={imageArray} className="!max-w-[280px]" />
            </div>
            <div className="py-6 md:pb-16 text-center">
                <h3 className="text-xl md:text-2xl text-white text-opacity-80 tracking-wide font-medium pb-2">Download Now!</h3>
                <span className="text-[rgb(120,124,209)] font-bold hidden md:block">And enjoy our Beta Version for free!</span>
                <div className="pt-3 md:pt-5">
                    <button id="playstore" className="mr-3">
                        <img src={PlayStore} alt="" className="bg-cover h-9 md:h-10 lg:h-11 w-auto" />
                    </button>
                    <button className="">
                        <img src={AppStore} alt="" className="bg-cover h-9 md:h-10 lg:h-11 w-auto" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Products
