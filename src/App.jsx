import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import ForBrands from './pages/ForBrands';
import './App.css';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="app-wrapper">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/for-brands" element={<ForBrands />} />
              <Route path="*" element={<Home />} /> {/* fallback to Home */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
