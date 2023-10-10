import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './App.scss';
import "@fontsource/work-sans"; // Defaults to weight 400
import "@fontsource/work-sans/400.css"; // Specify weight
import "@fontsource/work-sans/400-italic.css"; // Specify weight and style

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
