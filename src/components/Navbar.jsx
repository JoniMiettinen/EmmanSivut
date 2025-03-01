import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 h-50 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <img src={logo} alt="Logo" className="h-60 w-60" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black">ETUSIVU</Link>
          <Link to="/about" className="text-black">HINNASTO</Link>
          <Link to="/bdr" className="text-black">BDR</Link>
          <Link to="/contact" className="text-black">YHTEYSTIEDOT</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <Link to="/" className="block text-black text-2xl py-5 px-4 border-b border-gray-200" onClick={toggleMenu}>ETUSIVU</Link>
          <Link to="/about" className="block text-black text-2xl py-5 px-4 border-b border-gray-200" onClick={toggleMenu}>HINNASTO</Link>
          <Link to="/bdr" className="block text-black text-2xl py-5 px-4 border-b border-gray-200" onClick={toggleMenu}>BDR</Link>
          <Link to="/contact" className="block text-black text-2xl py-5 px-4 border-b border-gray-200" onClick={toggleMenu}>YHTEYSTIEDOT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

