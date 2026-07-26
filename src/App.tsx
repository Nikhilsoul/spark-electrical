
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import CallButton from "./components/CallButton";

import Home from "./pages/Home";
import Gallery from "./components/Gallery";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen font-sans selection:bg-brand-yellow selection:text-brand-dark">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/portfolio" element={<Portfolio />} />

           {/* Invalid URL Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
        {/* Floating Buttons */}
       <CallButton />      {/* Left side */}
       <WhatsAppButton /> {/* Right side */}
      </div>
    </BrowserRouter>
  );
}