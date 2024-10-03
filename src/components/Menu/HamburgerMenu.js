import React, { useState } from 'react';

const HamburgerMenu = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end mb-4 relative">
      <button 
        className="px-8 py-5 bg-gray-800 text-white rounded-md cursor-pointer font-roboto-condensed text-base hover:bg-blue-700" 
        onClick={toggleMenu}
      >
        Ordenar
      </button>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 shadow-md z-50 p-2 mt-2">
          <button 
            className="block w-full text-left px-3 py-2 hover:bg-gray-100" 
            onClick={() => { setFilter('stars-asc'); toggleMenu(); }}
          >
            Estrelas Crescentes
          </button>
          <button 
            className="block w-full text-left px-3 py-2 hover:bg-gray-100" 
            onClick={() => { setFilter('stars-desc'); toggleMenu(); }}
          >
            Estrelas Decrescentes
          </button>
          <button 
            className="block w-full text-left px-3 py-2 hover:bg-gray-100" 
            onClick={() => { setFilter('alphabetical'); toggleMenu(); }}
          >
            Ordem Alfabética
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
