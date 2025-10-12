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

export default function App() {
  useIntersectionObserver(); // applies fade-up -> visible for .fade-up class
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/insights" element={<Insights/>}/> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
