import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const dropdownRefs = {
    whoWeAre: useRef(null),
    service: useRef(null),
    product: useRef(null),
    join: useRef(null),
  };

  useEffect(() => {
    const adjustDropdownPosition = (ref) => {
      if (ref.current) {
        const dropdownItems = ref.current.querySelectorAll('li');
        let maxWidth = 0;
        dropdownItems.forEach((item) => {
          const itemWidth = item.offsetWidth;
          if (itemWidth > maxWidth) {
            maxWidth = itemWidth;
          }
        });
        ref.current.style.minWidth = `${maxWidth + 20}px`; // Adding some padding

        ref.current.addEventListener('mouseenter', () => {
          const rect = ref.current.getBoundingClientRect();
          if (rect.right > window.innerWidth) {
            ref.current.style.right = '0';
            ref.current.style.left = 'auto';
          } else {
            ref.current.style.left = '0';
            ref.current.style.right = 'auto';
          }
        });
      }
    };

    Object.values(dropdownRefs).forEach(adjustDropdownPosition);
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Company Logo" />
      </div>
      <div className="navbar">
        <div className="nav-item">
          Who We Are
          <ul className="dropdown-content" ref={dropdownRefs.whoWeAre}>
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#vision">Our Vision</a></li>
            <li><a href="#team">Our Team</a></li>
          </ul>
        </div>
        <div className="nav-item">
          Service
          <ul className="dropdown-content" ref={dropdownRefs.service}>
            <li><a href="#consulting">Consulting</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#customization">Customization</a></li>
          </ul>
        </div>
        <div className="nav-item">
          Product
          <ul className="dropdown-content" ref={dropdownRefs.product}>
            <li><a href="#product1">Product 1</a></li>
            <li><a href="#product2">Product 2</a></li>
            <li><a href="#product3">Product 3</a></li>
          </ul>
        </div>
        <div className="nav-item">
          Join
          <ul className="dropdown-content join-dropdown" ref={dropdownRefs.join}>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#internships">Internships</a></li>
            <li><a href="#volunteer">Volunteer</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
