import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as HomeImage from '../../components/HomePageImages/HomeImages';

// Default data for categories and images (can be passed as props or fetched from an API)
const defaultCategories = [
  { image: HomeImage.sl1},
  {  image: HomeImage.sl2 },
  {  image: HomeImage.sl3 },
  {  image: HomeImage.sl4 },
  {  image: HomeImage.sl5 },
  {  image: HomeImage.sl6 },
  {  image: HomeImage.sl7 },
  {  image: HomeImage.sl8 },
  {  image: HomeImage.sl9 },
  {  image: HomeImage.sl10 },
  {  image: HomeImage.sl11 },
  {  image: HomeImage.sl12 },
  {  image: HomeImage.sl13 },
];


const CategorySlider = ({ categories = defaultCategories }) => {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    centerMode: false,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
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
    <div className="relative px-4 py-2 lg:mb-10 mb-2 w-full max-w-[1460px] mx-auto">
      {/* Custom Buttons Outside the Slider */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1/2 left-[10px] transform -translate-y-1/2 z-10"
      >
        <button
          onClick={slidePrev}
          className="bg-gray-700 bg-opacity-50 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          <FaChevronLeft className="text-xl" />
        </button>
      </div>
      <div className="absolute top-1/2 right-[10px] transform -translate-y-1/2 z-10">
        <button
          onClick={slideNext}
          className="bg-gray-700 bg-opacity-50 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      {/* Slider Component */}
      <div className="lg:px-8 px-3">
        <Slider ref={sliderRef} {...settings}>
          {/* Dynamically render each slide */}
          {categories.map((category, index) => (
            <div key={index} className="px-2"> 
              <div className="relative rounded-full overflow-hidden bg-gray-200">
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
  );
};

export default CategorySlider;
