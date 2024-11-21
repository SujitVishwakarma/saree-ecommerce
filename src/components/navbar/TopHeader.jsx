import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import WomenNavSlider from "./WomenNavSlider";

const TopHeader = () => {
  // Initialize with 'women' dropdown open
  const [activeDropdown, setActiveDropdown] = useState('women');
  const dropdownRefs = {
    women: useRef('women'),
    men: useRef(null),
    kids: useRef(null),
    home: useRef(null),
    tech: useRef(null),
    brands: useRef(null),
    more: useRef(null)
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const refs = Object.values(dropdownRefs);
      const isOutsideAll = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );

      if (isOutsideAll) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown for a specific category
  const toggleDropdown = (category) => {
    // If the clicked category is already open, close it
    // If it's closed, open it and close others
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  // Dropdown component for Women
  const WomenDropdown = () => (
    <div onClick={(e) => e.stopPropagation()}  className="absolute left-[-345px] mt-4 w-[97vw] bg-white  rounded-md border-b border-t border-gray-200">
      <div  className="block px-4 py-3 text-sm hover:bg-gray-100"><WomenNavSlider/></div>
    </div>
  );

  // Dropdown component for Men
  const MenDropdown = () => (
    <div className="absolute left-[-420px] mt-4 w-[97vw] bg-white shadow-lg rounded-md border border-gray-200">
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Casual Wear</div>
      <div  className="block px-4 py-2 text-sm hover:bg-gray-100">Formal Wear</div>
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Sportswear</div>
    </div>
  );

  // Dropdown component for Kids
  const KidsDropdown = () => (
    <div className="absolute left-[-475px] mt-4 w-[97vw] bg-white shadow-lg rounded-md border border-gray-200">
      <div  className="block px-4 py-2 text-sm hover:bg-gray-100">Boys</div>
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Girls</div>
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Accessories</div>
    </div>
  );

  // Dropdown component for Home
  const HomeDropdown = () => (
    <div className="absolute left-[-532px] mt-4 w-[97vw] bg-white shadow-lg rounded-md border border-gray-200">
      <div  className="block px-4 py-2 text-sm hover:bg-gray-100">Decor</div>
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Furnishings</div>
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Kitchen</div>
    </div>
  );

  // Dropdown component for Tech
  const TechDropdown = () => (
    <div className="absolute left-[-599px] mt-4 w-[97vw] bg-white shadow-lg rounded-md border border-gray-200">
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Gadgets</div>
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Accessories</div>
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Wearables</div>
    </div>
  );

  // Dropdown component for Brands
  const BrandsDropdown = () => (
    <div className="absolute left-[-658px] mt-4 w-[97vw] bg-white shadow-lg rounded-md border border-gray-200">
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Designer</div>
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Trending</div>
      <div className="block px-4 py-2 text-sm hover:bg-gray-100">Luxury</div>
    </div>
  );

  // Dropdown component for More
  const MoreDropdown = () => (
    <div className="absolute left-0 mt-2 w-40 bg-transparent ">

    </div>
  );

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-primary-hoverClr font-bold text-lg">NYKAA</span>
        <span className="text-black font-bold text-lg">FASHION</span>
      </div>

      {/* Navigation divs */}
      <div className="hidden lg:flex gap-6 font-semibold text-base text-secondary-1">
        <div 
          ref={dropdownRefs.women} 
          className="relative"
          onClick={() => toggleDropdown('women')}
        >
          <button 
            className={`hover:text-primary-hoverClr ${activeDropdown === 'women' ? 'text-primary-hoverClr' : ''}`}
          >
            Women
          </button>
          {activeDropdown === 'women' && <WomenDropdown />}
        </div>

        <div 
          ref={dropdownRefs.men} 
          className="relative"
          onClick={() => toggleDropdown('men')}
        >
          <button 
            className={`hover:text-primary-hoverClr ${activeDropdown === 'men' ? 'text-primary-hoverClr' : ''}`}
          >
            Men
          </button>
          {activeDropdown === 'men' && <MenDropdown />}
        </div>

        <div 
          ref={dropdownRefs.kids} 
          className="relative"
          onClick={() => toggleDropdown('kids')}
        >
          <button 
            className={`hover:text-primary-hoverClr ${activeDropdown === 'kids' ? 'text-primary-hoverClr' : ''}`}
          >
            Kids
          </button>
          {activeDropdown === 'kids' && <KidsDropdown />}
        </div>

        <div 
          ref={dropdownRefs.home} 
          className="relative"
          onClick={() => toggleDropdown('home')}
        >
          <button 
            className={`hover:text-primary-hoverClr ${activeDropdown === 'home' ? 'text-primary-hoverClr' : ''}`}
          >
            Home
          </button>
          {activeDropdown === 'home' && <HomeDropdown />}
        </div>

        <div 
          ref={dropdownRefs.tech} 
          className="relative"
          onClick={() => toggleDropdown('tech')}
        >
          <button 
            className={`hover:text-primary-hoverClr ${activeDropdown === 'tech' ? 'text-primary-hoverClr' : ''}`}
          >
            Tech
          </button>
          {activeDropdown === 'tech' && <TechDropdown />}
        </div>

        <div 
          ref={dropdownRefs.brands} 
          className="relative"
          onClick={() => toggleDropdown('brands')}
        >
          <button 
            className={`hover:text-primary-hoverClr ${activeDropdown === 'brands' ? 'text-primary-hoverClr' : ''}`}
          >
            All Brands
          </button>
          {activeDropdown === 'brands' && <BrandsDropdown />}
        </div>

        <div 
          ref={dropdownRefs.more} 
          className="relative"
          onClick={() => toggleDropdown('more')}
        >
          <button 
            className={`hover:text-primary-hoverClr ${activeDropdown === 'more' ? 'text-primary-hoverClr' : ''}`}
          >
            More
          </button>
          {activeDropdown === 'more' && <MoreDropdown />}
        </div>
      </div>

      {/* Search and Icons (remains the same as original) */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-sm">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for products, styles..."
            className="bg-transparent outline-none text-sm text-gray-700"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-6 text-secondary-1 font-inter font-semibold text-lg">
          <div to="/account" className="flex items-center gap-1 hover:text-primary-hoverClr">
            <FaRegUser />
            <span className="hidden sm:block text-sm">Account</span>
          </div>
          <div to="/wishlist" className="flex items-center gap-1 hover:text-primary-hoverClr">
            <FaRegHeart />
            <span className="hidden sm:block text-sm">Wishlist</span>
          </div>
          <div to="/cart" className="relative flex items-center hover:text-primary-hoverClr text-xl">
            <IoBagOutline />
            <span className="absolute -top-[5px] left-[8px] h-auto bg-red-500 text-white text-xs rounded-full px-[2px]">0</span>
            <span className="hidden sm:block text-sm ml-1">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;