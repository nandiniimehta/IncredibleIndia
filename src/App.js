import logo from './logo.svg';
import Header from './components/Header.js';
import './App.css';
import Navbar from './components/Navbar.js';
// import MainContent from './components/MainContent.js';
// import MainContent2 from '../MainContent2.js';
import Home from './components/Home.js';
import React, { useState } from 'react';
// import HeritageContent from './components/Heritage/HeritageContent.js';



function App() {


  return (
    <>

      <div>
        <Header />
        <Navbar />
        <Home />
        {/* <HeritageContent/> */}
      </div>
    </>
  );
}

export default App;
