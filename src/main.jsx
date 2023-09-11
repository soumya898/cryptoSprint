import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CryptoProvider from './Context/CryptoProvider.jsx';

import 'react-alice-carousel/lib/alice-carousel.css';
ReactDOM.render(
  <BrowserRouter>
    <CryptoProvider>
      <App />
    </CryptoProvider>

  </BrowserRouter>


  , document.getElementById('root')
);
