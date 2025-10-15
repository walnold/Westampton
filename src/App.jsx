import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
// import Insights from "./components/Insights/Insights";
import useIntersectionObserver from "./utils/useIntersectionObserver";
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/About/AboutPage";
import Approach from "./pages/Approach/Approach";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  useIntersectionObserver(); // applies fade-up -> visible for .fade-up class
  return (
    <>
      <main>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-approach" element={<Approach />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
