import React from 'react'
import CollaborationImg from '../assets/images/Design Sprint - Design Thinking - Graphi (1).webp'
import CreativityImg from '../assets/images/Design Sprint - Design Thinking - Graphi (2).webp'
import EmpathyImg from '../assets/images/Design Sprint - Design Thinking - Graphi (3).webp'

function About() {
    const data = [
        {
            id: 1, title: 'Collaboration', description: `The product development journey can become a linear process where there is very minimal interaction between the product team and all the other stakeholders, including the marketers, the sales team and customer service. Dezy It, brings in a collaborative space for your team to leverage design thinking and work together and participate in the ideation process, sharing valuable insights which would shape the product and its features. It's a process which truly gets your whole team invested!`, image: CollaborationImg, reverse: true
        },
        {
            id: 2, title: 'Creativity', description: `Design Sprints are a great way to quickly innovate. A structured agile process to streamline your innovation and come up with multiple creative ideas using the Crazy-8 framework. It boosts your morale and provokes you to think out of the box. Now, with a ton of ideas, the Impact vs Feasibility analysis is a simple yet effective criteria, to shortlist the winning ides and most importantly validate them with real users.`, image: CreativityImg, reverse: false
        },
        {
            id: 2, title: 'Empathy', description: `The first rule of design thinking is to keep your users in the centre and under a spotlight.

            All great ideas arrive from devastating problems. The design sprint focuses on getting each and every team member to be able to empathise and understand the user, map their journeys and identify their pain points. You have to truly step into the shoes of your users to understand their psychology and experience of what they feel and think; while using your product or service.`, image: EmpathyImg, reverse: true
        },
    ]
    return (
        <>
            <div className="p-5 mb-5 md:mb-20">
                <div className="pt-7 mt-7">
                    <h2 className="text-[hsl(244,45%,30%)] text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Why Dezy It?</h2>
                </div>
                <div className="md:max-w-4xl mx-auto">
                    {
                        data.map(item => {
                            return (
                                <div key={item.id} className={`mt-12 md:flex items-center ${item.reverse ? 'flex-row-reverse md:translate-x-[80px]' : 'md:translate-x-[-20px]'}`}>
                                    <div className="flex-theme">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className="text-center md:text-left text-[hsl(244,45%,30%)] font-bold text-2xl md:text-3xl relative flex flex-col">
                                            {item.title}
                                            <span className="w-4/5 border-2 border-[rgb(120,124,209)] mt-4 block self-center md:self-start"></span>
                                        </h2>
                                        <p className="text-[#302B70] text-sm tracking-wider text-center md:text-left mt-5">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default About
