import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as HomeImage from '../../components/HomePageImages/HomeImages';

const defaultCategories = [
    { image: HomeImage.bigSl1},
    {  image: HomeImage.bigSl2 },
    {  image: HomeImage.bigSl3 },
    {  image: HomeImage.bigSl4 },
  ];
const BigSlider = ({ categories = defaultCategories }) => {
    const sliderRef = useRef(null);
      // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Functions to control the slider via ref
  const slideNext = (e) => {
    e.stopPropagation();
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const slidePrev = (e) => {
    e.stopPropagation();
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="relative px-4  mb-10 w-full max-w-[1460px] mx-auto">
      {/* Custom Buttons Outside the Slider */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1/2 left-[14px] transform -translate-y-1/2 z-10"
      >
        <button
          onClick={slidePrev}
          className="bg-white border border-secondary-1/20 bg-opacity-50 text-secondary-1 rounded-full w-14 h-14 shadow z-30 flex items-center justify-center"
        >
          <FaChevronLeft className="text-xl" />
        </button>
      </div>
      <div className="absolute top-1/2 right-[15px] transform -translate-y-1/2 z-10">
        <button
          onClick={slideNext}
          className="bg-white border border-secondary-1/20 bg-opacity-50 text-secondary-1 rounded-full w-14 h-14 shadow z-30 flex items-center justify-center"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      {/* Slider Component */}
      <div className="px-8">
        <Slider ref={sliderRef} {...settings}>
          {/* Dynamically render each slide */}
          {categories.map((category, index) => (
            <div key={index} className="px-2"> 
              <div className="relative rounded-sm overflow-hidden bg-gray-200">
                <img
                  src={category.image}
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BigSlider