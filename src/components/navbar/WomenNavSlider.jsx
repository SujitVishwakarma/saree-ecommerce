import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your component
import WhatsNewWomen from "../navbar/WomenWhtsNew";

const WomenNavSlider = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const timeoutRef = useRef(null);

  const navigationItems = [
    { 
      title: "What's New", 
      content: <WhatsNewWomen />, 
      isComponent: true 
    },
    { 
      title: "Sale", 
      items: ["Discount 1", "Discount 2", "Discount 3"],
      isComponent: false 
    },
    { 
      title: "Infant", 
      items: ["Infant Product 1", "Infant Product 2", "Infant Product 3"],
      isComponent: false 
    },
    { 
      title: "Indian Wear", 
      items: ["Indian Wear 1", "Indian Wear 2", "Indian Wear 3"],
      isComponent: false 
    },
    { 
      title: "Western Wear", 
      items: ["Western Wear 1", "Western Wear 2", "Western Wear 3"],
      isComponent: false 
    },
    { 
      title: "Foot Wear", 
      items: ["Foot Wear 1", "Foot Wear 2", "Foot Wear 3"],
      isComponent: false 
    },
    { 
      title: "Sports & Authentic", 
      items: ["Sports 1", "Sports 2", "Sports 3"],
      isComponent: false 
    },
  ];

  const itemsPerPage = 6;
  const maxStartIndex = Math.max(0, navigationItems.length - itemsPerPage);

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + itemsPerPage, maxStartIndex));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverIndex(null);
    }, 300);
  };

  const toggleDropdown = (index, e) => {
    e.stopPropagation();
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleItems = navigationItems.slice(startIndex, startIndex + itemsPerPage);

  const renderDropdownContent = (item) => {
    if (item.isComponent) {
      return (
        <div className="py-2 w-full">
          {item.content}
        </div>
      );
    }
    
    return (
      <div className="py-2">
        {item.items.map((subItem, subIndex) => (
          <a
            key={subIndex}
            href="#"
            className="block px-4 py-2 text-sm text-gray-700  hover:text-gray-900"
          >
            {subItem}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="relative px-8 w-full">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className={`absolute top-1/2 left-0 -translate-y-1/2 z-20 bg-gray-700 bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all
          ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-75'}`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        disabled={startIndex >= maxStartIndex}
        className={`absolute top-1/2 right-0 -translate-y-1/2 z-20 bg-gray-700 bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all
          ${startIndex >= maxStartIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-75'}`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="mx-4">
        <div className="grid grid-cols-6 gap-4">
          {visibleItems.map((item, index) => (
            <div key={index} className="px-2">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="cursor-pointer py-1 px-4  text-center hover:text-pink-500 transition-colors"
                  onClick={(e) => toggleDropdown(index, e)}
                >
                  <h3 className="text-sm font-bold font-inter truncate">{item.title}</h3>
                </div>
                
                {(activeIndex === index || hoverIndex === index) && (
                  <div className="absolute left-0 z-50 w-[800px] mt-2 bg-white shadow-lg rounded-lg overflow-hidden border">
                    {renderDropdownContent(item)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenNavSlider;