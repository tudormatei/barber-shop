import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  

import { Header, Footer, Home } from './container';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App