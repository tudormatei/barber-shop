import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  

import { Header, Footer, Home, Pricing, Gallery, Contact, Error } from './container';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App