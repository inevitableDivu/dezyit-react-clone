import React from 'react'
import BaseImg from '../assets/images/Design Sprint - Design Thinking - Graphi.webp'

function Sprint() {
    return (
        <section className="px-5 max-w-sm sm:max-w-lg mx-auto md:grid grid-cols-12 place-items-center md:max-w-5xl py-12">
            <div className="py-5 md:py-0 col-span-7">
                <img src={BaseImg} alt="" />
            </div>
            <div className="px-2 md:pl-8 text-center md:text-left col-span-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(48,43,112)] tracking-wide md:mb-8">
                    What is a Design Sprint?
                </h2>
                <p className="py-3 md:pr-3 text-[#302B70] font-light tracking-wide">
                    The sprint is a five-day process for answering critical business questions through design, prototyping and testing ideas with customers. Developed at Google Ventures, it’s a “greatest hits” of business strategy, innovation, behaviour science, design thinking, and more—packaged into a battle-tested process that any team can use.
                </p>
            </div>
        </section>
    )
}

export default Sprint
