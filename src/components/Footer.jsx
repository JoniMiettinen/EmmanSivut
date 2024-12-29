import React from 'react';
import klarnaLogo from '../assets/Klarna.png';
import facebookLogo from '../assets/facebook.png';
import instagramLogo from '../assets/Instagram.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto text-center">
        {/* <p>&copy; 2024 Your Company. All rights reserved.</p> */}
        <div className="text-center">
          <h1 className="mb-6">YHTEYSTIEDOT</h1>
          <h2 className="mb-2">BEAUTYROOM BY EMMA</h2>
          <p className='text-red-950'>
            <a href="https://www.google.com/maps/search/?api=1&query=Asematie+7,+71800+Siilinjärvi" target="_blank" rel="noopener noreferrer"> Asematie 7, 71800 Siilinjärvi</a>
          </p>
          <p>puhelinnumero</p>
          <p>Sähköposti</p>
          <h2 className="mb-2 mt-6">AUKIOLOAJAT</h2>
          <p className='mb-2'>Avoinna sopimuksen mukaan</p>
          <p>Ostoksille tai konsultaatioon tullessasi varaa ajanvarauksesta<br></br>Ostos- tai konsultaatioaika</p>
          <h2 className="mb-2 mt-6">MAKSUTAVAT</h2>
          <p>Meillä toimii käteis- ja korttimaksun lisäksi Klarna ja lahjakortit</p>
          <div className="flex justify-center space-x-4 mt-8">
            <a href="https://www.klarna.com" target="_blank" rel="noopener noreferrer">
              <img src={klarnaLogo} alt="Klarna" className="h-8" /> </a>
            <a href="https://www.facebook.com/Beautyroombyemma" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="h-8" /> </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="h-8" /> </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
