// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar(){
//   const [open,setOpen]=useState(false);
//   return (
//     <header className="nav-wrap">
//       <div className="container nav-row">
//         <NavLink to="/" className="logo">Westampton</NavLink>

//         <button className={`hamburger ${open? "open":""}`} onClick={()=>setOpen(!open)} aria-label="Toggle menu">
//           <span/><span/><span/>
//         </button>

//         <nav className={`nav-links ${open? "open":""}`}>
//           <NavLink to="/" end onClick={()=>setOpen(false)}>Home</NavLink>
//           <NavLink to="/about" onClick={()=>setOpen(false)}>About</NavLink>

//           <div className="services-dropdown">
//             <button className="dropbtn">Services ▾</button>
//             <div className="dropdown-menu">
//               <a href="/services#dfs" onClick={()=>setOpen(false)}>Digital Financial Services</a>
//               <a href="/services#risk-advisory" onClick={()=>setOpen(false)}>IT & Cybersecurity Risk Management</a>
//               <a href="/services#market-entry" onClick={()=>setOpen(false)}>Market Entry & Business Development</a>
//               <a href="/services#staff-augmentation" onClick={()=>setOpen(false)}>Staff Augmentation</a>
//             </div>
//           </div>

//           <NavLink to="/our-approach" onClick={()=>setOpen(false)}>Our Approach</NavLink>
//           <NavLink to="/contact" className="contact-link" onClick={()=>setOpen(false)}>Contact</NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// }

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/icon_logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo & Tagline */}
        <Link to="/" className="logo-area">
          <motion.img
            src={logo}
            alt="Westampton Solutions"
            className="logo"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <span className="tagline">Empowering Digital Transformation</span>
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {["Home", "About", "Our Approach", "Contact"].map((name, i) => (
            <motion.div
              key={name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Link to={`/${name.toLowerCase().replace(" ", "-")}`}>
                {name}
              </Link>
            </motion.div>
          ))}

          {/* Dropdown Section */}
          <motion.div
            className="dropdown"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={linkVariants}
          >
            <span>Services ▾</span>
            <div className="dropdown-content">
              <a href="/services#dfs">Digital Financial Services</a>
              <a href="/services#risk-advisory">IT & Cybersecurity Risk</a>
              <a href="/services#market-entry">Market Entry Advisory</a>
              <a href="/services#staff-augmentation">Staff Augmentation</a>
            </div>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
