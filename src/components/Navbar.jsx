import React from 'react';
import { useState } from 'react';
import { RiMenu5Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import Location from "../assets/locaion.png";
import Instagram from "../assets/instagram.png";
import Phone from "../assets/whatsapp.png";

const contactItems = [
    {
        icon: Instagram,
        text: "Instagram"
    },
    {
        icon: Location,
        text: "Address"
    },
    {
        icon: Phone,
        text: "Phone Number"
    }
]

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false);

    const toggleMenuIcon = () => {
        setMenuIcon(!menuIcon);
    };


    return (
        <div className='bg-teal-900 flex justify-center items-center font-poppins'>
            <div className='w-full md:w-[80%] lg:w-[40%] top-0' >
                <nav className=' flex items-center py-8 sm:py-10 px-10 sm:px-15 gap-10 sm:gap-15 font-bold z-9 text-teal-600 bg-teal-950' >
                    <span className='text-2xl sm:text-3xl cursor-pointer' onClick={toggleMenuIcon}><RiMenu5Fill /></span>
                    <h1 className='text-xl sm:text-[1.8rem] lg:text-3xl sm:mx-11 md:mx-10 lg:mx-0'>RESTAURANT MENU</h1>
                </nav>
            <div className={` bg-slate-800 flex flex-col justify-between z-50 absolute top-0 left-0 h-screen w-[90%] sm:w-[38%] ${menuIcon? "translate-x-0": "-translate-x-full"} transition-transform duration-1000 ease-in-out`}>
                    <span className='flex justify-end m-10 text-3xl text-right z-2 cursor-pointer' onClick={toggleMenuIcon}><FaTimes /></span>
                <div className='text-white font-bold text-lg flex flex-col px-5 gap-5 py-5'>
                    <h3>Get in Touch</h3>
                        {
                            contactItems.map((channel, index) => (
                                <div key={index} className='flex items-center gap-3'>
                                    <img src={channel.icon} className='w-6'/>
                                    <span>{channel.text}</span>
                                </div>
                                )
                            )
                        }
                            
                </div>
            </div>
            <div 
                className={`bg-black fixed top-0 left-0 z-40 h-screen w-screen ${menuIcon? "opacity-70": "opacity-0 hidden"} transition-opacity duration-[3000ms] ease-in-out`}> 
            </div>
                
    
            </div>
        </div>
    );
}

export default Navbar;
