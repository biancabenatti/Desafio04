import React, { useState } from 'react';
import '../Menu/styles.css'; 

const HamburgerMenu = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="order-button" onClick={toggleMenu}>
        Ordenar
      </button>
      {isOpen && (
        <div className="menu">
          <button onClick={() => { setFilter('stars-asc'); toggleMenu(); }}>Estrelas Crescentes</button>
          <button onClick={() => { setFilter('stars-desc'); toggleMenu(); }}>Estrelas Decrescentes</button>
          <button onClick={() => { setFilter('alphabetical'); toggleMenu(); }}>Ordem Alfabética</button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
