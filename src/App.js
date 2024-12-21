// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/app.css';
import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppPage from './components/AppPage';

function App() {
    return (
        <Router>
            <div className="background">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Features />
                            <Demo />
                            <WhyChooseUs />
                            <Contact />
                        </>
                    } />
                    <Route path="/app" element={<AppPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
