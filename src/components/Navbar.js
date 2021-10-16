import React, { useState } from 'react'
import LogoGif from '../assets/images/logo.gif'
import { Link } from 'react-router-dom'

function Navbar() {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        document.querySelector('body').classList.toggle('overflow-hidden')
        setActive(!active)
    }
    return (
        <>
            <nav className="w-full fixed top-0 left-0 right-0 z-[999999] bg-[rgb(48,43,112)] shadow-lg">
                <div className="px-5 container mx-auto md:py-3">
                    <div className="flex justify-between items-center max-w-4xl mx-auto">
                        <span className="h-full mt-1 mb-[7px]">
                            <img src={LogoGif} alt="" className='h-11' />
                        </span>
                        <button className="md:hidden right-5 flex flex-col h-[27px] justify-between z-[9999]" onClick={handleClick}>
                            <div className={`w-[17px] h-[3.5px] rounded-full relative transition-all origin-right duration-[400ms] z-10 ${active ? 'rotate-[-135deg] -left-3 top-[1.5px] bg-[rgb(48,43,112)]' : 'left-0 bg-white'}`}></div>
                            <div className={`w-8 h-[3.5px] rounded-full transition-all duration-[400ms] ${active ? '-rotate-45 bg-[rgb(48,43,112)]' : ' bg-white'}`}></div>
                            <div className={`w-[17px] h-[3.5px] rounded-full relative self-end transition-all origin-left duration-[400ms] ${active ? 'rotate-[-135deg] left-3 bg-[rgb(48,43,112)]' : 'left-0 bg-white'}`}></div>
                        </button>
                        <div className="hidden md:flex w-full max-w-lg justify-between">
                            <li className="list-none lg:text-base text-yellow-500 font-bold cursor-pointer">Home</li>
                            <li className="list-none lg:text-base text-white font-bold cursor-pointer">Our Products</li>
                            <li className="list-none lg:text-base text-white font-bold cursor-pointer">Why Us?</li>
                            <li className="list-none lg:text-base text-white font-bold cursor-pointer">Blogs</li>
                            <li className="list-none lg:text-base text-white font-bold cursor-pointer">Contact</li>
                        </div>
                    </div>
                </div>
                <SideBar active={active} />
            </nav>
        </>
    )
}

function SideBar({ active }) {
    const menuItems = [
        { id: 1, name: 'Home', active: true, href: '/' },
        { id: 2, name: 'Our Products', href: '/' },
        { id: 3, name: 'Why Us?', href: '/' },
        { id: 4, name: 'Blogs', href: '/' },
        { id: 5, name: 'Contact', href: '/' },
    ]
    return (
        <div className={`w-full md:hidden fixed h-screen z-[9998] inset-0 transition-all duration-500 ${active ? 'opacity-100 left-0 visible' : 'opacity-40 left-full invisible'}`}>
            <div className="h-full w-full bg-white bg-opacity-95 flex justify-center">
                <div className="flex flex-col text-center mt-[90px]">
                    {
                        menuItems.map((item) => {
                            return (
                                <Link to={item.href} key={item.id} className='py-5'>
                                    <li className={`list-none font-semibold text-2xl leading-[50px] ${item.active ? 'text-[rgb(48,43,112)]' : 'text-[rgb(120,124,209)]'}`}>{item.name}</li>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar


// rgb(48, 43, 112)