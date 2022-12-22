import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// import Navbar from './components/Navbarv2';
import Home from './pages/Home';

function App() {
  return (

    <>
    <div class='App'>
      <div class="hero-image">
    <Navbar />
    <Home />
    </div>
    </div>
 


  </>)
}

export default App;
