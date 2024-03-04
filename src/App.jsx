import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '/src/components/Navbar';
import Home from '/src/pages/Home';
import Menu from "/src/pages/Menu"
import WhyUs from '/src/pages/WhyUs'
import Contact from '/src/pages/Contact'
import FooterTwo from '/src/components/FooterTwo'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="WhyUS" element={<WhyUs />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <FooterTwo />
      </Router>

    </div>
  );
}

export default App;
