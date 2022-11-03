import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Front End Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Recently just graduated from General Assembly's 420 hour Software Engineering Immersive. I love to work with technologies that use React, Tailwind, Javascript.
                </p>

                <div>
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={23} className="ml-1"/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 '/>
            </div>
        </div>
    </div>
  )
}

export default Home