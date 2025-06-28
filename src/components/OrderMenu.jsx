import React from 'react';
import MainBg from "../assets/bg-image.png";

const OrderMenu = ({ searchTerm, menuItems, sectionRefs}) => {

    const filteredItems = searchTerm? (
        menuItems.filter(item =>
            item.items.some(orderItem =>
                orderItem.order.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
    ) : (menuItems)


    return (
        <div className='bg-teal-900 w-full flex items-center justify-center'>
        <div className='w-full flex flex-col items-center justify-center sm:w-[95%] md:w-[80%] lg:w-[40%]' >
           {
            filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
                <div 
                    key={index} 
                    ref={(el) => (sectionRefs.current[item.menu] = el)}
                    className='w-full pb-10 bg-teal-950 flex gap-5 flex-col items-center justify-center'
                    style={{backgroundImage: `url(${MainBg})`, }}
                >
                    
                    <span className='text-teal-500 w-[90%] text-xl p-3 mb-5 rounded-lg font-bold bg-teal-600/40 text-center'>{item.menu} Menu</span>
                    {
                        item.items.map((orderItem, index) => (
                            <div key={index} className='text-white w-[90%]  order-item flex flex-col'>
                                <div className='pb-5'>
                                    <div className='pb-8 flex justify-between items-center'>
                                        <span>{orderItem.order}</span>
                                        <span>{orderItem.price}</span>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        )
                    )
                    }
                </div>
                )
            )
        ):(<div className='text-xl mx-10 w-full flex'>No Matching Item.</div>)
    } 
        </div>
        </div>
    );
}

export default OrderMenu;
