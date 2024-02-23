import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from "./pages/Menu"
import WhyUs from './pages/WhyUs'
import Contact from './pages/Contact'
import FooterTwo from './components/FooterTwo'


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
