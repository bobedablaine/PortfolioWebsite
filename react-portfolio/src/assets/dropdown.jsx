import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { useEffect } from "react";

const DropDownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ top: 10, left: 10 });
  const [shiftAmount, setShiftAmount] = useState(0);

  // Calculate the vw value dynamically on load and resize
  useEffect(() => {
    const calculateShift = () => {
      const vw = window.innerWidth / 100; // 1vw in pixels
      setShiftAmount(15.5 * vw); // Replace 20 with the desired vw value
    };

    calculateShift(); // Calculate on initial render
    window.addEventListener('resize', calculateShift); // Recalculate on window resize

    return () => {
      window.removeEventListener('resize', calculateShift); // Cleanup on unmount
    };
  }, []);

  const toggleMenu = () => {
      
    setIsMenuOpen((prev) => !prev);
  };

  const buttonStyle = {
    position: 'fixed',
    top: position.top,
    left: isMenuOpen ? position.left + shiftAmount : position.left,
    transition: 'left 0.3s ease'
  };

  return (
    <div>
      <button style={buttonStyle} className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? <FaAngleLeft/> : <FaAngleRight/>}
      </button>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul className="menu-list">
            <li className="menu-item1" style={{marginBottom: '40px'}}><a href="#home">Home</a></li>
            <li className="menu-item2" style={{marginBottom: '40px'}}><a href="#about">About</a></li>
            <li className="menu-item3" style={{marginBottom: '40px'}}><a href="#portfolio">Portfolio</a></li>
            <li className="menu-item4" style={{marginBottom: '40px'}}><a href="#skills">Skills</a></li>
            <li className="menu-item5" style={{marginBottom: '40px'}}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;