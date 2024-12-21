// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css'; // Ensure the path is correct
import App from './App';
// import reportWebVitals from './reportWebVitals'; // Removed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
