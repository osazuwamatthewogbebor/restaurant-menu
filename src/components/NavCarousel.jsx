import React , { useState, useEffect } from 'react';
import Slider from 'react-slick';


const NavCarousel = ({ menuItems, onNavigate }) => {

  const menuNames = menuItems.map((item) => {
    return (item.menu);
  });

  const [activeLabel, setActiveLabel] = useState("");

  useEffect(() => {
    if (menuNames.length > 0) {
      const firstLabel = menuNames[0];
      setActiveLabel(firstLabel);

    }
  }, [menuItems, onNavigate])


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <Slider {...settings}>
        {menuItems.map((item, index) => (
          <div key={index} className="flex justify-center px-2">
            <button className={`w-[100%] flex justify-center bg-none border-1 text-[10px]
           text-teal-600 px-5 py-2 rounded-xl transition ${activeLabel === item.menu? 'bg-teal-600 text-white': ''}`}
              onClick={() => {
                setActiveLabel(item.menu)
                onNavigate(item.menu)
              }
            }
            >
              {item.menu}
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NavCarousel;
