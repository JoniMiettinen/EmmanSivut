import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 h-50 relative flex flex-col justify-end"> {/* Added flex-col and justify-end */}
      <div className="container mx-auto flex justify-between items-end"> {/* Changed items-center to items-end */}
        {/* <div className="text-black text-lg font-bold">Emman Sivut</div> */}
        <div className="text-white text-lg font-bold">
          <img src={logo} alt="Logo" className="h-60 w-60" /> {/* Increased height and width */}
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black">Etusivu</Link>
          <Link to="/about" className="text-black">Hinnasto</Link>
          <Link to="/contact" className="text-black">Yhteystiedot</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200"> {/* Added absolute positioning */}
          <Link to="/" className="block text-black py-2 px-4 border-b border-gray-200">Etusivu</Link>
          <Link to="/about" className="block text-black py-2 px-4 border-b border-gray-200">Hinnasto</Link>
          <Link to="/contact" className="block text-black py-2 px-4">Yhteystiedot</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


