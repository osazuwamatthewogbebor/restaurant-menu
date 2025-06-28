import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBowlFood } from "react-icons/pi";
import { BsCupStraw } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { PiChats } from "react-icons/pi";
import IconBg from "../assets/icon-bg.png";
import MainBg from "../assets/bg-image.png";



const HomeMenu = () => {

    const [openContact, setOpenContact] = useState(false);

    const toggleContactPage = () => {
        setOpenContact(!openContact);
    };


        const menuItems = [
    {
        icon: <BsCupStraw />,
        text: "Drinks",
        link: "/drink-menu",
        action: ""
    },
    {
        icon: <PiBowlFood />,
        text: "Food",
        link: "/food-menu",
        action: ""
    },
    {
        icon: <FaInstagram />,
        text: "Instagram",
        link: "/",
        action: ""
    },
    {
        icon: <PiChats />,
        text: "Contact",
        link: "",
        action: toggleContactPage
    }
]



    return (
        <div className='bg-teal-900 flex z-[-2] items-center justify-center text-white font-poppins'>
            <div className='w-full flex flex-col items-center justify-center md:w-[80%] lg:w-[40%]' >
                <div className={`w-full h-screen md:h-full grid grid-cols-2 py-7 bg-teal-950`} style={{backgroundImage: `url(${MainBg})`, }}>
                    {
                        menuItems.map((item, index) => (
                        <Link to={item.link}>
                            <div key={index} className='flex flex-col justify-center items-center 
                            gap-5 sm:gap-10 md:gap-5 lg:gap-8 px-10' onClick={item.action}>
                                <li className='list-none cursor-pointer flex flex-col justify-center items-center text-8xl font-bold text-teal-600'>
                                <span className='z-4'>{item.icon}</span> <img src={IconBg} className='mt-[-110px] sm:mt-[-150px] md:mt-[-130px] lg:mt-[-110px] w-45 sm:w-55 md:w-45 lg:w-35'/></li>
                                <p className='text-lg md:text-2xl lg:text-xl cursor-pointer font-semibold mb-15 sm:mb-20 md:mb-35 lg:mb-15'>{item.text}</p>
                            </div>
                            
                        </Link>

                        ))
                    }
                </div>
            </div>

            {/* {Contact form} */}
             <div className={` bg-teal-950 flex flex-col mb-0 justify-center items-center z-50 
                    bottom-0 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[30%] fixed rounded-2xl shadow-black shadow-5xl 
                    ${openContact? "translate-y-0 opacity-100": "translate-y-full opacity-0"} transition-all duration-1000 ease-in-out`}
                >
                    <div className='w-full text-lg flex justify-between items-center px-8 py-10'>
                        <h3>Rate your Experience</h3>
                        <span className='flex justify-end text-3xl text-right z-2 
                        cursor-pointer' onClick={toggleContactPage}><FaTimes /></span>
                    </div>

                    <div className='w-full text-white font-bold flex flex-col px-10'>
                        <h3 className='text-center text-lg  mb-2'>How was service today?</h3>
                        <form className='flex flex-col text-sm w-full text-teal-400 '>
                            <textarea className='border-1 rounded-2xl py-7 px-5 mb-10 bg-slate-900'/>
                            <input className='border-1 rounded-2xl py-3 px-5 mb-3 bg-slate-900' type="text" name='name' placeholder='Name'/>
                            <input className='border-1 rounded-2xl py-3 px-5 mb-3 bg-slate-900' type="text" name='email' placeholder='Email'/>
                            <input className='border-1 rounded-2xl py-3 px-5 mb-3 bg-slate-900' type="text" name='phone' placeholder='Phone number'/>
                            <input className='border-1 rounded-2xl py-3 px-5 mb-3 bg-teal-900 ' type="button" value="Submit" name='submit' />
                        </form>
                                
                    </div>
                </div>
        </div>
    );
}

export default HomeMenu;
