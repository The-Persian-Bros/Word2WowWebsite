// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css'; // Assuming Navbar styles are in main.css

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="logo">Word<span>2</span>Wow</Link>
                <div className={`hamburger ${isActive ? 'toggle' : ''}`} onClick={toggleMenu}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
                <ul className={`nav-links ${isActive ? 'active' : ''}`} id="nav-links">
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#features">Features</Link></li>
                    <li><Link to="#demo">Demo</Link></li>
                    <li><Link to="#testimonials">Testimonials</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
