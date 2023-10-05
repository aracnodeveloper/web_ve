import React from 'react'

import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomeUI  from './views/homeUI';
import NoPage from './views/noPageUI';
import NavBar from './views/menuUI';
import Login from './views/loginUI';
import Ofertas from './views/ofertasUI';
//función de menú principal
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>   
          <Route path="/" element={<HomeUI />} />
          <Route path="/menu" element={<NavBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="*" element={<NoPage />} />        
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App

