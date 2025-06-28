import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import NavCarousel from './NavCarousel';


const OrderNavBar = ({ menuItems, onNavigate, setSearchTerm}) => {
    const [showSearch, setShowSearch] = useState(false)

    return (
            <div className='bg-teal-900 flex items-center justify-center font-poppins top-0'>
                <nav className='w-full sm:w-[95%] md:w-[80%] lg:w-[40%] flex flex-col items-center justify-center pt-8 sm:pt-10 z-9 text-teal-600 bg-teal-950'>
                    <div className='flex items-center justify-between gap-20 sm:gap-10 z-9 text-teal-600 bg-teal-950'>
                        <Link to="/">
                            <span className='text-2xl cursor-pointer' ><FaArrowLeftLong /></span>
                        </Link>
                        <h1 className='font-bold text-xl sm:text-[1.6rem] lg:text-[1.7rem] sm:mx-11 md:mx-25 lg:mx-0'>RESTAURANT MENU</h1>
                        <span className='text-2xl cursor-pointer' 
                            onClick={() => setShowSearch(!showSearch)}
                        >
                            <IoMdSearch />
                        </span>
                    </div>

                    {showSearch && (
                        <input 
                        type="text"  
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        placeholder='Search...'
                        className='w-[90%] mt-15 border-teal-600 border-1 rounded-lg py-2 px-3 bg-slate-800'
                        />
                    )}
                    
                    <div className="w-full mt-7">
                        <hr className='border-2 mb-[-20px] w-full text-black font-extrabold'/>
                        <NavCarousel menuItems={menuItems} onNavigate={onNavigate}/>
                        <hr className='border-2 mt-[-20px] mb-5 w-full text-black font-extrabold'/>
                    </div>
                </nav>
                
            </div>
    );
}

export default OrderNavBar;
