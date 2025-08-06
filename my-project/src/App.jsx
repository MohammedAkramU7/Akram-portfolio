import React from "react";
import "./index.css";
import "./font.css";
import Header from './components/Header'
import Hero from './components/Hero-section'
import Work from './components/Work'
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AboutPopup from "./components/AboutPopup";
import AboutMe from "./components/Aboutme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






function App() {

  return (


    <div>
      <Header />
      <Router>
        <Routes>

          <Route path="/" element={<Hero />} />
          <Route path="/latest-works" element={<Work />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/about-me" element={<AboutPopup />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
      <Footer />

    </div>


  )
}

export default App;
