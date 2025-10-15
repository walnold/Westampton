import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/icon_logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Our Approach", to: "/our-approach" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo & Tagline */}
        <Link to="/" className="logo-area" onClick={() => setMenuOpen(false)}>
          <motion.img
            src={logo}
            alt="Westampton Solutions Limited Logo"
            className="logo"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <span className="tagline">Empowering Digital Transformation</span>
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Link to={link.to} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
