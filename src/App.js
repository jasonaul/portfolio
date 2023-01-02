import React from 'react'
import './App.css';
import './index.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// import Navbar from './components/Navbarv2';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import Skills from './routes/Skills';
import Footer from './components/Footer';


function App() {
  return (
    
    <>
    <Navbar />
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/projects" element={<Projects />} />
      <Route  path="/skills" element={<Skills />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/contact" element={<Contact />} />

    </Routes>
    <Footer />
    

    {/* <div class='App'>
      <div class="hero-image">
    <Navbar />
    <Home />
    </div>
    </div> */}
 


  </>)
}

export default App;
