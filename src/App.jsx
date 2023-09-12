import React from 'react'
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
