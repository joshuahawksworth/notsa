import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="NOTSA Logo" 
            className="h-14 md:h-15 w-auto"
          />
            <h1 className="font-['Prata'] text-2xl md:text-3xl lg:text-5xl tracking-wider lowercase font-bold">
                notsa
            </h1>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/DerbyBrewingCo/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/derbybrewingco/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FDerbyBrewingCo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};