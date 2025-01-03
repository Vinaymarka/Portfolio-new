import React from 'react';
import AboutImg from "../../assets/programmer.jpg";
import {IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl md:mx-20 bg-opacity-30 round-lg p-12">
        <div>
            <h2 className="text-2xl md:text-4xl font-bold "> About </h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img src={AboutImg} alt="same programmer image from src" className="md:h-80" />
                <ul>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1" />
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">FrontEnd Developer</h1>
                            <p className="text-small md:text-md leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet eveniet tempora, mollitia provident ex, atque alias at quia iure veniam doloremque deleniti quidem eaque! Qui natus quam fugit sint.
                            </p>
                        </span> 
                    </div>

                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1" />
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                            <p className="text-small md:text-md leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet eveniet tempora, mollitia provident ex, atque alias at quia iure veniam doloremque deleniti quidem eaque! Qui natus quam fugit sint.
                            </p>
                        </span> 
                    </div>


                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1" />
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Computer Science Student at IIT Gandhinagar</h1>
                            <p className="text-small md:text-md leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet eveniet tempora, mollitia provident ex, atque alias at quia iure veniam doloremque deleniti quidem eaque! Qui natus quam fugit sint.
                            </p>
                        </span> 
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About