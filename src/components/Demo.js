// src/components/Demo.js

import React, { useEffect } from 'react';
import '../styles/main.css';
import SeeItInAction from "./SeeItInAction";

const Demo = () => {
    return (
        <section id="demo" className="demo">
            <h2 className="section-title">See It in Action</h2>
            {/* See It in Action Section */}
            <SeeItInAction />
        </section>
    );
};

export default Demo;
