import React, { useState, useRef } from 'react';
import OrderNavBar from '../components/OrderNavBar';
import OrderMenu from '../components/OrderMenu';
import menuItems from "../data/FoodData";
 
const Food = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const sectionRefs = useRef({});

    const scrollToMenu = (ref) => {
      sectionRefs.current[ref]?.scrollIntoView({ behavior: "smooth"})
    };


    return (
        <>
            <OrderNavBar menuItems={menuItems} onNavigate={scrollToMenu} setSearchTerm={setSearchTerm} />
            <OrderMenu menuItems={menuItems} sectionRefs={sectionRefs} searchTerm={searchTerm} />
        </>
    );
}

export default Food;
