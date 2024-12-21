// src/components/AppPage.js

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.css';
import '../styles/main.css';

const AppPage = () => {
    // State Variables
    const [story, setStory] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [comic, setComic] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isMovingSection, setIsMovingSection] = useState(false);
    const [isShowPreview, setIsShowPreview] = useState(false);

    // Refs for Sections
    const inputSectionRef = useRef(null);
    const previewSectionRef = useRef(null);

    // Handle Input Change
    const handleInputChange = (e) => {
        const input = e.target.value;
        if (input.length <= 500) {
            setStory(input);
            setCharCount(input.length);
        }
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (story.trim() === '') {
            alert('Please enter a valid story.');
            return;
        }

        // Trigger Input Section Animation
        setIsMovingSection(true);

        // Simulate Scroll and Show Preview Section after slight delay
        setTimeout(() => {
            setIsShowPreview(true);
            if (previewSectionRef.current) {
                previewSectionRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 300); // 300ms delay for smooth animation

        // Simulate Loading Effect
        setLoading(true);
        setComic(null);

        // Simulate API call delay (7 seconds)
        setTimeout(() => {
            // Placeholder for generated comic
            setComic({
                text: story,
                images: [
                    // Replace with actual generated images URLs
                    'https://via.placeholder.com/250x200.png?text=Comic+Panel+1',
                    'https://via.placeholder.com/250x200.png?text=Comic+Panel+2',
                    'https://via.placeholder.com/250x200.png?text=Comic+Panel+3',
                ],
            });
            setLoading(false);
        }, 7000);
    };

    return (
        <div className="background">
            {/* Input Section */}
            <section
                id="input-section"
                className={`input-section ${isMovingSection ? 'moving-section' : ''}`}
                ref={inputSectionRef}
            >
                <h2 className="section-title animate-title">Create Your Story</h2>
                <form onSubmit={handleSubmit} className="glass-container enhanced-form">
                    <div className="input-group">
                        <textarea
                            id="storyInput"
                            rows="6"
                            maxLength="500"
                            required
                            value={story}
                            onChange={handleInputChange}
                            placeholder="Enter Your Story"
                        ></textarea>
                        <div className="char-counter" id="charCounter">{charCount} / 500</div>
                    </div>
                    <button type="submit" className="btn glow-btn">Generate Comic</button>
                </form>
            </section>

            {/* Comic Layout Section */}
            <section
                id="preview-section"
                className={`preview-section ${isShowPreview ? 'show-preview' : ''}`}
                ref={previewSectionRef}
            >
                <h2 className="section-title">Your Comic Preview</h2>
                <div id="comicLayout" className="comic-layout">
                    {loading && (
                        <div className="loading-clouds">
                            <div className="cloud cloud1"></div>
                            <div className="cloud cloud2"></div>
                            <div className="cloud cloud3"></div>
                            <div className="cloud cloud4"></div>
                            <div className="cloud cloud5"></div>
                            <div className="cloud cloud6"></div>
                        </div>
                    )}
                    {!loading && comic && (
                        <div className="glass-container">
                            <h3>Comic Generated:</h3>
                            <p>Your story: "{comic.text}"</p>
                            <div className="comic-images">
                                {comic.images.map((img, index) => (
                                    <img key={index} src={img} alt={`Comic Panel ${index + 1}`} className="comic-img" />
                                ))}
                            </div>
                        </div>
                    )}
                    {!loading && !comic && (
                        <p className="placeholder-text">Your generated comic will appear here...</p>
                    )}
                </div>
            </section>

        </div>
    );
};

export default AppPage;
