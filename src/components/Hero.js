// src/components/Hero.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="glass-container">
                <h1 className="hero-title">Transform Your Story into <span className="highlight">Stunning Comics</span></h1>
                <p className="hero-subtitle">Using AI-powered tools, bring your words to life in comic form effortlessly.</p>
                <Link to="/app" className="btn">Try It Now</Link>
            </div>
        </section>
    );
};

export default Hero;
