import React, { useState } from 'react';
import '../styles/main.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [modalVisible, setModalVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend)
        setModalVisible(true);
        setFormData({ name: '', email: '', message: '' });
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <section id="contact" className="contact section-spacing">
            <h2 className="section-title">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" value={formData.name} onChange={handleChange} required />

                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

                <button type="submit" className="btn">Send Message</button>
            </form>

            {modalVisible && (
                <div className="modal show">
                    <div className="modal-content">
                        <div className="icon-container">
                            {/* Add an icon here if desired */}
                        </div>
                        <h2>Message Sent!</h2>
                        <p>Thank you for contacting us. We'll get back to you shortly.</p>
                        <button className="btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
