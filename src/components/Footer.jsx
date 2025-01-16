import React from 'react';
import facebookLogo from '../assets/facebook.png';
import instagramLogo from '../assets/Instagram.png';
import sky from '../assets/sky.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto text-center">
        <div className="text-center">
          <h2 className="mb-2">BEAUTYROOM BY EMMA</h2>
          <div className='flex justify-center'>
            <img src={sky} alt="sky" className="h-20 w-20" />
          </div>
          <p className='text-red-950 mt-4'>
            <a href="https://www.google.com/maps/search/?api=1&query=Asematie+7,+71800+Siilinjärvi" target="_blank" rel="noopener noreferrer"> Asematie 7, 71800 Siilinjärvi</a>
          </p>
          <a href="tel:044 9710069">
            <p> 044 9710069 </p>
          </a>
          <p>Beautyroombyemma@gmail.com</p>
          <div className="flex justify-center space-x-4 mt-8">
            <a href="https://www.facebook.com/Beautyroombyemma" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="h-8" /> </a>
            <a href="https://www.instagram.com/beautyroombyemma/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="h-8" /> </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
