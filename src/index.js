import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import './App.scss';
import "@fontsource/work-sans"; // Defaults to weight 400
import "@fontsource/work-sans/400.css"; // Specify weight
import "@fontsource/work-sans/400-italic.css"; // Specify weight and style
import { Provider } from 'react-redux';
import store from "./redux/store";


const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


